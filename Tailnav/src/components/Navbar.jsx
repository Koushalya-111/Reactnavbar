import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { IoToggle } from "react-icons/io5";
import { ThemeContext } from "../ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="bg-blue-600 shadow-lg px-3 py-3 ">
        <div className="max-w-6xl  mx-auto w-full flex justify-evenly items-center flex-row ">
          <div className="flex justify-center items-center ">
            <LuChefHat className="text-white lg:text-6xl text-xl font-bold" />
            <h1 className="text-white lg:text-2xl text-lg font-bold">
              Chef'sKitchen
            </h1>
          </div>

          <div className="space-x- w-full flex items-center justify-end space-x-2.5">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 font-medium  hidden lg:block"
            >
              Home
            </Link>

            <Link
              to="/About"
              className="text-white hover:text-yellow-300 font-medium  hidden lg:block"
            >
              About Us
            </Link>

            <Link
              to="/Services"
              className="text-white hover:text-yellow-300 font-medium  hidden lg:block"
            >
              Recipe
            </Link>

            <Link
              to="/Gallery"
              className="text-white hover:text-yellow-300 font-medium  hidden lg:block"
            >
              Gallery
            </Link>

            <Link
              to="/Contact"
              className="text-white hover:text-yellow-300 font-medium hidden lg:block"
            >
              Contact
            </Link>
          </div>
          <IoMenu
            className="text-7xl lg:hidden text-white"
            onClick={handleHidden}
          />
          <MdDarkMode
            className={`lg:text-5xl text-7xl mx-3 cursor-pointer ${theme === "dark" ? "bg-black text-white hidden" : "show"}`}
            onClick={handleTheme}
          />
          <CiBrightnessUp
            className={`lg:text-5xl text-7xl
                         mx-3 cursor-pointer${theme === "dark" ? " show text-white font-bold" : "bg-white text-black hidden"}`}
            onClick={handleTheme}
          />
        </div>

        {/* for mibile menu */}

        <div
          className={`space-x- w-full flex flex-col items-center justify-center space-y-2.5 px-5   lg:hidden ${hidden ? "hidden" : "block"}`}
        >
          <Link
            to="/"
            className="text-white hover:text-yellow-300 font-medium  lg:block"
          >
            Home
          </Link>

          <Link
            to="/About"
            className="text-white hover:text-yellow-300 font-medium  lg:block"
          >
            About
          </Link>

          <Link
            to="/Services"
            className="text-white hover:text-yellow-300 font-medium lg:block"
          >
            Recipe
          </Link>

          <Link
            to="/Gallery"
            className="text-white hover:text-yellow-300 font-medium lg:block"
          >
            Gallery
          </Link>

          <Link
            to="/Contact"
            className="text-white hover:text-yellow-300 font-medium lg:block"
          >
            Contact
          </Link>

          <button className="border border-white bg-white rounded-lg font-semibold hidden  lg:block">
            Click
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
