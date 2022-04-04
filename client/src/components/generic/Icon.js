import './Icon.css';
const Icon = (props) => {
  const { className, children, onClick, parentClassName, ...rest } = props;
  return (
    <div onClick={onClick} className={`icon-container ${parentClassName}`}>
      <i className={className} {...rest}>
        {children}
      </i>
    </div>
  );
};
export default Icon;
