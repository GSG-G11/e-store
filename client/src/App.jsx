import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, ProductDetails } from './components';
import './index.css';
const productData={id:1, name:'laptop', img:'', category: "lab", price:20,description:"mmm"  }

class App extends Component {
  state = {
    searchTerm: '',
    navShow: false,
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

  render() {
    const { searchTerm, navShow } = this.state;

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
          {/* <ProductDetails productData= {productData} /> */}
          
          <Routes>
            <Route path="/" element="home" />
            <Route path="/cart" element="Cart" />
            <Route path="/login" element="login" />
            <Route path="/product" element={<ProductDetails productData= {productData}/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
