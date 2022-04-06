import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import {
  Navbar,
  Login,
  Home,
  AddForm,
  ProductDetails,
  Confirmation,
  Cart,
  Err,
} from './components';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searchTerm: '',
    categoryTerm: 'All',
    priceTerm: 'High to Low',
    navShow: false,
    popUpDisplay: false,
    confirmDisplay: false,
    errMessage: '',
    products: [],
    cart: localStorage.cart ? JSON.parse(localStorage.cart) : [],
    isLoggedIn: localStorage.isLoggedIn
      ? JSON.parse(localStorage.isLoggedIn)
      : false,
    curProduct: { id: '', name: '', description: '', category: '', photo: '' },
    isLoading: true,
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
    toast.success(`${newProduct.name} added to cart!`);
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

  incrementFromCart = (product) => {
    let { cart } = this.state;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        cart[i].quantity += 1;
        cart[i].totalPrice += cart[i].price;
        this.setState({ cart });
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
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
    toast.error('Removed from cart!');
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
    toast.error('Cart is cleared!');
    this.setState({ cart: [] });
    localStorage.setItem('cart', JSON.stringify([]));
  };

  addProductHandler = (e, productId = 0) => {
    e.preventDefault();
    const { name, price, description, photo, category } = e.target;
    const data = {
      name: name.value.trim(),
      price: price.value.trim(),
      description: description.value.trim(),
      img: photo.value.trim(),
      category: category.value.trim(),
    };

    if (
      data.name === '' ||
      data.price === '' ||
      data.description === '' ||
      data.img === '' ||
      data.category === ''
    )
      return;

    if (!productId) {
      axios
        .post('/api/v1/product', data)
        .then((res) => {
          this.setState((prevState) => {
            return {
              products: [...prevState.products, res.data.product],
              popUpDisplay: false,
            };
          });
        })
        .catch((err) => {
          if (err.response.status === 500) {
            window.location.href = '/error';
          } else if (err.response.status === 400) {
            this.setState({ errMessage: err.response.data.message });
          }
        });
    } else {
      axios
        .put(`/api/v1/product/${productId}`, data)
        .then((res) => {
          const editedProduct = res.data.product;
          this.setState((prevState) => {
            return {
              products: prevState.products.map((product) => {
                return product.id !== editedProduct.id
                  ? product
                  : editedProduct;
              }),
              popUpDisplay: false,
            };
          });
        })
        .catch((err) => {
          if (err.response.status === 500) {
            window.location.href = '/error';
          } else if (err.response.status === 400) {
            this.setState({ errMessage: err.response.data.message });
          }
        });
    }
  };

  editProductHandler = (productId) => {
    this.popupToggleHandler();
    const { products } = this.state;

    const itemToEdit = products.find((product) => product.id === productId);
    const photo = itemToEdit.img;
    this.setState({ curProduct: { ...itemToEdit, photo } });
  };

  updateCurProduct = ({ target: { name, value } }) => {
    this.setState((prevState) => {
      return { curProduct: { ...prevState.curProduct, [name]: value } };
    });
  };

  handleIsEditable = ({ target: { id } }) => {
    const { editable, products } = this.state;
    const editableProduct = products.filter((product) => product.id === +id);
    this.setState({
      editable: editableProduct[0].id === +id ? [!editable[0], +id] : null,
    });
  };

  deleteProductHandler = (productId) => {
    console.log(productId);
    axios
      .delete(`/api/v1/product/${productId}`)
      .then(() => {
        this.setState((prevState) => ({
          products: prevState.products.filter(
            (product) => product.id !== productId
          ),
          confirmDisplay: false,
        }));
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log(err);
        } else if (err.response.status === 400) {
          this.setState({ errMessage: err.response.data.message });
        }
      });
  };

  componentDidMount = () => {
    axios
      .get('/api/v1/products')
      .then((res) => {
        if (res.status === 200) {
          this.setState({ products: res.data.products, isLoading: false });
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          window.location.href = '/error';
        }
      });
  };

  popupConfirmHandler = (id) => {
    this.setState((previousState) => ({
      confirmDisplay: !previousState.confirmDisplay,
      curProduct: { ...previousState.curProduct, id },
    }));
  };

  popupToggleHandler = (cancel) => {
    this.setState((prevState) => ({
      popUpDisplay: !prevState.popUpDisplay,
      errMessage: '',
    }));

    if (cancel) {
      this.setState({
        curProduct: {
          id: '',
          name: '',
          description: '',
          category: '',
          photo: '',
        },
      });
    }
  };

  render() {
    const {
      searchTerm,
      navShow,
      products,
      popUpDisplay,
      cart,
      categoryTerm,
      priceTerm,
      isLoggedIn,
      errMessage,
      curProduct,
      confirmDisplay,
      isLoading,
    } = this.state;
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
              element={
                <>
                  <Home
                    products={products}
                    isLoggedIn={isLoggedIn}
                    searchTerm={searchTerm}
                    isLoading={isLoading}
                    handleChange={this.handleChange}
                    addToCart={this.addToCart}
                    categoryTerm={categoryTerm}
                    popupConfirmHandler={this.popupConfirmHandler}
                    priceTerm={priceTerm}
                    popupToggleHandler={this.popupToggleHandler}
                    editProductHandler={this.editProductHandler}
                    deleteProductHandler={this.deleteProductHandler}
                  />
                  <ToastContainer />
                </>
              }
            />
            Car
            <Route
              path="/cart"
              element={
                <>
                  <Cart
                    cart={cart}
                    decrement={this.decrementFromCart}
                    increment={this.incrementFromCart}
                    removeFromCart={this.removeFromCart}
                    clearCart={this.clearCart}
                  />
                  <ToastContainer />
                </>
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
              element={
                <ProductDetails
                  addToCart={this.addToCart}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path="/error" element={<Err status={500} />} />
            <Route path="/not-found" element={<Err status={404} />} />
            <Route path="*" element={<Err status={404} />} />
          </Routes>
        </Router>
        {popUpDisplay && (
          <AddForm
            addProductHandler={this.addProductHandler}
            popupToggleHandler={this.popupToggleHandler}
            updateCurProduct={this.updateCurProduct}
            errMessage={errMessage}
            curProduct={curProduct}
          />
        )}
        {confirmDisplay && (
          <Confirmation
            popupConfirmHandler={this.popupConfirmHandler}
            curProduct={curProduct}
            deleteProductHandler={this.deleteProductHandler}
          />
        )}
      </>
    );
  }
}

export default App;
