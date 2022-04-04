import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Login, Home } from './components';
import Cart from './components/cart/Cart';
import './index.css';

class App extends Component {
  state = {
    searchTerm: '',
    navShow: false,
    products: [],
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSearch = ({ key }) => {
    const { searchTerm } = this.state;

    if (key === 'Enter' && searchTerm !== '') {
      // Do Stuff...
    }
  };

  navToggleHandler = () => {
    this.setState((prevState) => ({ navShow: !prevState.navShow }));
  };

  addToCart = (newPrdouct) => {
    let { cart } = this.state;
    for(let i=0; i<cart.length; i++) {
      if(cart[i].id === newPrdouct.id) {
        cart[i].quantity += 1;
        cart[i].totalPrice += cart[i].price;
        this.setState({ cart });
        localStorage.setItem('cart', JSON.stringify(cart));
        return;
      }
    }
    cart.push({...newPrdouct, quantity: 1,totalPrice:newPrdouct.price});
    this.setState({ cart });
    localStorage.setItem('cart', JSON.stringify(cart));
    
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/api/v1/products')
      .then((res) => {
        if (res.status === 200) {
          this.setState({ products: res.data.products });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { searchTerm, navShow, products ,cart} = this.state;

    return (
      <>
        <Router>
          <Navbar
            searchTerm={searchTerm}
            navShow={navShow}
            navToggleHandler={this.navToggleHandler}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
          />
          <Routes>
            <Route
              path="/"
              element={<Home products={products} addToCart={this.addToCart} />}
            />
            Car
            <Route path="/cart" element={<Cart cart={cart} increment={this.addToCart}/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
