import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import DataGridComponent from "./components/datagrid/DataGridComponent";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div
          className={`transition-all duration-300 ${
            isOpen ? "ml-64" : "ml-16"
          } lg:ml-64 sm:ml-16`}
        >
          <Navbar isOpen={isOpen} />
        </div>

        {/* Page Content */}
        <div
          className={`transition-all duration-300 p-6 ${
            isOpen ? "ml-64" : "ml-16"
          } lg:ml-64 sm:ml-16`}
        >
          <DataGridComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
