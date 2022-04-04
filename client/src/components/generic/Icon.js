import './Icon.css';
const Icon = (props) => {
  const { type, children, onClick, ...rest } = props;
  return (
    <div onClick={onClick} className="icon-container">
      <i className={`fa fa-${type}`} {...rest} id="icon">
        {children}
      </i>
    </div>
  );
};
export default Icon;
