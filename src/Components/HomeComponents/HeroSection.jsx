import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '../../assets/banner-img.png'

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Effortless Event Planning <br />
            <span className="text-teal-500">All in One Place</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Planzone helps you create, manage, and share events easily. From private gatherings to large conferences — plan like a pro.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 cursor-pointer">
              Get Started
            </button>
            <button className="flex items-center gap-2 border border-teal-500 text-teal-500 hover:bg-teal-100 px-6 py-3 rounded-xl transition duration-300 cursor-pointer">
              Learn More <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Image or Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Event planning illustration"
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
