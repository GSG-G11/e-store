import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../generic';
import './ProductCard.css';

const ProductCard = (props) => {
  const { id, image, category, title, price, addToCart } = props;

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
            <Icon
              className="fa-solid fa-cart-plus"
              onClick={() => addToCart({id,img:image,category,name:title,price:Number(price)})}
            ></Icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
