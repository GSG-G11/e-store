import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../generic';
import './Navbar.css';
import logo from '../../images/logo.png';

const Navbar = (props) => {
  const { searchTerm, handleChange, handleSearch, navShow, navToggleHandler } =
    props;

  const navigate = useNavigate();

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
          <Icon
            className="fa-solid fa-bars"
            parentClassName={`nav-bars`}
            onClick={navToggleHandler}
          ></Icon>
          <ul className={`nav-controls ${navShow && 'active'}`}>
            <li>
              <Link to="/cart">
                <Icon className="fa-solid fa-cart-shopping"></Icon>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Button
                children="Login"
                onClick={() => navigate('/login')}
              ></Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
