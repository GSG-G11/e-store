import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Login, Home, AddForm, ProductDetails } from './components';
import Cart from './components/cart/Cart';
import './index.css';

class App extends Component {
  state = {
    searchTerm: '',
    navShow: false,
    popUpDisplay: false,
    products: [],
    cart: localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [],
    isLoggedIn: localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn'))
      : false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
    localStorage.setItem('isLoggedIn', true);
    window.location.href = '/';
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    localStorage.setItem('isLoggedIn', false);
    window.location.href = '/';
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
        if (err.response.status === 500) {
          window.location.href = '/error';
        }
      });
  };

  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });

  render() {
    const { searchTerm, navShow, products, popUpDisplay, cart, isLoggedIn } =
      this.state;
    let numberOfProducts = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
      <>
        <Router>
          <Navbar
            searchTerm={searchTerm}
            navShow={navShow}
            navToggleHandler={this.navToggleHandler}
            handleChange={this.handleChange}
            numberOfProducts={numberOfProducts}
            isLoggedIn={isLoggedIn}
            handleLogout={this.handleLogout}
          />

          <Routes>
            <Route
              path="/"
              element={<Home products={products} searchTerm={searchTerm} addToCart={this.addToCart} isLoggedIn={isLoggedIn} />}
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
            <Route
              path="/login"
              element={
                <Login
                  handleChange={this.handleChange}
                  handleSubmit={this.handleLogin}
                />
              }
            />
            <Route
              path="product/:id"
              element={<ProductDetails addToCart={this.addToCart} />}
            />
            <Route path="/error" element={'Server Error'} />
            <Route path="*" element={'Page Not Found'} />
          </Routes>
        </Router>
        {popUpDisplay && <AddForm handleClosePopUp={this.handleClosePopUp} />}
      </>
    );
  }
}

export default App;
