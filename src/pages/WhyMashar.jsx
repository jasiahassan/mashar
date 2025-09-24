// App.js

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

// For local image, place image_622ebd.jpg in the src folder
import teamMashar from "../assets/teamMashar.png";
import whyMashar from "../assets/whyMashar.png";
import whyMasharCircle from "../assets/whyMasharCircle.svg";
import squareAnimation from "../assets/squareAnimation.gif";
import globe from "../assets/globe.svg";
import founder from "../assets/founder.png";
import skull1 from "../assets/skull1.svg";
import skull2 from "../assets/skull2.svg";
import eqa from "../assets/eqa.svg";
import one from "../assets/one.svg";
import persona from "../assets/persona.svg";
import team from "../assets/team.png";

function WhyMashar() {
  const createCard = (
    frontContent,
    backContent,
    frontBg,
    backBg,
    height = "400px"
  ) => {
    const controls = useAnimation();
    const [isFront, setIsFront] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleHover = async (hoverState) => {
      if (isAnimating || hovered === hoverState) return;
      setHovered(hoverState);
      setIsAnimating(true);

      // collapse
      await controls.start({
        scaleX: 0.01,
        transition: { duration: 0.25, ease: "easeInOut" },
      });

      // swap content/background
      setIsFront(!hoverState);

      // expand
      await controls.start({
        scaleX: 1,
        transition: { duration: 0.25, ease: "easeInOut" },
      });

      setIsAnimating(false);
    };

    return (
      <motion.div
        className="w-96 h-[400px] flex flex-col items-center justify-center rounded-xl shadow-lg cursor-pointer relative overflow-hidden"
        animate={controls}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        style={{
          background: isFront ? frontBg : backBg,
          boxShadow: "4px 4px 4px 0px #00000040, -4px -4px 4px 0px #00000040",
          height: height,
        }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-8"
          // style={{ pointerEvents: "none" }}
        >
          {isFront ? frontContent : backContent}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="font-spartan">
      {/* Header Section */}
      <header className="relative h-[400px] flex flex-col justify-center items-center text-white text-center p-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whyMashar})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-10 tracking-wider">
          <h1 className=" md:text-5xl  mb-4 ">
            Rooted in Values. Built for <br></br>Transformation.
          </h1>
          <div className="flex justify-center items-center space-x-2 text-lg mt-10">
            <span>Home</span>
            <span className="mx-4 text-2xl ">&gt;</span>
            <span>Why Mashar</span>
          </div>
        </div>
      </header>

      {/* Roots Run Deep Section */}
      <section className="bg-white pt-24 pb-20 font-spartan px-4 md:px-20 lg:px-36 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-[400px] text-left tracking-wide">
          <h2 className="text-[45px] font-medium ">
            Our <span className="text-[#0F1C80]">Roots</span>{" "}
            <span className="text-[#FF7C02]">Run</span>{" "}
            <span className="text-[#0F1C80]">Deep</span>
          </h2>
          <div className="mb-6 w-80 mt-[-14px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="16"
              viewBox="0 0 236 20"
              fill="none"
            >
              <path
                d="M3.5 16C81.3819 -0.647022 154.619 0.66037 232.5 16"
                stroke="url(#paint0_linear_1951_6236)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1951_6236"
                  x1="115.809"
                  y1="4"
                  x2="115.809"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.547977" stopColor="#2B3476" />
                  <stop offset="0.548077" stopColor="#FF7C02" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className=" text-[15px] leading-snug mb-4 ">
            Our story is grounded in a legacy of authentic, impact-driven
            leadership and transformation.<br></br> Founded in 2014, Mashar
            began with a simple, powerful belief:
          </p>
          <blockquote className=" mb-3 mt-6 text-[15px] font-semibold leading-snug">
            "Great leadership starts with self-awareness and cultural alignment"
          </blockquote>
          <p className="text-[15px] mb-4 leading-snug">
            We were the first firm in the GCC to launch a bilingual Certified
            Professional Coaching & Mentoring Program — pioneering a unique
            blend of global standards and regional values.<br></br> Over the
            years, we’ve partnered with thousands of leaders and organizations
            across the Middle East, helping them grow with clarity, purpose, and
            lasting impact.<br></br> Since 2017, Mashar continues to deliver
            programs that are interactive, culturally relevant, and
            transformative.
          </p>
        </div>
        <div className="flex justify-center relative">
          {/* Container matching image size */}
          <div className="relative rounded-[32px] ">
            {/* Radial Gradient Background */}
            <div
              className="absolute z-0"
              style={{
                borderRadius: "32px",
                border: "1px solid #000",
                background:
                  "radial-gradient(609.29% 60.63% at 50% 50%, #0F1C80 44.56%, #FF7C02 100%)",
                width: "410px", // slightly larger for translate
                height: "460px",
                top: "-50px",
                left: "50px",
                transform: " rotate(90deg) ",
              }}
            ></div>

            {/* Image on top */}
            <div className="relative z-10 w-full h-full">
              <img
                src={teamMashar}
                alt="A team of diverse people giving a high five"
                className="w-[460px] h-[410px] object-cover rounded-[32px] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="font-spartan pb-9 md:px-20 lg:px-24 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4">
        {/* Vision Card */}
        <div className="relative group w-full md:w-1/2 h-[400px] rounded-l-[40px] border-l border-[#FF7C02] shadow-[0_4px_4px_2px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-200 hover:border-l-4 hover:border-[#FF7C02] hover:rounded-[20px]">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-[linear-gradient(57deg,rgba(235,143,3,0.20)_53.77%,rgba(43,52,118,0.16)_89.92%)] group-hover:opacity-0 transition-opacity duration-200 rounded-l-[40px]"></div>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-[40px]"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-16 transition-all duration-200">
            <h2 className="text-5xl font-semibold mb-6 transition-all duration-200 group-hover:mb-0 group-hover:text-[#FF7C02]">
              Our{" "}
              <span className="text-[#FF7C02] group-hover:text-black px-2 rounded transition-all duration-200">
                Vision
              </span>
            </h2>

            <div className="my-8 w-80">
              {/* SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="16"
                viewBox="0 0 236 20"
                fill="none"
              >
                <path
                  d="M3.5 16C81.3819 -0.647022 154.619 0.66037 232.5 16"
                  stroke="url(#paint0_linear_1951_6236)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1951_6236"
                    x1="115.809"
                    y1="4"
                    x2="115.809"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.547977" stopColor="#2B3476" />
                    <stop offset="0.548077" stopColor="#FF7C02" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <p className="mt-6 transition-all duration-200 group-hover:mt-2">
              To shape future-ready leaders who lead with purpose, compassion,
              and cultural insight. Our vision is to be the Middle East’s
              trusted force in leadership development, known for programs that
              drive deep and lasting change.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="relative group w-full md:w-1/2 h-[400px] rounded-r-[40px] border-l border-[#FF7C02] shadow-[0_4px_4px_2px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-200 hover:border-l-4 hover:border-[#FF7C02] hover:rounded-[20px]">
          <div className="absolute inset-0 bg-[linear-gradient(57deg,rgba(235,143,3,0.20)_53.77%,rgba(43,52,118,0.16)_89.92%)] group-hover:opacity-0 transition-opacity duration-200 rounded-r-[40px]"></div>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-r-[40px]"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-16 transition-all duration-200">
            <h2 className="text-5xl font-semibold mb-6 transition-all duration-200 group-hover:mb-0 group-hover:text-[#FF7C02]">
              Our{" "}
              <span className="text-[#FF7C02] group-hover:text-black px-2 rounded transition-all duration-200">
                Mission
              </span>
            </h2>

            <div className="my-8 w-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="16"
                viewBox="0 0 236 20"
                fill="none"
              >
                <path
                  d="M3.5 16C81.3819 -0.647022 154.619 0.66037 232.5 16"
                  stroke="url(#paint0_linear_1951_6236)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1951_6236"
                    x1="115.809"
                    y1="4"
                    x2="115.809"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.547977" stopColor="#2B3476" />
                    <stop offset="0.548077" stopColor="#FF7C02" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <p className=" mt-6 transition-all duration-200 group-hover:mt-2">
              We co-create learning experiences that strengthen the human side
              of leadership — empowering individuals, teams, and organizations
              to grow with clarity, trust, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* our values Section */}
      <div
        className="font-spartan relative p-20 flex justify-center items-center text-center text-white overflow-hidden"
        style={{
          background:
            "radial-gradient(60.63% 609.29% at 50% 50%, #0F1C80 44.56%, #FF7C02 100%)",
        }}
      >
        <div className="absolute top-[-25px] left-1 ">
          <img
            src={whyMasharCircle}
            alt="Background Decorative"
            className="w-[100px] "
          ></img>
        </div>
        <div className="relative z-10 p-6 max-w-4xl ">
          <h1 className="text-[43px] font-medium mb-2  tracking-wider">
            Our Values
          </h1>
          <div className="my-3 w-80 flex justify-center items-center mx-auto">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="237"
              height="15"
              viewBox="0 0 237 20"
              fill="none"
            >
              <path
                d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                stroke="url(#paint0_linear_1951_6273)"
                stroke-width="7"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1951_6273"
                  x1="4"
                  y1="10"
                  x2="233"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.7" stop-color="#EB8F03" />
                  <stop offset="0.71" stop-color="#D9D9D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-[22px] font-medium mb-4 tracking-wider">
            Rooted in Values. Built for Transformation.
          </h2>
          <p className="text-[22px]  tracking-wider">
            Just like a tree thrives with strong roots, Mashar empowers
            individuals and organizations to grow with clarity, connection, and
            resilience.
          </p>
        </div>
      </div>

      {/* Goals Section */}
      <div className=" py-24 ">
        <div className="container mx-auto max-w-6xl">
          {/* Heading + Animation */}
          <div className="relative flex justify-center items-center mb-12">
            {/* Centered: "Our Goals" */}
            <div className="text-center z-10">
              <h2 className="text-[40px] font-semibold flex justify-center items-center">
                Our <span className="text-[#FF7C02] ml-2">Goals</span>
              </h2>

              {/* SVG underline */}
              <div className="my-3 w-80 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="16"
                  viewBox="0 0 236 20"
                  fill="none"
                >
                  <path
                    d="M3.5 16C81.3819 -0.647022 154.619 0.66037 232.5 16"
                    stroke="url(#paint0_linear_1951_6236)"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1951_6236"
                      x1="115.809"
                      y1="4"
                      x2="115.809"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.547977" stopColor="#2B3476" />
                      <stop offset="0.548077" stopColor="#FF7C02" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right: Animation (absolutely positioned) */}
            <div className="absolute right-64 top-4 -mt-16 lg:-mt-24">
              <img
                src={squareAnimation}
                alt="Goals Animation"
                className="w-40 h-40 object-contain rotate-45"
              />
            </div>

            <div className="absolute  top-5  left-0 z-0  pointer-events-none">
              <div
                className="absolute rounded-full"
                style={{
                  position: "absolute",
                  width: "155px",
                  height: "155px",
                  top: "-50px",
                  left: "50px",
                  opacity: 0.05,
                  borderWidth: "11px",
                  borderStyle: "solid",
                  borderColor: "#EB8F03",
                  borderRadius: "100px",
                  boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
                }}
              ></div>

              <div
                className="absolute rounded-full"
                style={{
                  position: "absolute",
                  width: "190px",
                  height: "145px",
                  top: "-85px",
                  left: "-25px",
                  transform: "rotate(-233.73deg)",
                  opacity: 0.05,
                  borderWidth: "11px",
                  borderStyle: "solid",
                  borderColor: "#EB8F03",
                  borderRadius: "100px",
                  boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
                }}
              ></div>
            </div>
          </div>
          <div className="mx-11 px-6 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-7">
            {/* Goal Card 1 */}
            <div
              className="group bg-[#F4F5F8] px-2 py-5 rounded-lg shadow-[0px_4px_20.2px_0px_#0000001A] border-t border-l border-b border-[#2B347626] max-w-lg flex-1 text-center
              hover:bg-[linear-gradient(269.6deg,#FFFFFF_0.35%,rgba(70,86,206,0.3)_99.65%)] 
              hover:border-l-4 hover:border-l-[#0F1C80] transform hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-[#A6A7A73D] group-hover:bg-white rounded-full group-hover:opacity-80  flex items-center justify-center  transition-colors ">
                <img src={globe} alt="Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-medium font-spartan mb-3 p-2 tracking-wide">
                Culturally Aligned Coaching
              </h3>
              <p className="tracking-wide mb-4">
                Expand the reach of executive coaching by aligning practices
                with local culture.
              </p>
            </div>

            {/* Goal Card 2 */}
            <div
              className="group bg-[#F4F5F8] px-2 py-5 rounded-lg shadow-[0px_4px_20.2px_0px_#0000001A] border-t border-l border-b border-[#2B347626] max-w-lg flex-1 text-center
              hover:bg-[linear-gradient(269.6deg,#FFFFFF_0.35%,rgba(70,86,206,0.3)_99.65%)] 
              hover:border-l-4 hover:border-l-[#0F1C80] transform hover:scale-[1.03] transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-[#A6A7A73D] group-hover:bg-white group-hover:opacity-80 rounded-full flex items-center justify-center transition-colors">
                <img src={globe} alt="Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-medium font-spartan mb-3 p-2 tracking-wide">
                A Thriving Coaching Community
              </h3>
              <p className="tracking-wide mb-4">
                Build a community of culturally attuned professional coaches and
                mentors.
              </p>
            </div>

            {/* Goal Card 3 */}
            <div
              className="group bg-[#F4F5F8] px-2 py-5 rounded-lg shadow-[0px_4px_20.2px_0px_#0000001A] border-t border-l border-b border-[#2B347626] max-w-lg flex-1 text-center
              hover:bg-[linear-gradient(269.6deg,#FFFFFF_0.35%,rgba(70,86,206,0.3)_99.65%)] 
              hover:border-l-4 hover:border-l-[#0F1C80] transform hover:scale-[1.03] transition-all  duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-[#A6A7A73D] group-hover:bg-white  group-hover:opacity-80 rounded-full flex items-center justify-center transition-colors ">
                <img src={globe} alt="Icon" className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-medium font-spartan mb-3 p-2 tracking-wide">
                Innovative, Practical Solutions
              </h3>
              <p className="tracking-wide mb-4">
                Design innovative, practical solutions that meet evolving
                organizational needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="relative  mb-16">
        <div className="absolute  top-5  left-0 z-0  pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              position: "absolute",
              width: "155px",
              height: "155px",
              top: "-60px",
              left: "120px",
              opacity: 0.05,
              borderWidth: "11px",
              borderStyle: "solid",
              borderColor: "#2B3476",
              borderRadius: "100px",
              boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
            }}
          ></div>

          <div
            className="absolute rounded-full"
            style={{
              position: "absolute",
              width: "190px",
              height: "145px",
              top: "-90px",
              left: "40px",
              transform: "rotate(-233.73deg)",
              opacity: 0.05,
              borderWidth: "11px",
              borderStyle: "solid",
              borderColor: "#2B3476",
              borderRadius: "100px",
              boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
            }}
          ></div>
        </div>
        <div className="container mx-auto max-w-5xl">
          <div className="flex mt-10 flex-col lg:flex-row items-center justify-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 relative">
            {/* Left Side - Founder Image */}
            <div className="w-full lg:w-[380px] text-center mt-8 lg:text-left flex-shrink-0 border-r-[1.4px]  border-[#181A6C] ">
              <div className="relative">
                <img
                  src={founder}
                  alt="Mrs. Raja'a Yousef Allaho"
                  className="w-72 h-72 rounded-full object-cover mx-auto mt-4 lg:mx-0 shadow-md"
                />
              </div>
              <h3 className="mt-16 text-[22px] font-medium mb-4 font-poppins tracking-wide text-[#181A6C]">
                Mrs. Raja'a Yousef Allaho
              </h3>
              <p className="font-poppins text-xl font-light tracking-wide mb-10">
                Founder of Mashar | Professional Executive & Team Coach
              </p>
            </div>

            {/* Right Side - Bio */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-5xl font-medium font-spartan mb-4 leading-snug relative inline-block">
                Meet <span className="text-[#0F1C80]">Our Founder</span> &{" "}
                <span className="text-[#FF7C02] relative ">
                  <br />
                  Lead Coach
                </span>
                {/* SVG underline */}
                <span className="absolute left-0 bottom-[-10px]  w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="180"
                    height="20"
                    viewBox="0 0 237 20"
                    fill="none"
                  >
                    <path
                      d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                      stroke="url(#paint0_linear_1951_6297)"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1951_6297"
                        x1="116.309"
                        y1="4"
                        x2="116.309"
                        y2="16"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.547977" />
                        <stop offset="0.548077" stopColor="#0038F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              <blockquote className="font-poppins text-sm mt-4 mb-3">
                “Coaching is more than my profession — it is my calling.”
              </blockquote>

              <p className="mb-4 font-poppins text-sm">
                With over 25 years in leadership development, Raja'a has:
              </p>

              {/* Achievements List */}
              <ul className="space-y-3 font-poppins text-sm">
                {[
                  "Trained and mentored 500+ certified coaches.",
                  "Founded the Middle East’s first bilingual Coaching & Mentoring Academy.",
                  "Earned accreditations from ICF, EMCC, and leading global institutes.",
                  "Served as ICF Kuwait Chapter Leader and co-faculty at Henley Business School.",
                ].map((item, idx) => (
                  <li key={idx} className="flex  items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-9 h-9 mr-3 flex-shrink-0"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <path
                        d="M8.75 25.375C8.75 25.375 11.375 25.375 14.875 31.5C14.875 31.5 24.6033 15.4577 33.25 12.25"
                        stroke="#0F1C80"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <p className="mt-6 font-poppins text-sm">
                She is also certified in GEDI, TAWDI, Psychological Safety, and
                Team Coaching — bringing global science into culturally aligned
                leadership practices.
              </p>

              {/* Logos */}
              <div className="flex  items-center justify-center lg:justify-start space-x-4 mt-4 -ml-8">
                <img src={skull1} alt="Accreditation 1" className="h-[65px]" />
                <img src={persona} alt="Accreditation 2" className="h-[65px]" />
                <img src={eqa} alt="Accreditation 3" className="h-[65px]" />
                <img src={skull2} alt="Accreditation 4" className="h-[65px]" />
                <img src={one} alt="Accreditation 5" className="h-[65px]" />
                <img src={eqa} alt="Accreditation 4" className="h-[65px]" />
                <img src={skull2} alt="Accreditation 5" className="h-[65px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team section */}
      <section className="relative pt-8  pb-10 bg-white overflow-hidden">
        <div className="container mx-auto max-w-[980px] flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Right: Animation (absolutely positioned) */}
          <div className="absolute left-10 top-24 -mt-16 lg:-mt-24">
            <img
              src={squareAnimation}
              alt="Goals Animation"
              className="w-28 h-28 object-contain rotate-12"
            />
          </div>

          {/* Left Side */}
          <div className="w-1/2 relative z-10 text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-5xl font-spartan font-medium ">
              Our <span className="text-[#FF7C02]">Team</span>
            </h2>

            {/* Underline SVG */}
            <div className="flex justify-center lg:justify-start mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="20"
                viewBox="0 0 237 20"
                fill="none"
              >
                <path
                  d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                  stroke="url(#mergedGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="mergedGradient"
                    x1="116"
                    y1="4"
                    x2="116"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.55" stopColor="#2B3476" />
                    <stop offset="0.55" stopColor="#FF7C02" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Description */}
            <p className=" text-sm  font-poppins max-w-lg mx-auto lg:mx-0">
              We are a regional network of certified coaches, facilitators, and
              mentors with international accreditation and a passion for
              leadership growth. Together, we bring proven methods and cultural
              insight to support leaders across the Middle East.
            </p>
          </div>

          {/* Right Side - Images */}
          <div className="w-full lg:w-1/2  flex gap-4 justify-center items-center lg:justify-end relative">
            <div className="w-[240px] h-[250px] rounded-br-[52px] rounded-tl-[52px] overflow-hidden shadow-[0_4px_4px_0_#2B3476]">
              <img
                src={whyMashar}
                alt="Team session"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <img
                src={team}
                alt="Team collaboration"
                className=" object-cover"
              />
            </div>
          </div>

          <div
            className="absolute top-[21rem]  left-[22rem]  pointer-events-none overflow-hidden"
            style={{
              width: "180px", // cover inner circles
              height: "120px",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "83px",
                height: "83px",
                top: "30px",
                left: "70px",
                opacity: 0.1,
                borderWidth: "11px",
                borderStyle: "solid",
                borderColor: "#FF7C02",
                borderRadius: "100px",
                boxShadow: "0px 4px 16px 1px #2B3476",
              }}
            ></div>

            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "98px",
                height: "73px",
                top: "38px",
                left: "20px",
                transform: "rotate(-233.73deg)",
                opacity: 0.1,
                borderWidth: "11px",
                borderStyle: "solid",
                borderColor: "#FF7C02",
                borderRadius: "100px",
                boxShadow: "0px 4px 16px 1px #2B3476",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <div className="min-h-screen">
        <section className="max-w-[70rem] mx-auto px-4 pt-16 ">
          <h2 className="relative text-5xl font-spartan font-medium text-center text-[#2B3476] mb-8">
            <span className="relative inline-block tracking-wide">
              We are certified, credible, and{" "}
              <span className="text-[#FF7C02]">recognised</span>
            </span>
            {/* SVG underline */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="20"
              viewBox="0 0 237 20"
              fill="none"
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2"
            >
              <path
                d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                stroke="url(#paint0_linear_1951_6389)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1951_6389"
                  x1="116.309"
                  y1="4"
                  x2="116.309"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.547977" stopColor="#0F1C80" />
                  <stop offset="0.548077" stopColor="#FF7C02" />
                </linearGradient>
              </defs>
            </svg>
          </h2>

          <p className="text-center text-sm font-poppins mt-10 mb-12">
            At Mashar, accreditation is more than a credential — it’s a
            commitment to excellence, accountability, and impact. Our
            certifications represent global best practices, regional relevance,
            and ethical responsibility. Each accreditation ensures that our
            programs are effective, culturally attuned, and rooted in science.
            Trusted by leaders across the region.
          </p>

          <div className="flex justify-center mt-16 gap-8 max-w-3xl mx-auto">
            {/* Card 1 */}
            {createCard(
              <>
                <div className="bg-white w-48 h-40 p-2 flex items-center justify-center rounded-3xl mb-4">
                  <img src={one} alt="front" className="h-36 object-contain" />
                </div>
                <p className="text-[21px] font-spartan font-medium text-center tracking-wide">
                  ICF Coaching Accreditation – Setting the Global Standard for
                  leadership coaching.
                </p>
              </>,
              <div className="leading-snug">
                <p className=" font-spartan font-medium mb-2 text-xl">
                  ICF Coaching Accreditation – Setting the Global Standard for
                  leadership coaching.
                </p>
                <p className=" font-spartan  ">
                  The world’s leading authority on professional coaching,
                  empowering internal coaches, professionals, consultants, and
                  leaders to deepen their skills and embrace coaching as a
                  leadership approach.
                </p>
                <p className=" font-spartan font-medium  mt-2 mb-4">
                  Ready to elevate your coaching career and leadership impact?
                </p>
                <div className="w-full">
                  <button
                    className="group text-[15px] font-light flex gap-2 border py-2 px-3 tracking-wide rounded-xl duration-700 transition-all bg-primary text-white
      hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] hover:pr-7"
                  >
                    Explore Our ICF-Certified Programs
                    <span className="flex items-center transition-all duration-700 group-hover:translate-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M10.9445 6.08298L6.53972 1.55897C6.35994 1.37432 6.27364 1.15889 6.28083 0.912684C6.28802 0.666479 6.38181 0.451052 6.5622 0.266397C6.74198 0.0971327 6.95173 0.00849819 7.19145 0.000496864C7.43116 -0.00750446 7.64091 0.0811291 7.8207 0.266397L13.7536 6.35996C13.8435 6.45229 13.9074 6.55231 13.9451 6.66002C13.9829 6.76774 14.0011 6.88315 13.9999 7.00625C13.9987 7.12935 13.9799 7.24476 13.9433 7.35247C13.9068 7.46019 13.8432 7.56021 13.7527 7.65254L7.8198 13.7461C7.65499 13.9154 7.44884 14 7.20133 14C6.95383 14 6.74048 13.9154 6.5613 13.7461C6.38151 13.5614 6.29162 13.342 6.29162 13.0878C6.29162 12.8336 6.38151 12.6145 6.5613 12.4304L10.9445 7.92952L0.898933 7.92952C0.644237 7.92952 0.430592 7.84088 0.257997 7.66362C0.0854025 7.48635 -0.000596046 7.26723 2.86102e-06 7.00625C0.000602722 6.74527 0.0868998 6.52584 0.258895 6.34796C0.430891 6.17008 0.644237 6.08175 0.898933 6.08298L10.9445 6.08298Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>,
              "linear-gradient(360deg, #FFFFFF 0%, #0F1C80 100%)",
              "#ffffff",
              "410px"
            )}
            {/* Card 2 */}
            {createCard(
              <>
                <div className="bg-white w-48 h-40 flex items-center justify-center rounded-3xl mb-4">
                  <img
                    src={eqa}
                    alt="Persona Global logo"
                    className="h-36 object-contain"
                  />
                </div>
                <p className="text-[21px] font-spartan font-medium text-center tracking-wide">
                  EMCC Mentoring Accreditation - European Mentoring and Coaching
                  Council{" "}
                </p>
              </>,
              <div>
                <p className=" font-spartan font-medium  text-xl">
                  ICF Coaching Accreditation – Setting the Global Standard for
                  leadership coaching.{" "}
                </p>
                <p className=" font-spartan  mt-2">
                  The world's leading authority on professional coaching,
                  empowering internal coaches, professionals, consultants, and
                  leaders to deepen their skills and embrace coaching as a
                  leadership approach.
                </p>
                <p className=" font-spartan font-medium  mt-2 mb-4">
                  Ready to elevate your coaching career and leadership impact?
                </p>
                <div>
                  <button
                    className="group flex font-light text-[15px]  items-center gap-2 border py-2 px-2 tracking-wide  rounded-xl duration-700 transition-all bg-primary text-white
                 hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] hover:pr-7 mx-auto"
                  >
                    Explore Our EMCC-Certified Programs
                    <span className="flex items-center transition-all duration-700 group-hover:translate-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M10.9445 6.08298L6.53972 1.55897C6.35994 1.37432 6.27364 1.15889 6.28083 0.912684C6.28802 0.666479 6.38181 0.451052 6.5622 0.266397C6.74198 0.0971327 6.95173 0.00849819 7.19145 0.000496864C7.43116 -0.00750446 7.64091 0.0811291 7.8207 0.266397L13.7536 6.35996C13.8435 6.45229 13.9074 6.55231 13.9451 6.66002C13.9829 6.76774 14.0011 6.88315 13.9999 7.00625C13.9987 7.12935 13.9799 7.24476 13.9433 7.35247C13.9068 7.46019 13.8432 7.56021 13.7527 7.65254L7.8198 13.7461C7.65499 13.9154 7.44884 14 7.20133 14C6.95383 14 6.74048 13.9154 6.5613 13.7461C6.38151 13.5614 6.29162 13.342 6.29162 13.0878C6.29162 12.8336 6.38151 12.6145 6.5613 12.4304L10.9445 7.92952L0.898933 7.92952C0.644237 7.92952 0.430592 7.84088 0.257997 7.66362C0.0854025 7.48635 -0.000596046 7.26723 2.86102e-06 7.00625C0.000602722 6.74527 0.0868998 6.52584 0.258895 6.34796C0.430891 6.17008 0.644237 6.08175 0.898933 6.08298L10.9445 6.08298Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>,
              "linear-gradient(360deg, #FFFFFF 0%, #0F1C80 100%)",
              "#ffffff",
              "410px"
            )}
          </div>

          <h2 className="relative text-5xl font-spartan font-medium text-center mb-8 mt-20">
            <span className="relative inline-block tracking-wide">
              Global Tools for{" "}
              <span className="text-[#2B3476]">Human-Centered</span>
              <span className="text-[#FF7C02]">Leadership</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="20"
              viewBox="0 0 237 20"
              fill="none"
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2"
            >
              <path
                d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                stroke="url(#paint0_linear_1951_6389)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1951_6389"
                  x1="116.309"
                  y1="4"
                  x2="116.309"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.547977" stopColor="#0F1C80" />
                  <stop offset="0.548077" stopColor="#FF7C02" />
                </linearGradient>
              </defs>
            </svg>
          </h2>

          <div className="flex justify-center mt-16 gap-8 mx-auto max-w-5xl">
            {/* Card 1 */}
            {createCard(
              // Front content
              <>
                <div className="bg-white w-48 h-40 flex items-center justify-center rounded-3xl mb-4">
                  <img
                    src={skull1}
                    alt="front"
                    className="h-36 object-contain"
                  />
                </div>
                <p className="text-[21px] font-spartan font-medium text-center tracking-wide">
                  Academy of Brain-Based Leadership – <br /> (Certified
                  Facilitator)
                </p>
              </>,
              // Back content
              <div>
                <p className=" font-spartan font-medium tracking-wide text-2xl">
                  Academy of Brain-Based Leadership – <br /> (Certified
                  Facilitator)
                </p>
                <p className=" font-spartan  font-medium mt-3">
                  Neuroscience-based programs on Psychological Safety, helping
                  leaders and teams build trust, reduce threat responses, and
                  thrive in high-performance environments
                </p>
              </div>,
              "linear-gradient(360deg, #FFFFFF 0%, #0F1C80 100%)",
              "#ffffff",
              "350px"
            )}

            {/* Card 2 */}
            {createCard(
              <>
                <div className="bg-white w-48 h-40 flex items-center justify-center rounded-3xl mb-4">
                  <img
                    src={persona}
                    alt="Persona Global logo"
                    className="h-36 object-contain"
                  />
                </div>
                <p className="text-[21px] font-spartan font-medium text-center tracking-wide">
                  Persona Global – <br /> Certified Partner
                </p>
              </>,
              <div className="">
                <p className=" font-spartan tracking-wide font-medium text-[26px]">
                  Persona Global –<br></br>Certified Partner
                </p>
                <p className=" font-spartan font-medium mt-3">
                  Behavioral tools used in 70+ countries, adapted for cultural
                  relevance to improve communication, leadership, and emotional
                  intelligence.
                </p>
              </div>,
              "linear-gradient(360deg, #FFFFFF 0%, #0F1C80 100%)",
              "#ffffff",
              "350px"
            )}
          </div>
        </section>
      </div>

      {/* lets grow together Section */}
      <div
        className="font-spartan relative pt-20 pb-16 mt-24 flex justify-center items-center text-center text-white overflow-hidden"
        style={{
          background:
            "radial-gradient(60.63% 609.29% at 50% 50%, #0F1C80 44.56%, #FF7C02 100%)",
        }}
      >
        <div className="absolute top-[-25px] left-1">
          <img
            src={whyMasharCircle}
            alt="Background Decorative"
            className="w-[100px]"
          />
        </div>

        <div className="relative z-10 p-6 max-w-4xl">
          <h1 className="text-5xl font-medium mb-2 tracking-wider">
            Let’s Grow, Together.
          </h1>

          <div className="my-3 w-80 flex justify-center items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="237"
              height="15"
              viewBox="0 0 237 20"
              fill="none"
            >
              <path
                d="M4 16C81.8819 -0.647022 155.119 0.66037 233 16"
                stroke="url(#paint0_linear_1951_6273)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1951_6273"
                  x1="4"
                  y1="10"
                  x2="233"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.7" stopColor="#EB8F03" />
                  <stop offset="0.71" stopColor="#D9D9D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="text-2xl font-medium mb-6 tracking-wider">
            At Mashar, we don’t just build skills—we nurture purpose,
            leadership, and well-being that last. Because true transformation
            begins with people.
          </h2>

          <p className="text-2xl font-light mb-10 tracking-wider">
            Ready to grow with purpose? <br />
            Let’s start your leadership journey together.
          </p>

          <button
            className="group flex items-center gap-2 border py-2 px-4 tracking-wide text-lg rounded-xl duration-700 transition-all
                 hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] hover:pr-7 mx-auto"
          >
            BOOK A DISCOVERY CALL
            <span className="flex items-center transition-all duration-700 group-hover:translate-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M10.9445 6.08298L6.53972 1.55897C6.35994 1.37432 6.27364 1.15889 6.28083 0.912684C6.28802 0.666479 6.38181 0.451052 6.5622 0.266397C6.74198 0.0971327 6.95173 0.00849819 7.19145 0.000496864C7.43116 -0.00750446 7.64091 0.0811291 7.8207 0.266397L13.7536 6.35996C13.8435 6.45229 13.9074 6.55231 13.9451 6.66002C13.9829 6.76774 14.0011 6.88315 13.9999 7.00625C13.9987 7.12935 13.9799 7.24476 13.9433 7.35247C13.9068 7.46019 13.8432 7.56021 13.7527 7.65254L7.8198 13.7461C7.65499 13.9154 7.44884 14 7.20133 14C6.95383 14 6.74048 13.9154 6.5613 13.7461C6.38151 13.5614 6.29162 13.342 6.29162 13.0878C6.29162 12.8336 6.38151 12.6145 6.5613 12.4304L10.9445 7.92952L0.898933 7.92952C0.644237 7.92952 0.430592 7.84088 0.257997 7.66362C0.0854025 7.48635 -0.000596046 7.26723 2.86102e-06 7.00625C0.000602722 6.74527 0.0868998 6.52584 0.258895 6.34796C0.430891 6.17008 0.644237 6.08175 0.898933 6.08298L10.9445 6.08298Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyMashar;
