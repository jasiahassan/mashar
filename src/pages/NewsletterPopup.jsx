import React, { useState } from "react";
import popupImage from "../assets/popup.jpg";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(true); // popup visible by default

  if (!isOpen) return null; // hide popup if closed
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
      <div className="bg-white  shadow-lg flex relative overflow-hidden tracking-wider">
        {/* Left side - Fixed image size with overlay text */}
        <div className="relative" style={{ width: "285px" }}>
          <img
            src={popupImage}
            alt="Founder"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white">
            <h2 className="font-semibold  font-poppins text-base md:text-lg drop-shadow-lg whitespace-nowrap">
              Mrs. Raja’a Yousef Allaho
            </h2>
            <p className="text-white/70 font-thin text-xs drop-shadow font-poppins mt-3">
              Founder of Mashar
            </p>
          </div>
        </div>

        {/* Right side - Form takes remaining space */}
        <div className="px-5  py-6 relative flex flex-col justify-center w-[345px] font-spartan tracking-wider">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-[#E9E9E9]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 stroke-[#161660] "
              fill="none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.6}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <h2 className=" mt-2 text-2xl font-semibold font-spartan">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF7C02 0%, #0F1C80 20%, #0F1C80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get The Toolkit.
            </span>
          </h2>
          <h2 className="text-2xl font-spartan font-semibold">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF7C02 0%, #0F1C80 20%, #0F1C80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join Our Newsletter.
            </span>
          </h2>

          <p className="text-[#F97316] font-semibold text-xs pt-4">
            Lead with purpose. Grow with confidence. Enjoy the journey.
          </p>

          <p className=" mt-3 mb-2 text-xs text-black/80 leading-relaxed tracking-widest font-extralight">
            Download your Future-Ready Leadership Toolkit — packed with
            practical insights to help you lead with clarity and impact.{" "}
            <br></br>Plus, get leadership insights and updates from Mashar
            straight to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#0F1C80]  rounded-lg p-1.5 focus:outline-none  text-[12px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#0F1C80] rounded-lg p-1.5 focus:outline-none  text-[12px]"
            />
            <input
              type="text"
              placeholder="Company (Optional)"
              className="border border-[#0F1C80] rounded-lg p-1.5 focus:outline-none  text-[12px]"
            />
            <button
              type="submit"
              className="relative group bg-[#0F1C80] text-white py-2.5 rounded-lg shadow-md text-xs overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">SUBMIT & DOWNLOAD</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #0F1C80 0%, #0F1C80 65%, #FF7C02 100%)",
                }}
              ></span>
            </button>
          </form>

          <p className="text-[10px] text-center text-gray-500 mt-3">
            Your data is safe with us. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
