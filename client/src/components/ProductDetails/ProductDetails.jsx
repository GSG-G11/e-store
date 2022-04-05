import { useNavigate, useParams } from 'react-router-dom';
import Info from '../Info';
import Product from '../Product';

const ProductDetails = (props) => {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const { addToCart } = props;

  return (
    <>
      <Info
        title="Product Details"
        label="Product"
        button="Continue Shopping"
        icon="fa-solid fa-angle-right"
        onClick={() => navigate('/')}
      />
      <div className="container">
        <Product productId={productId} addToCart={addToCart} />
      </div>
    </>
  );
};

export default ProductDetails;
