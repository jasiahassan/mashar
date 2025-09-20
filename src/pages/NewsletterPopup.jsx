import React from "react";
import popupImage from "../assets/popup.jpg"; // replace with your image path

const NewsletterPopup = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white  shadow-lg flex relative overflow-hidden">
        {/* Left side - Fixed image size with overlay text */}
        <div className="relative" style={{ width: "285px", height: "480px" }}>
          <img
            src={popupImage}
            alt="Founder"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white">
            <h2 className="font-semibold text-base md:text-lg drop-shadow-lg whitespace-nowrap">
              Mrs. Raja’a Yousef Allaho
            </h2>
            <p className="text-gray-200 text-sm drop-shadow">
              Founder of Mashar
            </p>
          </div>
        </div>

        {/* Right side - Form takes remaining space */}
        <div className="p-6 relative flex flex-col justify-center w-[340px]">
          {/* Close Button */}
          <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
            ✕
          </button>

          <h2 className="text-xl font-bold text-[#5C3A99]">Get The Toolkit.</h2>
          <h3 className="text-lg font-bold text-[#1C1E53] mb-3">
            Join Our Newsletter.
          </h3>

          <p className="text-[#F97316] font-semibold text-sm">
            Lead with purpose. Grow with confidence. Enjoy the journey.
          </p>

          <p className="text-gray-600 mt-3 mb-4 text-xs leading-relaxed">
            Download your Future-Ready Leadership Toolkit — packed with insights
            to help you lead with clarity and impact. Plus, get leadership tips
            and updates from Mashar straight to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="text"
              placeholder="Company (Optional)"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              type="submit"
              className="bg-[#1C1E53] text-white py-2 rounded-md shadow-md hover:bg-[#131540] transition text-sm"
            >
              SUBMIT & DOWNLOAD
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            Your data is safe with us. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
