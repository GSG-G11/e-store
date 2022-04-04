import './Cart.css'; 
import { Button, Icon } from '../generic';

const Cart = ({ cart, removeFromCart, increment, decrement, total,clearCart }) => {
    const fakeData=[
        {
        id: 1,
        name: "omen",
        img: "https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg",
        category: "laptop",
        price: 1200,
        description: "laptop omen beautiful and nice",
        quantity:2
        },
        {
        id: 2,
        name: "hp",
        img: "https://in-media.apjonlinecdn.com/catalog/product/c/0/c07145111.png",
        category: "laptop",
        price: 1000,
        description: "laptop hp beautiful and nice",
        quantity:3
        },
        {
        id: 3,
        name: "iphone",
        img: "https://me.kaspersky.com/content/ar-ae/images/repository/isc/2019-images/holding-iphone-3.jpg",
        category: "phone",
        price: 800,
        description: "iphone beautiful and nice",
        quantity:1
        },
        {
        id: 4,
        name: "tv",
        img: "https://images.samsung.com/is/image/samsung/ps-fhd-t5300-ue40t5300auxmi-frontblack-257177861?$720_576_PNG$",
        category: "TV",
        price: 500,
        description: "tv beautiful and nice",
        quantity:4
        },
        
        ]
  return (
      
    <div className="cart">
      <ul className="cart-list">
        {fakeData.map((item) => {
            let totalPricePerItem = item.price * item.quantity;
          return (
            <li key={item.id}>
              <div className="cart-item">
                  <div className='img-container'>
                <img src={item.img} alt="" />
                </div>
                <div className="item-details">
                    <div className='item-info'>
                  <p className="name">{item.name}</p>
                  <p className="price">Price per each <span className='price-tag'>{item.price}$</span></p>
                  <p className="price">total price <span className='price-tag'>{totalPricePerItem}$</span></p>
                  </div>
                  </div>
                  <div className="actions">

                      <div className='quantity'>
                    <Icon
                      className="fa fa-plus"
                      onClick={() => increment(item.id)}
                      parentClassName='icon-container'
                    >
                    </Icon>
                    <span>{item.quantity}</span>
                    <Icon
                      className="fa fa-minus"
                      onClick={() => decrement(item.id)}
                      parentClassName='icon-container'
                    >
                    </Icon>
                    </div>
                    <Icon
                    parentClassName='icon-container'
                      className="fa fa-trash"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
              
            </li>
          );
        })}
      </ul>
      <div className='total-price'>
    <p>Total price</p>
    <p className='price-tag'>{total || 2000}$</p>
    <Button onClick={()=>clearCart()}><i className="fa-solid fa-credit-card"></i>  Proceed to checkout</Button>
    </div>
    
    </div>
    
  );
};



export default Cart;