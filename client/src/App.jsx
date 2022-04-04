import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import './index.css';

class App extends Component {
  state = {
    searchTerm: '',
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

  render() {
    const { searchTerm } = this.state;

    return (
      <>
        <Router>
          <Navbar
            searchTerm={searchTerm}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
          />
          <Routes>
            <Route path="/" element="home" />
            <Route path="/cart" element="cart" />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
