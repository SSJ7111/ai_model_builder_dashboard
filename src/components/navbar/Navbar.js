import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CiSearch, CiBellOn, CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiCommandLight } from "react-icons/pi";

const Navbar = ({ isOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div
      className={`flex items-center justify-between bg-white shadow px-4 py-3 sm:py-5 border-b transition-all duration-300`}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <h1 className="text-sm sm:text-base font-medium text-gray-800">
          AI/ML Model Builder
        </h1>
      </div>

      {/* Center Section */}
      <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 h-[40px] rounded-lg w-1/4">
        <CiSearch className="text-gray-500 text-xl sm:text-2xl" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm placeholder:text-gray-300 text-gray-600 w-full border-none outline-none focus:outline-none"
        />
        <PiCommandLight className="text-xl sm:text-2xl" />
        <span className="text-xs sm:text-sm text-gray-500 px-2 py-1">K</span>
      </div>
      <button
        className="sm:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        aria-label="Open Search"
      >
        <FaSearch className="text-gray-700" />
      </button>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <div className="relative">
          <button
            className="p-2 border border-gray-200 rounded-full hover:bg-gray-200"
            aria-label="View Notifications"
          >
            <CiBellOn className="text-gray-700 text-lg sm:text-xl" />
          </button>
          <span
            className="absolute top-0 right-0 flex items-center justify-center text-[8px] sm:text-[10px] h-3 w-3 bg-yellow-500 rounded-full text-gray-800"
            aria-hidden="true"
          >
            2
          </span>
        </div>

        {/* Favorites */}
        <button
          className="p-2 border border-gray-200 rounded-full hover:bg-gray-200"
          aria-label="View Favorites"
        >
          <CiHeart className="text-gray-700 text-lg sm:text-xl" />
        </button>

        {/* Profile */}
        <div className="relative border-l px-4 sm:px-6 flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full"></div>
          <div className="hidden sm:block">
            <p className="text-xs sm:text-sm font-medium text-gray-800">
              Neurotic Spy
            </p>
            <p className="text-xs text-gray-500">neurotic@taildo.com</p>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleProfileMenu}
            aria-label="Toggle Profile Menu"
          >
            <IoIosArrowDown className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
