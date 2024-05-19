import { useState } from "react";
import { motion } from "framer-motion";
import { mergeClasses } from "../../lib/utils";
import { X } from "lucide-react";
import IconButton from "../ui/IconButton";

const AuthenticationForm = ({ handleClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState({
    msg: "",
    isVisible: false,
  });
  const [passwordErrorMsg, setPasswordErrorMsg] = useState({
    msg: "",
    isVisible: false,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearInput = () => {
    // Clear input fields
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Reset error messages
    setEmailErrorMsg({
      msg: email === "" ? "Email is required" : "",
      isVisible: email === "",
    });

    let passwordErrorMsg = "";
    let confirmPasswordErrorMsg = "";
    let isFormValid = true;

    // Common password validation for both sign-in and sign-up
    if (password === "") {
      passwordErrorMsg = "Password is required";
      isFormValid = false;
    }

    setPasswordErrorMsg({
      msg: passwordErrorMsg,
      isVisible: passwordErrorMsg !== "",
    });

    if (!isSignIn) {
      // Additional password validation for sign-up
      if (password === "") {
        confirmPasswordErrorMsg = "Please enter a password";
        isFormValid = false;
      } else if (password.length < 6) {
        confirmPasswordErrorMsg = "Password must be 6 characters long";
        isFormValid = false;
      } else if (password !== confirmPassword) {
        confirmPasswordErrorMsg = "Passwords do not match";
        isFormValid = false;
      }

      setPasswordErrorMsg({
        msg: confirmPasswordErrorMsg,
        isVisible: confirmPasswordErrorMsg !== "",
      });
    }

    // Additional condition to make form invalid
    if (password !== "" && email === "") {
      isFormValid = false;
    }

    if (isFormValid) {
      clearInput(); // If form is valid, clear input fields
    }
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 30,
        stiffness: 400,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col gap-5 rounded-md bg-app-300 p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <IconButton className="absolute right-1 top-1" onClick={handleClose}>
          <X className="" />
        </IconButton>
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-2xl font-semibold text-app-50">
            {isSignIn ? "Welcome Back" : "Create an Account"}
          </h2>
        </div>
        <form
          className="flex max-w-xl flex-col gap-2.5 rounded-md"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2">
              <label htmlFor="authEmail" className="font-medium text-app-100">
                Email
              </label>
              <input
                onChange={handleDataChange}
                className="min-w-72 appearance-none rounded-[6px] border border-app-50/40 bg-transparent px-2 py-2.5 outline-none transition-colors duration-200 focus:border-app-50/70 md:min-w-80"
                type="email"
                value={formData.email}
                inputMode="email"
                name="email"
                id="authEmail"
                autoComplete="username"
                autoCapitalize="none"
                required
                spellCheck="false"
              />
            </div>
            <p
              className={mergeClasses(
                "h-5 text-sm",
                emailErrorMsg.isVisible ? "opacity-100" : "opacity-0",
              )}
            >
              {emailErrorMsg.msg}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="authPassword"
                className="font-medium text-app-100"
              >
                Password
              </label>
              <input
                onChange={handleDataChange}
                className="min-w-72 rounded-[6px] border border-app-50/40 bg-transparent px-2 py-2.5 outline-none transition-colors duration-200 focus:border-app-50/70 md:min-w-80"
                type="password"
                value={formData.password}
                name="password"
                id="authPassword"
                autoComplete={isSignIn ? "current-password" : "new-password"}
                autoCapitalize="none"
                spellCheck="false"
              />
            </div>
            <p
              className={mergeClasses(
                "min-h-5 text-sm",
                passwordErrorMsg.isVisible ? "opacity-100" : "opacity-0",
              )}
            >
              {passwordErrorMsg.msg}
            </p>
          </div>
          {!isSignIn && (
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="authConfirmPassword"
                  className="font-medium text-app-100"
                >
                  Confirm Password
                </label>
                <input
                  onChange={handleDataChange}
                  className="min-w-72 rounded-[6px] border border-app-50/40 bg-transparent px-2 py-2.5 outline-none transition-colors duration-200 focus:border-app-50/70 md:min-w-80"
                  type="password"
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  id="authConfirmPassword"
                  autoComplete="new-password"
                  autoCapitalize="none"
                  required
                  spellCheck="false"
                />
              </div>
              <p
                className={mergeClasses(
                  "min-h-5 text-sm",
                  passwordErrorMsg.isVisible ? "opacity-100" : "opacity-0",
                )}
              >
                {passwordErrorMsg.msg}
              </p>
            </div>
          )}
          <button
            type="submit"
            className="mt-0.5 rounded-[6px] bg-app-50 px-4 py-2.5 font-medium text-app-200 transition-colors duration-200 hover:bg-app-100"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center justify-center gap-3">
            <p className="text-base">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              className="font-medium text-app-100"
              onClick={(e) => {
                e.preventDefault();
                setIsSignIn((prev) => !prev);
                clearInput();
              }}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default AuthenticationForm;
