import React from 'react';
import { useNavigate } from 'react-router-dom';
import Info from '../Info';
import ProductCard from '../ProductCard';
import { Title } from '../generic';
import './Home.css';

const Home = (props) => {
  const { products, addToCart } = props;
  const navigate = useNavigate();

  return (
    <>
      <Info
        title="Home"
        label="Products"
        button="Go To Cart"
        icon="fa-solid fa-angle-right"
        onClick={() => navigate('/cart')}
      />

      <div className="container">
        <h1 className="home-heading">
          <span>Top Selling Products</span>
        </h1>

        <div className="products">
          {products.length &&
            products.map((product) => {
              const { id, img, category, name, price } = product;

              return (
                <ProductCard
                  key={id}
                  id={id}
                  image={img}
                  category={category}
                  title={name}
                  price={price}
                  addToCart={addToCart}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
