import Input from '../generic/Input';
import Button from '../generic/Button';
import Title from '../generic/Title';
import Select from '../generic/Select';
import './AddForm.css';

const AddForm = ({ handleSubmit, handleChange }) => {
  const category = [
    'Laptop',
    'Phone',
    'TV'
  ]
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Title className="title" value={'Add Product'} /> 
        <div className='pairs'>
          <Input name={'Name'} type={'text'} value={handleChange} />
          </div>
          <div className='pairs'>
          <Input name={'Photo'} type={'text'} value={handleChange} />
            </div>
        <div className="pairs-content">
          <Input name={'Price'} type={'number'} value={handleChange}/>
          <label>
            Category
          <Select name={'category'} children={category} />
          </label>
        </div>  
        <div className='pairs'>
          <label className='label-description' htmlFor='description'>
            Description
          </label>
            <textarea id='description' className='description'></textarea>
        </div>
       
        <Button className="button" children={'Cancel'} />
        <Button className="button" children={'Create'} />
      </form>
    </main>
  );
};

export default AddForm;
