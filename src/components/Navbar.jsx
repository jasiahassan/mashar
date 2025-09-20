import { FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import logoMashar from "../assets/logoMashar.svg";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-white flex justify-between items-center px-[84px]  font-poppins font-normal text-base">
        <div className="flex items-center gap-6 py-2">
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-orange-500" />
            Email: abc@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-500" />
            Call: +965 202052024
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:underline font-semibold py-2">
            Login/Register
          </button>
          <button className="bg-white   text-secondary  font-semibold flex items-center gap-2 px-[12px] border border-primary py-1 ">
            Login as Alumni →
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center pl-[10px]  pr-6  shadow">
        {/* Logo */}
        <div className="flex items-center gap-2 py-2">
          <img src={logoMashar} alt="Mashar Logo" className="h-20 w-auto" />
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-6  font-normal text-[17px] font-poppins leading-[42px] py-4">
          <li className="cursor-pointer hover:text-blue-900">Home</li>
          <li className="cursor-pointer hover:text-blue-900">Why Mashar</li>
          <li className="cursor-pointer hover:text-blue-900">Our Signature</li>
          <li className="cursor-pointer hover:text-blue-900">
            Explore Programs
          </li>
          <li className="cursor-pointer hover:text-blue-900 relative">
            Leadership Hub ▾
          </li>
          <li className="cursor-pointer hover:text-blue-900 ml-6">
            Let s Talk
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 py-4">
          <FaSearch className="text-primary" />
          <select className="border border-primary rounded-[24px] px-2 py-1 text-sm">
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
