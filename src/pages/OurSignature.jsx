import whyMashar from "../assets/oursigHero.png";
import teamMashar from "../assets/teamMashar.png";
import signitureGif from "../assets/aeb7d238c48df99c249a74c95e829285332bc6d1.gif";
import squareAnimation from "../assets/squareAnimation.gif";
import StepsNew from "../components/steps";
import oursigimage from "../assets/whyMashar.png";

export default function OurSignature() {
  return (
    <div>
      {/* Header Section */}
      <header className="relative h-[400px] flex flex-col justify-center items-center text-white text-center p-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${whyMashar})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-10 tracking-widest font-normal font-spartan">
          <h1 className=" md:text-5xl  mb-4 ">
            A Living Framework for Lasting <br></br>Transformation.
          </h1>
          <div className="flex justify-center items-center space-x-2 text-lg mt-10">
            <span>Home</span>
            <span className="mx-4 text-2xl ">&gt;</span>
            <span>Our Signiture</span>
          </div>
        </div>
      </header>

      {/* Roots Run Deep Section */}
      <div className="relative">
        {" "}
        <img
          src={signitureGif}
          alt="Signature Gif"
          className="absolute top-[10px] left-[29rem] w-[180px] opacity-5 pointer-events-none z-50"
        />
        <section className="bg-white pt-24 mx-auto max-w-7xl relative pb-20 font-spartan px-4 md:px-20 lg:pr-36 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-12">
          {" "}
          {/* Background Rings (Top Left) */}
          <div className="absolute  top-5  left-0 z-0  pointer-events-none">
            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "138.76px",
                height: "136.43px",
                top: " -31.51px",
                left: "-79.76px",
                opacity: 0.3,
                borderWidth: "11px",
                borderStyle: "solid",
                borderColor: "#FF7C02",
                borderRadius: "100px",
                boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
              }}
            ></div>
          </div>
          <div className="lg:w-[400px] text-left tracking-wide">
            <h2 className="text-[45px] font-medium  tracking-wider">
              Our <span className="text-[#FF7C02]"> Signature</span>{" "}
              <span className="text-[#0F1C80]">Approach</span>
            </h2>
            <div className="mb-6 w-80 mt-[-8px] ">
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

            <p className=" text-[15px] leading-snug mb-10 ">
              The Mashar Method - Where Insight Meets Impact Transformation at
              Mashar is personal, purposeful, and deeply human. We blend global
              standards with cultural intelligence to create learning
              experiences that truly last.
            </p>

            <button
              className="bg-primary text-white px-4 py-3  font-spartan rounded-lg shadow-md font-medium transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-8"
            >
              EXPLORE OUR SIGNATURE EXPERIENCE →
            </button>
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
      </div>

      {/* our method */}
      <section className="px-6 md:px-12 py-16 bg-white flex flex-col md:flex-row items-center gap-24 mx-auto max-w-7xl">
        {/* LEFT: Images */}
        <div className="relative  flex justify-start">
          <img
            src="src\assets\Frame 1000002297 (3).svg"
            alt="Team Collaboration"
            className="rounded-xl w-[300px] md:w-[480px] "
          />
          {/* Right: Animation (absolutely positioned) */}
          <div className="absolute -right-16 top-96 -mt-16 lg:-mt-24 opacity-65">
            <img
              src={squareAnimation}
              alt="Goals Animation"
              className="w-40 h-40 object-contain rotate-45"
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-[46px] font-medium mb-8 leading-tight font-spartan relative inline-block">
            Why <span className="text-primary">Our Method</span>
            <br />
            <span className="text-secondary relative inline-block">
              Stand Apart
              <svg
                className="absolute left-[131px] bottom-[-14px] w-[calc(100%-100px)] h-[20px] overflow-visible"
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
                    <stop offset="54.8%" stopColor="#0F1C80" />
                    <stop offset="54.81%" stopColor="#FF7C02" />
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
            Mashar’s methodology isn’t one-size-fits-all — it’s a living
            framework, scientifically grounded, culturally adaptable, and
            emotionally intelligent.
            <br />
            <br /> Whether we’re working with C-suite leaders, high-potential
            teams, or major change initiatives, our approach is:
          </p>

          <ul className="text-left space-y-4  mb-1">
            <li className="flex  items-start gap-3">
              {/* Icon */}
              <span className=" text-secondary">
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
              <p className=" text-secondary  font-poppins text-[20px] font-semibold ">
                Globally Validated
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className=" text-secondary">
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
              <p className=" text-secondary  font-poppins text-[20px] font-semibold ">
                Locally Relevant
              </p>
            </li>

            <li className="flex  items-start gap-3">
              <span className="  text-secondary ">
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
              <p className=" text-secondary  font-poppins text-[20px] font-semibold ">
                Deeply Human-Centered
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
      {/*  how we work */}

      <section className="px-6 md:px-16 lg:px-24 py-12 mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-left mb-12 font-spartan">
          <h2 className="text-3xl md:text-[46px] font-medium tracking-wide">
            How We{" "}
            <span className="text-orange-500 relative inline-block">
              Work
              <svg
                className="absolute left-[-15px] bottom-[-27px] w-[calc(100%+54px)] h-[20px] overflow-visible"
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
              </svg>{" "}
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-lg font-poppins text-[13px] tracking-wide  leading-relaxed text-left mb-12">
          At Mashar, insight becomes action. Our approach blends ICF coaching
          competencies, neuroscience, and adult learning theory to turn
          development into real results. Every journey is tailored — because no
          two growth paths are the same.
          <br />
          This is how meaningful growth begins—and how it lasts.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Cards */}
          <div className="space-y-5 tracking-wide">
            {/* Card 1 */}
            <div className="relative rounded-lg shadow-md px-6 py-8 flex gap-4 items-center border-l-4 border-secondary transition-all duration-500 hover:border-primary group overflow-hidden bg-[#EFEFEF]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(269.6deg,#FFFFFF_0.35%,rgba(70,86,206,0.3)_99.65%)]"></div>

              {/* Content */}
              <div className="relative flex gap-4 items-center">
                <div className="bg-[#E2E2E5] rounded-full p-3">
                  <img
                    src="src/assets/solar_cup-star-bold.svg"
                    alt="ICF"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-primary font-poppins text-[14px] mb-1 transition-colors duration-300 group-hover:text-black group-hover:font-normal">
                    ICF Core Competencies
                  </h4>
                  <p className="text-[14px] font-poppins">
                    Professional coaching standards
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-lg shadow-md px-6 py-8 flex gap-4 items-center border-l-4 border-secondary transition-all duration-500 hover:border-primary group overflow-hidden bg-[#EFEFEF] group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(269.6deg,#FFFFFF_0.35%,rgba(70,86,206,0.3)_99.65%)]"></div>

              {/* Content */}
              <div className="relative flex gap-4 items-center">
                <div className="bg-[#E2E2E5] rounded-full p-3">
                  <img
                    src="src/assets/lucide_dna.svg"
                    alt="Neuroscience"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-primary font-poppins text-[14px] mb-1 transition-colors duration-300 group-hover:text-black group-hover:font-normal">
                    NeuroScience
                  </h4>
                  <p className="text-[14px] font-poppins">
                    Brain-based learning principles
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg shadow-md px-6 py-8 flex gap-4 items-center border-l-4 border-secondary transition-all duration-500 hover:border-primary group overflow-hidden bg-[#EFEFEF]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(269.6deg,#FFFFFF_0.35%,rgba(70,86,206,0.3)_99.65%)]"></div>

              {/* Content */}
              <div className="relative flex gap-4 items-center">
                <div className="bg-[#E2E2E5] rounded-full p-3">
                  <img
                    src="src/assets/solar_cup-star-bold (1).svg"
                    alt="Adult Learning"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-primary font-poppins text-[14px] mb-1 transition-colors duration-300 group-hover:text-black group-hover:font-normal">
                    Adult Learning Theory
                  </h4>
                  <p className="text-[14px] font-poppins">
                    Evidence-based education methods
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Circles */}
          <div className="relative w-full h-[400px]">
            {/* Circle 1 */}
            <div className="absolute top-0 left-28 flex flex-col items-center border-conic-b">
              <div className="bg-indigo-900 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md animate-float-fast">
                <img
                  src="src/assets/sigicon.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
            {/* Circle 2 */}
            <div className="absolute top-10 right-12 flex flex-col items-center border-conic-b">
              <div className="bg-orange-500 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md animate-float">
                <img
                  src="src/assets/trophyBlue.svg"
                  alt="icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            {/* Circle 3 */}
            <div className="absolute top-28 left-40 flex flex-col items-center border-conic-b">
              <div className="bg-indigo-900 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md animate-float">
                <img
                  src="src/assets/lucide_dna.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
            {/* Circle 4 */}
            <div className="absolute top-28 left-10 flex flex-col items-center border-conic-b">
              <div className="bg-orange-500 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md animate-float">
                <img
                  src="src/assets/trophyBlue.svg"
                  alt="icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            {/* Circle 5 */}
            <div className="absolute top-64 left-12 flex flex-col items-center border-conic-b">
              <div className="bg-indigo-900 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md animate-float-fast">
                <img
                  src="src/assets/lucide_dna.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
            {/* Circle 6 */}
            <div className="absolute bottom-16 right-32 flex flex-col items-center border-conic-b">
              <div className="bg-indigo-900 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md animate-float-slow">
                <img
                  src="src/assets/lucide_dna.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
            {/* Circle 7 */}
            <div className="absolute bottom-36 left-60 flex flex-col items-center border-conic-b">
              <div className="bg-orange-500 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md animate-float-fast">
                <img
                  src="src/assets/trophyBlue.svg"
                  alt="icon"
                  className="w-8 h-8"
                />
              </div>
            </div>
            {/* Circle 8 */}
            <div className="absolute bottom-36 right-10 flex flex-col items-center border-conic-b">
              <div className="bg-indigo-900 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-md animate-float-slow">
                <img
                  src="src/assets/sigicon.svg"
                  alt="icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* growth path */}

      <div className="max-w-7xl flex flex-col items-center px-36 mx-auto py-8">
        {/* Title */}
        <h2 className="text-2xl md:text-[46px] font-medium mb-28 text-center tracking-wide">
          Our 5-Step{" "}
          <span className="text-secondary relative ">
            Growth Path{" "}
            <svg
              className="absolute left-[-92px] bottom-[-27px] w-[calc(100%-105px)] h-[20px] overflow-visible"
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
            </svg>{" "}
          </span>
        </h2>

        <StepsNew />
      </div>

      {/* img */}
      <section className="relative h-[400px] flex flex-col justify-center items-center text-white text-center p-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${oursigimage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </section>
    </div>
  );
}
