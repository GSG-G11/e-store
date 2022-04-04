import './Icon.css';
const Icon = (props) => {
  const { className, children, onClick, ...rest } = props;
  return (
    <div onClick={onClick} className="icon-container">
      <i className={className} {...rest} id="icon">
        {children}
      </i>
    </div>
  );
};
export default Icon;
