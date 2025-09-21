import { motion } from "framer-motion";
import FloatingCircle from "../components/FloatingCircle";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className="bg-white py-12 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-6 ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left font-poppins">
          <h1 className="text-[48px] font-medium font-spartan leading-tight mb-4">
            Lead With <span className="text-primary">Purpose.</span>{" "}
            <span className="text-primary">Be</span>{" "}
            <span className="text-secondary">Future-Ready</span>
          </h1>
          <p className=" mb-2">
            Globally recognised. Culturally relevant. Human-centred.
          </p>
          <p className=" mb-6">
            Because growth isn’t just about success — it’s about resilience,
            well-being, and creating lasting change.
          </p>

          <button
            className="group relative px-3 py-3 rounded-lg text-white font-medium flex items-center gap-2 
             bg-[#0F1C80] transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-8"
          >
            <span className="text-[14px]">LET’S GROW TOGETHER</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center items-center mb-10 md:mb-0 gap-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              src="src\assets\Frame 1000002847.svg"
              alt="Person 1"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              src="src\assets\Frame 1000002844.svg"
              alt="Person 2"
              className="w-[350px] h-[350px] object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <img
              src="src\assets\Frame 1000002845.svg"
              alt="Person 3"
              className="w-[150px] h-[150px] object-cover rounded-full"
            />
          </div>
        </div>
      </section>
      {/* evolve section */}
      <section className="px-6 md:px-10 py-16 bg-white flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Images */}
        <div className="relative  flex justify-start">
          <img
            src="src\assets\Group 1000001845.svg"
            alt="Team Collaboration"
            className="rounded-xl w-[300px] md:w-[530px] "
          />
        </div>

        {/* RIGHT: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-[46px] font-medium mb-6 leading-tight font-spartan relative inline-block">
            The World is Changing. <br />
            Are You <span className="text-primary">Ready to</span>{" "}
            <span className="text-secondary relative inline-block">
              Evolve?
              <svg
                className="absolute left-[-8px] bottom-[-14px] w-[calc(100%+16px)] h-[20px] overflow-visible"
                viewBox="0 0 250 60"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="curveGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="54.8%" stopColor="#000000" />
                    <stop offset="54.81%" stopColor="#0038F0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 Q125,0 250,50"
                  stroke="url(#curveGradient)"
                  strokeWidth="15"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="font-poppins text-[14px] mb-6">
            Across the globe—and especially in the Arab region—leaders, teams,
            and organizations are navigating unprecedented change, mounting
            pressure, and rising expectations. The pace of transformation is
            accelerating, demanding a new kind of leadership.
            <br />
            At Mashar, we meet you at that critical edge.
          </p>

          <ul className="text-left space-y-1  mb-1">
            <li className="flex  items-start gap-3">
              {/* Icon */}
              <span className="mt-3 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  className="stroke-current"
                >
                  <path
                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {/* Text Block */}
              <p className="text-[15px] text-black ">
                <span className="text-secondary  font-poppins text-[20px] font-semibold">
                  Mindset Shift
                </span>{" "}
                – Helping individuals adopt a strong, courageous, and clear way
                of thinking.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-3 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  className="stroke-current"
                >
                  <path
                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[15px] text-black ">
                <span className="text-secondary  font-poppins text-[20px] font-semibold">
                  Practical Tools
                </span>{" "}
                – Providing resources and strategies to take effective action.
              </p>
            </li>

            <li className="flex  items-start gap-3">
              <span className=" mt-3 text-secondary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="none"
                  className="stroke-current"
                >
                  <path
                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[15px] text-black ">
                <span className="text-secondary  font-poppins text-[20px] font-semibold">
                  Ongoing Support
                </span>{" "}
                – Offering guidance and encouragement to lead with empathy and
                confidence.
              </p>
            </li>
          </ul>

          {/* CTA Button */}
          <button
            className="bg-primary text-white px-5 py-3 rounded-[12px]  mt-10 ml-12 transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-9"
          >
            START YOUR GROWTH →
          </button>
        </div>
      </section>
      {/* human solutions  */}
      <section className="py-10 px-4 md:px-12 lg:px-24 text-center  relative">
        {/* Background Rings (Top Left) */}
        <div className="absolute  top-5  left-0 z-0  pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              position: "absolute",
              width: "138.76px",
              height: "136.43px",
              top: "37.49px",
              left: "31.24px",
              opacity: 0.1,
              borderWidth: "11px",
              borderStyle: "solid",
              borderColor: "rgb(15, 28, 128)",
              borderRadius: "100px",
              boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
            }}
          ></div>

          <div
            className="absolute rounded-full"
            style={{
              position: "absolute",
              width: "170.73px",
              height: "126.57px",
              top: "16px",
              left: "-36px",
              transform: "rotate(-233.73deg)",
              opacity: 0.1,
              borderWidth: "11px",
              borderStyle: "solid",
              borderColor: "rgb(15, 28, 128)",
              borderRadius: "100px",
              boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
            }}
          ></div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-[46px] font-medium leading-snug mb-2 font-spartan">
          Real Problems <span className="text-primary">Need Human</span>{" "}
          <span className="text-secondary ">Solutions</span>
        </h2>

        {/* Subtext */}
        <p className="text-[15px]   max-w-xl mx-auto mb-12  font-normal font-poppins">
          {" "}
          Leadership today means more than strategy—it requires emotional
          strength, cultural sensitivity, and personal clarity
        </p>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-[24px]  font-poppins">
          {/* Leaders */}
          <div className="bg-[#E4E4E4] rounded-[12px] py-14 px-5">
            <h3 className="text-[30px] font-semibold text-primary mb-2 ">
              Leaders
            </h3>
            <p className=" text-[18px] font-normal text-center xl:px-1">
              Overcome burnout, overwhelm, and uncertainty.
            </p>
          </div>

          {/* Teams */}
          <div className="py-14 px-5">
            <h3 className="text-[30px] font-semibold text-secondary mb-2 ">
              Teams
            </h3>
            <p className=" text-[18px] font-normal text-center xl:px-1">
              Struggle with mistrust and blocked creativity.
            </p>
          </div>

          {/* Organizations */}
          <div className="bg-[#E4E4E4] rounded-[12px] py-14 px-5">
            <h3 className="text-[30px] font-semibold text-primary mb-2 ">
              Organizations
            </h3>

            <p className=" text-[17px] font-normal text-center xl:px-1">
              Fall behind when outdated methods clash with modern expectations.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="bg-primary text-white px-4 py-3 rounded-[12px] font-medium  tracking-wide font-spartan text-sm  transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-8"
        >
          → LET’S TALK ABOUT YOUR CHALLENGES →
        </button>
      </section>

      {/* grow section */}
      <section className="relative py-12 flex items-center justify-center bg-white lg:px-20">
        <div className="absolute top-0 left-0">
          {/* First Circle */}
          <img
            src="src\assets\Group 1000001851 (1).svg"
            alt="Circle 1"
            className="opacity-full "
          />
        </div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-[46px]  font-medium font-spartan leading-snug">
              We Grow People,
              <br />
              <span className="text-primary">
                Not Just{" "}
                <span className="text-secondary relative inline-block mb-6 ">
                  Skills.{" "}
                  <svg
                    className="absolute left-[-28px] bottom-[-20px] w-[calc(100%+52px)] h-[20px] overflow-visible"
                    viewBox="0 0 250 60"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="curveGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="54.8%" stopColor="#000000" />
                        <stop offset="54.81%" stopColor="#0038F0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q125,0 250,50"
                      stroke="url(#curveGradient)"
                      strokeWidth="15"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <div className="bg-[#E4E4E4] p-4  px-7 rounded-[20px] shadow-sm w-fit font-poppins">
              <p className=" text-sm">
                The question is no longer “How do we grow?”, but: <br />
                <span className=" text-primary font-bold">
                  “How do we grow{" "}
                  <span className="text-secondary">Future-Ready?</span>”
                </span>
              </p>
            </div>

            <p className=" leading-relaxed mb-6">
              At Mashar, we don’t give you pre-made solutions. <br />
              We co-create leadership journeys grounded in psychology,
              neuroscience, and cultural wisdom – designed to help you grow
              deeply and create meaningful change.
            </p>

            <button
              className="bg-primary text-white px-4 py-3  font-spartan rounded-lg shadow-md font-medium transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-8"
            >
              EXPLORE OUR SIGNATURE EXPERIENCE →
            </button>
          </div>
          {/* Right Side Circles */}
          <div className="relative flex items-center justify-center  w-full h-full ">
            {/* Background Rings (Top Left) */}
            <div className="absolute pointer-events-none">
              <div
                className="absolute rounded-full"
                style={{
                  position: "absolute",
                  width: "138.76px",
                  height: "136.43px",
                  top: "-137.51px",
                  left: "31.24px",
                  opacity: 0.1,
                  borderWidth: "11px",
                  borderStyle: "solid",
                  borderColor: "rgba(15, 28, 128, 0.4)", // lighter border
                  borderRadius: "100px",
                  boxShadow: "0px 4px 16px 0px rgba(43, 52, 118, 0.3)", // lighter shadow
                }}
              ></div>

              <div
                className="absolute rounded-full"
                style={{
                  position: "absolute",
                  width: "170.73px",
                  height: "126.57px",
                  top: "-156px",
                  left: "-36px",
                  transform: "rotate(-233.73deg)",
                  opacity: 0.1, // lighter
                  borderWidth: "11px",
                  borderStyle: "solid",
                  borderColor: "rgba(15, 28, 128, 0.4)", // lighter border
                  borderRadius: "100px",
                  boxShadow: "0px 4px 16px 0px rgba(43, 52, 118, 0.3)", // lighter shadow
                }}
              ></div>
            </div>

            {/* Floating Circles */}
            <FloatingCircle
              size="125"
              gradient="radial-gradient(60.63% 609.29% at 50% 50%, #0F1C80 44.56%, #FF7C02 100%)"
              duration={6}
            >
              Future-Ready Growth
            </FloatingCircle>

            <FloatingCircle
              size="128"
              gradient="linear-gradient(180deg, #B2B2B2 0%, #0F1C80 100%)"
              duration={8}
            >
              Neuroscience
            </FloatingCircle>

            <FloatingCircle
              size="80"
              gradient="linear-gradient(180deg, #0F1C80 0%, #FF7C02 100%)"
              duration={7}
            >
              Cultural Wisdom
            </FloatingCircle>

            <FloatingCircle
              size="110"
              gradient="linear-gradient(180deg, #B2B2B2 0%, #0F1C80 100%)"
              duration={9}
            >
              Psychology
            </FloatingCircle>
          </div>
        </div>
      </section>
      <section className="py-6 ">
        <img
          src="src\assets\Frame 1000002645.svg"
          alt="frame image "
          className="w-full h-auto"
        />
      </section>
    </>
  );
};
export default Home;
