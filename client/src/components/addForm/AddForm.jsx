import Button from '../generic/Button';
import Title from '../generic/Title';
import Select from '../generic/Select';
import './AddForm.css';

const AddForm = (props) => {
  const {
    addProductHandler,
    popupToggleHandler,
    errMessage,
    curProduct,
    updateCurProduct,
  } = props;
  const category = ['Laptop', 'Phone', 'TV'];

  return (
    <main className="addProduct">
      <form
        onSubmit={
          !curProduct.id
            ? addProductHandler
            : (e) => addProductHandler(e, curProduct.id)
        }
        onChange={updateCurProduct}
      >
        <Title className="title" value="Add Product" />
        <div className="pairs">
          <label htmlFor="name">Product Title</label>
          <input type="text" name="name" value={curProduct.name} />
        </div>
        <div className="pairs">
          <label htmlFor="photo">Product Image</label>
          <input type="text" name="photo" value={curProduct.photo} />
        </div>
        <div className="flex">
          <div className="pairs">
            <label htmlFor="price">Product Price</label>
            <input type="number" name="price" value={curProduct.price} />
          </div>
          <div className="pairs">
            <label>
              Category
              <Select
                name="category"
                children={category}
                value={curProduct.category}
              />
            </label>
          </div>
        </div>
        <div className="pairs">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="description"
            value={curProduct.description}
          ></textarea>
        </div>
        <div id="error">{errMessage}</div>
        <div className="btns">
          <Button
            className="button"
            type="reset"
            children="Cancel"
            onClick={() => popupToggleHandler(true)}
          />
          <Button className="button" type="submit" children="Create" />
        </div>
      </form>
    </main>
  );
};

export default AddForm;
