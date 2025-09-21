import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logoFooter from "../assets/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10 pb-5 px-36">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="mr-10">
          <div className="mb-5">
            <img
              src={logoFooter}
              alt="Mashar Logo"
              className="h-[57px] w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed w-60">
            Our partner in purposeful leadership and sustainable growth.
            Accredited coaching, training, and mentoring tailored to your people
            and goals.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <div className="p-2 rounded-full hover:bg-secondary transition-colors">
              <FaInstagram className="cursor-pointer " />
            </div>
            <div className="p-2 rounded-full hover:bg-secondary transition-colors">
              <FaTwitter className="cursor-pointer " />
            </div>
            <div className="p-2 rounded-full hover:bg-secondary transition-colors">
              <FaYoutube className="cursor-pointer " />
            </div>
            <div className="p-2 rounded-full hover:bg-secondary transition-colors">
              <FaPinterest className="cursor-pointer " />
            </div>
          </div>
        </div>

        {/* Empty Column for Space */}
        <div></div>

        {/* Quick Links */}
        <div className="mt-5">
          <h3 className="text-sm  mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xs">
            <li className="hover:underline cursor-pointer">Training</li>
            <li className="hover:underline cursor-pointer">Coaching</li>
            <li className="hover:underline cursor-pointer">Our Signature</li>
            <li className="hover:underline cursor-pointer">Assessments</li>
            <li className="hover:underline cursor-pointer">Knowledge Hub</li>
            <li className="hover:underline cursor-pointer">
              Mentor & Supervision
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mt-5">
          <h3 className="text-sm mb-4">Newsletter</h3>
          <ul className="space-y-2 text-xs">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">FAQ’s</li>
          </ul>
          {/* Subscribe */}
          <div className="mt-4 xl:w-[270px]">
            <label className="block mb-2 text-sm font-medium">Subscribe</label>
            <div className="flex bg-white rounded-[12px] overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 text-black focus:outline-none"
              />
              <button className="bg-primary border text-xs border-white px-4 rounded-[12px] py-2 text-white">
                Subscribe
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="mt-5">
          <h3 className="text-sm mb-4">Company Details</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +965 - 123-765-09
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> info@mashar.org
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn /> Kuwait City, Kuwait
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-[3px] border-[#313d9a] mt-16 pt-4 text-center text-sm ">
        © 2025 Mashar All Rights Reserved.{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
