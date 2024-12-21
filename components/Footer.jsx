import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#EEEFFB] text-black pt-12 px-6 w-full">
      <div className="max-w-screen-xl mx-28 flex flex-col lg:flex-row justify-between items-start gap-12">
        
        {/* Left side: Logo and Email */}
        <div className="flex flex-col items-start gap-4 w-full lg:w-1/4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className='text-[40px] font-bold'>Hekto</h1>
          </div>

          {/* Email Sign Up */}
          <div className="flex gap-4 w-80">
            <textarea
              className="border-2 border-gray-300 p-1 h-10 rounded-lg w-52"
              placeholder="Enter your email here"
              rows="1"
            ></textarea>
            <button
              className="bg-pink-600 text-white px-3 py-2 rounded-lg hover:bg-pink-700"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Center: Categories, Customer Care, and Pages */}
        <div className="flex w-full lg:w-2/3 justify-between">
          {/* Category Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Categories</h4>
            <ul className='text-[#8A8FB9]'>
              <li><a href="#" className="text-sm hover:underline">Electronics</a></li>
              <li><a href="#" className="text-sm hover:underline">Clothing</a></li>
              <li><a href="#" className="text-sm hover:underline">Home & Furniture</a></li>
              <li><a href="#" className="text-sm hover:underline">Books</a></li>
              <li><a href="#" className="text-sm hover:underline">Toys & Games</a></li>
              <li><a href="#" className="text-sm hover:underline">Beauty & Health</a></li>
            </ul>
          </div>

          {/* Pages Section */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Pages</h4>
            <ul className='text-[#8A8FB9]'>
              <li><a href="#" className="text-sm hover:underline">Home</a></li>
              <li><a href="#" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact</a></li>
              <li><a href="#" className="text-sm hover:underline">Blog</a></li>
              <li><a href="#" className="text-sm hover:underline">Careers</a></li>
              <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer care Section */}
          <div>
            <h4 className="ml-9 font-semibold mb-4 text-lg">Customer Care</h4>
            <ul className='text-[#8A8FB9]'>
              <li><a href="#" className="ml-9 text-sm hover:underline">Contact Us</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline">FAQ</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline">Support</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline">Return Policy</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline">Shipping Information</a></li>
              <li><a href="#" className="ml-9 text-sm hover:underline">Track Order</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright Section */}
      <div className="bg-[#E7E4F8] py-3 text-center flex flex-row justify-around">
        <p className="text-sm text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
        <div className='flex flex-row gap-2 '>
          <div className='w-6 h-6 bg-blue-950 text-white rounded-full flex justify-center pt-1'><FaFacebookF /></div>
          <div className='w-6 h-6 bg-blue-950 text-white rounded-full flex justify-center pt-1'><FaInstagram /></div>
          <div className='w-6 h-6 bg-blue-950 text-white rounded-full flex justify-center pt-1'><FaTwitter /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;