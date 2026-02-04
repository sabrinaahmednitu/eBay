import React from 'react';

const HeroSections = () => {
    return (
      <div>
        <div className="hero-section  bg-gray-500 overflow-hidden">
          {/* Background Image */}
          <div className="" />

          {/* Content */}
          <div className=" container mx-auto px-6 lg:px-8 flex items-center justify-between py-20 lg:py-32">
            <div className="max-w-lg lg:max-w-xl text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8">
                Welcome to eBay
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8">
                All your desired products are here.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-white hover:bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div className="lg:block lg:w-1/2 md:w-1/2">
              {/* <img
                src={heroSection} // Replace with your actual image path
                alt="Fitness Factory"
                className="rounded-lg shadow-xl"
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSections;