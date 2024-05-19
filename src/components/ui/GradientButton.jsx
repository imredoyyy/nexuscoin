// import { Link } from "react-router-dom";

const GradientButton = ({ onClick, className, children, href }) => {
  const classes = `rounded-[6px] inline-flex justify-center items-center gap-1.5 py-3.5 px-6 font-medium text-neutral-800 bg-gradient-three bg-cover bg-no-repeat pointer-events-auto md:text-lg ${className || ""}`;
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

export default GradientButton;
