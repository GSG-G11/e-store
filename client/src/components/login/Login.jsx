import Input from '../generic/Input';
import Button from '../generic/Button';
import Title from '../generic/Title';
import './Login.css';

const Login = ({ handleSubmit, handleChange }) => {
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Title className="title" value={'Log in'} />
        <div className="pairs">
          <Input name={'Username'} type={'text'} value={handleChange} />
        </div>
        <div className="pairs">
          <Input name={'Email'} type={'text'} value={handleChange} />
        </div>
        <div className="pairs">
          <Input name={'Password'} type={'text'} value={handleChange} />
        </div>
        <Button className="button" children={'Log In'} />
      </form>
    </main>
  );
};

export default Login;
