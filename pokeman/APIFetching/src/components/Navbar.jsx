import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdGridView } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full lg:px-10 px-7 py-7 bg-gray-400 transition-all duration-300 ${isSticky ? "bg-gray-700  py-2 shadow-xl border-gray-200" : " py-6"}`}
    >
      <div className="w-full flex justify-between items-center lg:px-25">
        <h1 className="flex items-center text-white lg:text-2xl text-lg font-bold">
          <MdGridView className="text-blue-500" />
          GridUsers
        </h1>

        <div
          className={`flex items-center justify-center space-x-2.5  ${isSticky ? 'text-white':'text-gray-700'}`}
        >
          <Link
            to="/"
            className="hover:text-yellow-300 font-bold text-xl hidden lg:block"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="hover:text-yellow-300 font-bold text-xl hidden lg:block"
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="hover:text-yellow-300 font-bold text-xl hidden lg:block"
          >
            Contact
          </Link>

          <MdOutlineMenu
            className="lg:hidden text-2xl font-bold"
            onClick={handleHidden}
          />
        </div>
      </div>

      <div
        className={`space-x-2 mt-5 w-full flex flex-col items-center justify-center space-y-2.5 px-5  lg:hidden ${hidden ? "hidden" : "block"}`}
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
          to="/Contact"
          className="text-white hover:text-yellow-300 font-medium lg:block"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
