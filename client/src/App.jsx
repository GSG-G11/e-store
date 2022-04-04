import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Login } from './components';
import './index.css';

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
          <Routes>
            <Route path="/" element="home" />
            <Route path="/cart" element="cart" />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
