import Input from '../generic/Input';
import Button from '../generic/Button';
import Title from '../generic/Title';
import Select from '../generic/Select';
import './AddForm.css';

const AddForm = ({ addProductHandler }) => {
  const category = ['Laptop', 'Phone', 'TV'];

  return (
    <main className="addProduct">
      <form onSubmit={addProductHandler}>
        <Title className="title" value="Add Product" />
        <div className="pairs">
          <Input name="name" type="text" />
        </div>
        <div className="pairs">
          <Input name="photo" type="text" />
        </div>
        <div className="pairs-content">
          <Input name="price" type="number" />
          <label>
            Category
            <Select name="category" children={category} />
          </label>
        </div>
        <div className="pairs">
          <label className="label-description" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="description"
          ></textarea>
        </div>

        <Button className="button" type="reset" children="Cancel" />
        <Button className="button" type="submit" children="Create" />
      </form>
    </main>
  );
};

export default AddForm;
