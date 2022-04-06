import React from 'react';
import { useNavigate } from 'react-router-dom';
import Info from '../Info';
import Loader from '../Loader';
import ProductCard from '../ProductCard';
import Select from '../generic/Select';
import './Home.css';

const Home = (props) => {
  const {
    products,
    addToCart,
    searchTerm,
    handleChange,
    priceTerm,
    categoryTerm,
    popupConfirmHandler,
    isLoggedIn,
    popupToggleHandler,
    editProductHandler,
    deleteProductHandler,
    isLoading,
  } = props;

  const category = ['All', 'Laptop', 'Phone', 'TV'];
  const price = ['High to Low', 'Low to High'];

  const navigate = useNavigate();

  const filteredData = products
    .filter((product) => {
      if (searchTerm.length === 0) return true;
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .filter((product) => {
      if (categoryTerm === 'All') return true;
      return product.category === categoryTerm;
    })
    .sort((a, b) => {
      if (priceTerm === 'High to Low') return b.price - a.price;
      return a.price - b.price;
    });

  return (
    <>
      <Info
        title="Home"
        label="Products"
        button={isLoggedIn ? 'Add Product' : 'Go To Cart'}
        icon="fa-solid fa-angle-right"
        onClick={!isLoggedIn ? () => navigate('/cart') : popupToggleHandler}
      />

      <div className="container">
        <h1 className="home-heading">
          <span>Top Selling Products</span>
        </h1>
        <Select
          name="categoryTerm"
          value={categoryTerm}
          children={category}
          onChange={handleChange}
        />
        <Select
          name="priceTerm"
          value={priceTerm}
          children={price}
          onChange={handleChange}
        />
        {!isLoading ? (
          <div className="products">
            {filteredData.length ? (
              filteredData.map((product) => {
                const { id, img, category, name, price } = product;

                return (
                  <ProductCard
                    isLoggedIn={isLoggedIn}
                    key={id}
                    id={id}
                    popupConfirmHandler={popupConfirmHandler}
                    image={img}
                    category={category}
                    title={name}
                    price={price}
                    addToCart={addToCart}
                    editProductHandler={editProductHandler}
                    deleteProductHandler={deleteProductHandler}
                  />
                );
              })
            ) : (
              <div>No Items Found</div>
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Home;
