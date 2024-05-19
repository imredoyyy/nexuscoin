import AuthenticationForm from "./AuthenticationForm";
import { motion } from "framer-motion";

const Modal = ({ onClick, handleClose }) => {
  return (
    <motion.div
      className="pointer-events-auto fixed inset-0 z-30 flex min-h-screen w-full items-center justify-center bg-app-300/60 opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      <AuthenticationForm handleClose={handleClose} />
    </motion.div>
  );
};

export default Modal;
