import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">R1CZ</h3>
            <p className="text-gray-400">
              UX/UI Designer based in the PHILIPPINES,
            </p>
          </div>
        </div>

        {/* Form with a Submit button */}
        <form className="mb-4">
          <input
            type="text"
            placeholder="Your email"
            className="p-2 mb-2 w-full md:w-auto text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} R1CZ. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/riczy.08" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/riiicz_m/"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/jonric-manisan-33905a28a?fbclid=IwY2xjawGBid9leHRuA2FlbQIxMAABHbxu13WguWdtrWbAGEZzvuRc5guVPqhd5aTbnYjQ7h0b01VPkxmX7jzhYQ_aem_zI8ZMdqmC2a9NKQSp7Y6ag"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
