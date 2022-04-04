import Button from '../generic/Button';
import './ProductDetails.css';

const ProductDetails = ({ productData }, AddToCard) => {
    const { id, name, img, category, price, description } = productData;

    return (
        <div className='Product-container'>
            <div className='image-container'>
                <img className='image-class' src={img} alt={name} />
            </div>
            <div className='detail-container'>
                <h3 className='name'> {name} </h3>
                <p className='price'>{price}</p>
                <p >{category}</p>
                <p className='description'>{description}</p>

                <Button onClick={AddToCard} />
            </div>
        </div>
    )
}
export default ProductDetails;