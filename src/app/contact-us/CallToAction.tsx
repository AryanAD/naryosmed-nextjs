import React from "react";

const CallToAction = () => {
  return (
    <div className="py-[120px] bg-gradient-to-br from-blue-50 to to-blue-100 via-blue-50 w-screen flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center">
        <h1 className="font-ibrand text-4xl text-gray-400">
          Reach Our <span className="text-green-500">Help Desk</span> For
          Support
        </h1>
        <h2 className="font-lato text-md text-gray-300 w-[40%] text-center py-3">
          Questions? Need assistance? Our dedicated support team is here to help
          you every step of the way:
        </h2>

        <div className="bg-white flex flex-row justify-between items-center px-12 border-3 border-blue-200 w-[80%] py-8 rounded-2xl drop-shadow-xl drop-shadow-gray-[#ffffff90">
          <h3 className="text-green-500 text-2xl font-ibrand tracking-wide">
            Easily book an appointment by simply filling up a form
          </h3>
          <button className="gradient-button px-6 py-3 font-ibrand text-white rounded-xl shadow-md hover:shadow-lg hover:translate-x-1 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
