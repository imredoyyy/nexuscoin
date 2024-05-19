// import { Link } from "react-router-dom";

const Button = ({ onClick, className, children, href }) => {
  const classes = `rounded-[6px] inline-flex justify-center items-center gap-1.5 bg-app-50 px-6 py-3 font-medium text-app-500 transition-colors duration-300 hover:bg-app-100 ${className || ""}`;
  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      {children}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
