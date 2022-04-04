import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = (props) => {
  const { searchTerm, handleChange, handleSearch } = props;

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-image">
            <Link to="/">
              <img src={logo} alt="E-Store" />
            </Link>
          </div>
          <div className="nav-input">
            <input
              type="text"
              placeholder="Search Items..."
              name="searchTerm"
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={handleSearch}
            />
          </div>
          <ul className="nav-controls">
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
