import React from 'react';
import { FaPinterestP, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaLocationArrow } from 'react-icons/fa';
import { MdEmail, MdAccessTime, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-teal-50 text-gray-800 pt-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-teal-600">Planzone</h2>
          <p className="mb-4 text-sm">
            Stay updated with the latest features and event planning tips. Join our newsletter.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md text-black w-full bg-white border border-teal-200 focus:outline-none"
            />
            <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-md text-white">
              <FaLocationArrow />
            </button>
          </div>
          <div className="flex space-x-4 mt-4 text-xl text-teal-600">
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
            <FaPinterestP/>
            <FaYoutube/>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              House 22, Road 8, Dhanmondi, Dhaka 1205, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <MdPhone /> +880 1234-567890
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> support@planzone.app
            </p>
            <p className="flex items-center gap-2">
              <MdAccessTime /> Everyday / 9:00 AM – 10:00 PM
            </p>
          </div>
        </div>

        {/*  Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-600 cursor-pointer">About Us</li>
            <li className="hover:text-teal-600 cursor-pointer">Features</li>
            <li className="hover:text-teal-600 cursor-pointer">Pricing</li>
            <li className="hover:text-teal-600 cursor-pointer">FAQs</li>
            <li className="hover:text-teal-600 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-600 cursor-pointer">Blog</li>
            <li className="hover:text-teal-600 cursor-pointer">Community</li>
            <li className="hover:text-teal-600 cursor-pointer">Developers</li>
            <li className="hover:text-teal-600 cursor-pointer">Partners</li>
            <li className="hover:text-teal-600 cursor-pointer">Sponsorship</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>© 2025 Planzone. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <p className="hover:text-teal-600 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-teal-600 cursor-pointer">Terms of Use</p>
          <p className="hover:text-teal-600 cursor-pointer">Status</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
