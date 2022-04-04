import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Navbar, Login, Home, AddForm } from './components';
import './index.css';

class App extends Component {
  state = {
    searchTerm: '',
    navShow: false,
    popUpDisplay: false,
    products: [],
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

  addToCart = (id) => {
    // Do Stuff...
  };

  componentDidMount = () => {
    axios
      .get('/api/v1/products')
      .then((res) => {
        if (res.status === 200) {
          this.setState({ products: res.data.products });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });

  render() {
    const { searchTerm, navShow, products, popUpDisplay } = this.state;

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
            <Route path="/cart" element="cart" />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
        {popUpDisplay &&
        <AddForm
          handleClosePopUp={this.handleClosePopUp}
        />}
      </>
    );
  }
}

export default App;
