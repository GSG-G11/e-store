import Input from '../generic/Input';
import Button from '../generic/Button';
import Title from '../generic/Title';
import './Login.css';

const Login = ({ handleSubmit, handleChange }) => {
  return (
    <main className="login">
      <form onSubmit={handleSubmit}>
        <Title className="title" value={'Log in'} />
        <div className="pairs">
          <Input name="username" type={'text'} />
        </div>
        <div className="pairs">
          <Input name="email" type="email" />
        </div>
        <div className="pairs">
          <Input name="password" type="password" />
        </div>
        <Button className="button" children={'Log In'} />
      </form>
    </main>
  );
};

export default Login;
