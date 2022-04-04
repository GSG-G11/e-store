import Button from '../generic/Button';
import './ProductDetails.css';

const ProductDetails = (productData) => {
    const { id, name, img, category, price, description } = productData;
    
    return (
        <div className='container'>
            <div className='image-container'>
                <img className='image-class' src={img} alt={name} />
            </div>
            <div className='detail-container'>
                <h1 className='name'> {name} </h1>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>

                <Button />
            </div>
        </div>
    )
}
export default ProductDetails;