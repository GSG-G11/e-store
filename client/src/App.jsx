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
    cart: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
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

  addToCart = (newProduct) => {
    let { cart } = this.state;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === newProduct.id) {
        cart[i].quantity += 1;
        cart[i].totalPrice += cart[i].price;
        this.setState({ cart });
        localStorage.setItem('cart', JSON.stringify(cart));
        return;
      }
    }
    cart.push({ ...newProduct, quantity: 1, totalPrice: newProduct.price });
    this.setState({ cart });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  decrementFromCart = (id) => {
    let { cart } = this.state;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].quantity -= 1;
        cart[i].totalPrice -= cart[i].price;
        if (cart[i].quantity === 0) {
          cart.splice(i, 1);
        }
        this.setState({ cart });
        localStorage.setItem('cart', JSON.stringify(cart));
        return;
      }
    }
  };
  removeFromCart = (id) => {
    let { cart } = this.state;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart.splice(i, 1);
        this.setState({ cart });
        localStorage.setItem('cart', JSON.stringify(cart));
        return;
      }
    }
  };
  clearCart = () => {
    this.setState({ cart: [] });
    localStorage.setItem('cart', JSON.stringify([]));
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
    const { searchTerm, navShow, products, cart } = this.state;
    let numberOfProducts = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
      <>
        <Router>
          <Navbar
            searchTerm={searchTerm}
            navShow={navShow}
            navToggleHandler={this.navToggleHandler}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
            numberOfProducts={numberOfProducts}
          />
          <Routes>
            <Route
              path="/"
              element={<Home products={products} addToCart={this.addToCart} />}
            />
            Car
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  decrement={this.decrementFromCart}
                  increment={this.addToCart}
                  removeFromCart={this.removeFromCart}
                  clearCart={this.clearCart}
                />
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
