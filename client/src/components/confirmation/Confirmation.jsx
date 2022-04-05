import Button from '../generic/Button';
import './Confirmation.css'

const Confirmation = ({ handleCancel, handelDelete }) => {
  return (
    
    <div id="id01" class="modal">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
      <form class="modal-content" action="/action_page.php">
        <div class="container">
          <h1>Delete Product</h1>
          <p>Are you sure you want to delete your this item?</p>
        
          <div class="clearfix">
          <Button 
             className="cancelbtn"
             type="submit"
             children="Cancel"
             handleOnClick={handelDelete} />
             <Button  className="deletebtn"
             type="submit"
             children="Confirm"
             handleOnClick={handleCancel} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Confirmation;