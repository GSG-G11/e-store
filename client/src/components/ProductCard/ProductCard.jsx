import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../generic';
import './ProductCard.css';

const ProductCard = (props) => {
  const { id, image, category, title, price, addToCart, isLoggedIn } = props;

  return (
    <>
      <div className="pro-card">
        <div className="pro-card-image">
          <Link to={`/product/${id}`}>
            <img src={image} alt="title" />
          </Link>
        </div>
        <div className="text">
          <p className="pro-card-category">{category}</p>
          <p className="pro-card-title">{title}</p>
          <div className="pro-card-footer">
            <span>${price}</span>
            {!isLoggedIn ? (
              <Icon
                className="fa-solid fa-cart-plus"
                onClick={() =>
                  addToCart({
                    id,
                    img: image,
                    category,
                    name: title,
                    price: Number(price),
                  })
                }
              ></Icon>
            ) : (
              <div className="seller-icons">
                <Icon
                  className="fas fa-edit"
                  onClick={() => 'edit function goes here'}
                />
                <Icon
                  className="fas fa-trash"
                  onClick={() => 'delete function goes here'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
