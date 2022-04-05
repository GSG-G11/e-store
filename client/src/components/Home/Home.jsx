import React from 'react';
import { useNavigate } from 'react-router-dom';
import Info from '../Info';
import Loader from '../Loader';
import ProductCard from '../ProductCard';
import './Home.css';

const Home = (props) => {
  const { products, addToCart, searchTerm, isLoggedIn } = props;
  const navigate = useNavigate();

  const filteredData = products
    .filter((product) => {
      if (searchTerm.length === 0) return true;
      return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

  return (
    <>
      <Info
        title="Home"
        label="Products"
        button={isLoggedIn ? 'Add Product' : 'Go To Cart'}
        icon="fa-solid fa-angle-right"
        onClick={
          !isLoggedIn
            ? () => navigate('/cart')
            : () => 'your display function here'
        }
      />

      <div className="container">
        <h1 className="home-heading">
          <span>Top Selling Products</span>
        </h1>

        {products.length ? (
          <div className="products">
            {filteredData.length ?
              filteredData.map((product) => {
                const { id, img, category, name, price } = product;

                return (
                  <ProductCard
                    isLoggedIn={isLoggedIn}
                    key={id}
                    id={id}
                    image={img}
                    category={category}
                    title={name}
                    price={price}
                    addToCart={addToCart}
                  />
                );
              })
            : <div>No Items Found</div>
            }
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Home;
