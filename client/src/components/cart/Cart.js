import './Cart.css';
import { Button, Icon } from '../generic';
import Info from '../Info';
import { useNavigate } from 'react-router-dom';
const Cart = ({
  cart,
  removeFromCart,
  increment,
  decrement,
  total,
  clearCart,
}) => {
  const navigate = useNavigate();
  let totalPrice = 0;
  return (
    <>
      <Info
        title="Your Cart"
        label="products"
        button="Go To home Page"
        icon="fa-solid fa-angle-right"
        onClick={() => navigate('/')}
      />

      <div className="cart">
        <ul className="cart-list">
          {cart.map((item) => {
            totalPrice += item.totalPrice;
            return (
              <li key={item.id}>
                <div className="cart-item">
                  <div
                    className="img-container"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img src={item.img} alt="" />
                  </div>
                  <div className="item-details">
                    <div className="item-info">
                      <p
                        className="name"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        {item.name}
                      </p>
                      <p className="price">
                        Price per each{' '}
                        <span className="price-tag">{item.price}$</span>
                      </p>
                      <p className="price">
                        total price{' '}
                        <span className="price-tag">{item.totalPrice}$</span>
                      </p>
                    </div>
                  </div>
                  <div className="actions">
                    <div className="quantity">
                      <Icon
                        className="fa fa-plus"
                        onClick={() => increment(item)}
                        parentClassName="icon-container-cart"
                      ></Icon>
                      <span>{item.quantity}</span>
                      <Icon
                        className="fa fa-minus"
                        onClick={() => decrement(item.id)}
                        parentClassName="icon-container-cart"
                      ></Icon>
                    </div>
                    <Icon
                      parentClassName="icon-container-cart"
                      className="fa fa-trash"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {!cart.length ? (
          <div className="total-price">No items in cart</div>
        ) : (
          <div className="total-price">
            <p>Total price</p>
            <p className="price-tag">{totalPrice}$</p>
            <Button onClick={() => clearCart()}>
              <i className="fa-solid fa-credit-card"></i> Proceed to checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
