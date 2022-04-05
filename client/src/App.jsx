import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  Navbar,
  Login,
  Home,
  AddForm,
  ProductDetails,
  serverError,
  notFound,
} from "./components";
import Cart from "./components/cart/Cart";
import "./index.css";

class App extends Component {
  state = {
    searchTerm: "",
    navShow: false,
    popUpDisplay: false,
    errMessage: "",
    products: [],
    cart: JSON.parse(localStorage.cart) || [],
    isLoggedIn: JSON.parse(localStorage.isLoggedIn) || false,
    curProduct: { id: "", name: "", description: "", category: "", photo: "" },
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
    localStorage.setItem("isLoggedIn", true);
    window.location.href = "/";
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    localStorage.setItem("isLoggedIn", false);
    window.location.href = "/";
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
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
      }
    }
    cart.push({ ...newProduct, quantity: 1, totalPrice: newProduct.price });
    this.setState({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
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
        localStorage.setItem("cart", JSON.stringify(cart));
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
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
      }
    }
  };

  clearCart = () => {
    this.setState({ cart: [] });
    localStorage.setItem("cart", JSON.stringify([]));
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
      data.name === "" ||
      data.price === "" ||
      data.description === "" ||
      data.img === "" ||
      data.category === ""
    )
      return;

    if (!productId) {
      axios
        .post("http://localhost:5000/api/v1/product", data)
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
            window.location.href = <serverError />;
          } else if (err.response.status === 400) {
            this.setState({ errMessage: err.response.data.message });
          }
        });
    } else {
      axios
        .put(`http://localhost:5000/api/v1/product/${productId}`, data)
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
            window.location.href = <serverError />;
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

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/api/v1/products")
      .then((res) => {
        if (res.status === 200) {
          this.setState({ products: res.data.products });
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          window.location.href = <serverError />;
        }
      });
  };

  popupToggleHandler = (cancel) => {
    this.setState((prevState) => ({
      popUpDisplay: !prevState.popUpDisplay,
      errMessage: "",
    }));

    if (cancel) {
      this.setState({
        curProduct: {
          id: "",
          name: "",
          description: "",
          category: "",
          photo: "",
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
      isLoggedIn,
      errMessage,
      curProduct,
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
                <Home
                  products={products}
                  isLoggedIn={isLoggedIn}
                  searchTerm={searchTerm}
                  addToCart={this.addToCart}
                  popupToggleHandler={this.popupToggleHandler}
                  editProductHandler={this.editProductHandler}
                />
              }
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
            <Route path="/error" element={<serverError />} />
            <Route path="*" element={<notFound />} />
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
      </>
    );
  }
}

export default App;
