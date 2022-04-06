import Button from '../generic/Button';
import './Confirmation.css';

const Confirmation = ({
  popupConfirmHandler,
  deleteProductHandler,
  curProduct,
}) => {
  return (
    <div className="modal">
      <div className="container">
        <h1>Delete Product</h1>
        <p>Are you sure you want to delete your this item?</p>

        <div className="clearfix">
          <Button
            className="cancelbtn"
            type="submit"
            children="Cancel"
            onClick={() => popupConfirmHandler()}
          />
          <Button
            className="deletebtn"
            onClick={(e) => deleteProductHandler(curProduct.id)}
            type="submit"
            children="Confirm"
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
