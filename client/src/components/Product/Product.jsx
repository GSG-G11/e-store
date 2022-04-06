import { Component } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import { Button } from '../generic';
import './Product.css';

class Product extends Component {
  state = {
    curProduct: {},
  };

  componentDidMount = () => {
    const { productId } = this.props;

    axios
      .get(`/api/v1/product/${productId}`)
      .then((res) => {
        if (!res.data.product.length) window.location.href = '/not-found';
        if (res.status === 200) {
          this.setState({ curProduct: res.data.product[0] });
        }
      })
      .catch((err) => {
        if (err.response.status === 500) {
          window.location.href = '/error';
        }
      });
  };

  render() {
    const {
      state: {
        curProduct: { id, name, img, category, price, description },
      },
      props: { addToCart, isLoggedIn },
    } = this;

    return (
      <>
        {id ? (
          <div className="product-details">
            <div className="product-details__image">
              <img src={img} alt={name} />
            </div>
            <div className="product-details__text">
              <p className="title">{name}</p>
              <p className="description">{description}</p>
              <div className="product-footer">
                <span className="category">{category}</span>
                <span className="price">${price}</span>
              </div>
              {!isLoggedIn && (
                <Button
                  onClick={() => addToCart({ id, name, img, price: +price })}
                >
                  Add To Cart
                  <i className="fa-solid fa-cart-plus"></i>
                </Button>
              )}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default Product;
