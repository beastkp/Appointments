import React from "react";
import { Link } from "react-router-dom";
const logo =
  "https://clarkebenefits.com/wp-content/uploads/2018/07/hospital-icon.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="text-xl text-white hover:text-gray-300">
            <img src={logo} alt="Hospital Logo" className="h-8 w-8 mr-2" />
          </Link>
        </div>
        <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link to="/appointment">Get in Touch</Link>
            </button>
            <Link to="/profile" className="ml-4">
              <img
                src="https://th.bing.com/th/id/OIP.1yoSL-WO0YU5mQKROudvswHaHa?pid=ImgDet&rs=1" // Replace with the URL of the profile icon
                alt="Profile"
                className="h-8 w-8 rounded-3xl mx-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
