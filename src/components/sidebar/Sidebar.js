import React from "react";
import logo from "../../assets/Aventisia V1.png";
import { FaChevronLeft } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbClipboardText } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserList } from "react-icons/pi";
import { GoStack } from "react-icons/go";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 bg-white text-gray-900 ${
        isOpen ? "w-64" : "w-20"
      } border-r shadow-lg transform transition-all duration-300 ease-in-out`}
    >
      {/* Logo Section */}
      <div className="flex bg-gray-50 items-center justify-between px-4 py-5 border-b">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
        )}
        <button
          className="text-gray-600 hover:text-gray-900"
          onClick={toggleSidebar}
          aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          <FaChevronLeft
            className={`transform ${!isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        {/* Section 1 */}
        <div className="px-4 py-2 text-xs font-semibold text-gray-700">
          Model Library
        </div>
        <ul className="space-y-2">
          <li
            className={`flex items-center px-4 mx-3 py-3 rounded-lg bg-secondary text-white hover:bg-secondary-dark cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <HiOutlineSquares2X2 className="text-xl" />
            {isOpen && <span className="ml-3 text-sm">Model Library</span>}
          </li>
        </ul>

        {/* Section 2 */}
        <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-700">
          Extraction Builder
        </div>
        <ul className="space-y-2">
          <li
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <HiOutlineSquares2X2 className="text-xl" />
            {isOpen && <span className="ml-3 text-sm">Label Data</span>}
          </li>
          <li
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <GoStack className="text-xl" />
            {isOpen && <span className="ml-3 text-sm">Model</span>}
          </li>
          <li
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <TbClipboardText className="text-xl" />
            {isOpen && <span className="ml-3 text-sm">Test</span>}
          </li>
        </ul>

        {/* Section 3 */}
        <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-700">
          Help
        </div>
        <ul className="space-y-2">
          <li
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <IoSettingsOutline className="text-xl" />
            {isOpen && <span className="ml-3 text-sm">Settings</span>}
          </li>
          <li
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <PiUserList className="text-xl" />
            {isOpen && <span className="ml-3 text-sm">Support</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
