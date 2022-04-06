import Button from '../generic/Button';
import Title from '../generic/Title';

const Login = ({ handleSubmit, handleChange }) => {
  return (
    <main className="addProduct">
      <form onSubmit={handleSubmit}>
        <Title className="title" value={'Log in'} />
        <div className="pairs">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="pairs">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="pairs">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <Button className="button" children="Log In" />
      </form>
    </main>
  );
};

export default Login;
