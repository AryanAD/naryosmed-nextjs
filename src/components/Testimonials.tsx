import React from "react";

const Testimonials = () => {
  return (
    <div className="pt-20 pb-20 bg-gradient-to-br from-blue-100 to to-blue-50 via-blue-50 w-screen flex items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center">
        <h1 className="font-ibrand text-green-500 text-4xl ">
          Patient Testimonials: <br />
        </h1>
        <h1 className="font-ibrand text-gray-400 text-4xl pt-1">
          Hear from Those We’ve Cared For
        </h1>

        <p className="text-lg text-gray-400 pt-5 pb-5">
          Discover the difference we make through the voices of those we've
          served:
        </p>

        <div className="flex justify-around items-center flex-wrap">
          <div className="flex flex-row items-center justify-around p-6 w-40/100 border-blue-300 border-3 bg-white rounded-2xl">
            <img
              src="/images/profile/boy1.webp"
              alt="Profile Picture"
              className="blob-profile"
            />
            <div className="flex flex-col items-start justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
