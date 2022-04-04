import './Button.css';
const Button =(props)=>{
  const {
    children,
    onClick,
    ...rest
  } = props;
  return (
    <button
      className='button'
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;