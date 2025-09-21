// App.js

import React from "react";

// For local image, place image_622ebd.jpg in the src folder
import teamMashar from "../assets/teamMashar.png";
import whyMashar from "../assets/whyMashar.png";
import whyMasharCircle from "../assets/whyMasharCircle.svg";
import squareAnimation from "../assets/squareAnimation.gif";

function WhyMashar() {
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
      <div className=" py-24 px-4">
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
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Goal Card 1 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-sm flex-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Culturally Aligned Coaching
              </h3>
              <p className="text-gray-600 text-sm">
                Expand the reach of executive coaching by aligning practices
                with local culture.
              </p>
            </div>

            {/* Goal Card 2 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-sm flex-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                A Thriving Coaching Community
              </h3>
              <p className="text-gray-600 text-sm">
                Build a community of culturally attuned professional coaches and
                mentors.
              </p>
            </div>

            {/* Goal Card 3 */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-sm flex-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-200">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Innovative, Practical Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                Design innovative, practical solutions that meet evolving
                organizational needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-white py-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-100 rounded-lg p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 relative shadow-lg">
            {/* Diagonal line effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-white transform -skew-y-2 translate-y-2 -translate-x-2 rounded-lg opacity-50 hidden lg:block"></div>

            {/* Founder's Image and Title */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/200"
                  alt="Mrs. Raja'a Yousef Allaho"
                  className="w-48 h-48 rounded-full border-4 border-white shadow-lg mx-auto lg:mx-0"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold">
                Mrs. Raja'a Yousef Allaho
              </h3>
              <p className="text-gray-600 text-sm">
                Founder of Mashar | Professional Executive & Team Coach
              </p>
            </div>

            {/* Founder's Bio and Accolades */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">
                Meet Our Founder & <br className="hidden sm:inline" />
                <span className="text-blue-500">Lead Coach</span>
              </h2>
              <hr className="w-32 border-2 border-blue-500 mb-6 mx-auto lg:mx-0" />
              <blockquote className="text-gray-700 italic mb-6 border-l-4 border-gray-300 pl-4">
                "Coaching is more than my profession — it is my calling."
              </blockquote>
              <p className="mb-6 text-gray-600">
                With over 25 years in leadership development, Raja'a has:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Trained and mentored 500+ certified coaches.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Founded the Middle East's first Bilingual Coaching & Mentoring
                  Academy.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Earned accreditations from ICF, EMCC, and leading global
                  institutes.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Served as ICF Kuwait Chapter Leader and co-faculty at Henley
                  Business School.
                </li>
              </ul>
              <p className="mt-6 text-gray-600 text-sm">
                She is also certified in GEOL, TAWOL, Psychological Safety, and
                Team Coaching — bringing global science into culturally aligned
                leadership practices.
              </p>

              {/* Logos section */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 mt-8">
                <img
                  src="https://via.placeholder.com/60x60"
                  alt="Logo 1"
                  className="h-12 w-12"
                />
                <img
                  src="https://via.placeholder.com/60x60"
                  alt="Logo 2"
                  className="h-12 w-12"
                />
                <img
                  src="https://via.placeholder.com/60x60"
                  alt="Logo 3"
                  className="h-12 w-12"
                />
                <img
                  src="https://via.placeholder.com/60x60"
                  alt="Logo 4"
                  className="h-12 w-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyMashar;
