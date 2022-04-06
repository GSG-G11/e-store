import Button from '../generic/Button';
import './Confirmation.css'

const Confirmation = ({ popupConfirmHandler, deleteProductHandler, curProduct }) => {
  return (
    
    <div id="id01" class="modal">
      <form class="modal-content" onSubmit={(e) => deleteProductHandler(e, curProduct.id)}>
        <div class="container">
          <h1>Delete Product</h1>
          <p>Are you sure you want to delete your this item?</p>
        
          <div class="clearfix">
          <Button 
             className="cancelbtn"
             type="submit"
             children="Cancel"
             onClick={() => popupConfirmHandler(true)} />
             <Button  className="deletebtn"
             type="submit"
             children="Confirm"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Confirmation;