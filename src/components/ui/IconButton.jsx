import { mergeClasses } from "../../lib/utils";

const IconButton = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={mergeClasses(
        "inline-flex items-center justify-center rounded-lg p-1.5 transition-colors duration-300 hover:bg-app-200 [&_svg]:stroke-app-100",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
