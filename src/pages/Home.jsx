import { motion, AnimatePresence } from "framer-motion";
import FloatingCircle from "../components/FloatingCircle";
import NewsletterPopup from "./NewsletterPopup";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import LeadersSection from "../components/logos";
import TestimonialsSlider from "../components/TestimonialsSlider";
import squareAnimation from "../assets/squareAnimation.gif";

const faqs = [
  {
    question: "What is coaching, and how can it help me?",
    answer:
      "Coaching is a collaborative partnership that helps you clarify goals, unlock potential, and overcome challenges. It empowers you to take purposeful action, improve performance, and create lasting transformation.",
  },
  {
    question: "What can I expect during a coaching session?",
    answer:
      "During a coaching session, you can expect open dialogue, reflective questions, and actionable insights tailored to your goals. Sessions are focused on creating clarity and identifying practical steps forward.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions varies depending on your goals. Some clients benefit from a few sessions, while others prefer ongoing coaching for continuous growth.",
  },
  {
    question: "Is coaching right for me?",
    answer:
      "If you're looking for guidance, clarity, and support in achieving your goals, coaching is a great fit. It’s designed to empower you, not give you ready-made solutions.",
  },
];

const impactData = [
  {
    title: "Leadership Excellence",
    description:
      "Build resilient, ethical, people-first leaders at every level.",
    image: "src/assets/mingcute_chess-fill.svg",
  },
  {
    title: "Skills Development",
    description:
      "Build resilient, ethical, people-first leaders at every level.",
    image: "src/assets/flowbite_brain-solid.svg",
  },
  {
    title: "Team Effectiveness",
    description:
      "Transform groups into high-impact teams through tailored strategies.",
    image: "src/assets/ph_handshake-fill.svg",
  },
  {
    title: "Emotional Intelligence",
    description:
      "Equip teams with skills to navigate emotions and relationships effectively.",
    image: "src/assets/ph_handshake.svg",
  },
];

const programs = [
  {
    title: "COACHING",
    subtitle: "Unlock Personal and Professional Clarity",
    description:
      "Support executives, teams, and groups to achieve sustainable growth and unlock personal and professional clarity.",
    buttonText: "EXPLORE YOUR COACHING JOURNEY",
  },
  {
    title: "TRAINING",
    subtitle: "Unlock Personal and Professional Clarity",
    description:
      "Build coaching capacity, resilience, influence, and psychological safety that elevate performance and drive transformation.",
    buttonText: "START YOUR GROWTH JOURNEY",
  },
  {
    title: "MENTORING",
    subtitle: "Unlock Personal and Professional Clarity",
    description:
      "For coaches pursuing ICF/EMCC credentials to deepen reflection, strengthen ethics, and advance the growth journey.",
    buttonText: "DISCOVER MENTORING PATHWAYS",
  },
  {
    title: "ASSESSMENT",
    subtitle: "Unlock Personal and Professional Clarity",
    description:
      "Use advanced tools like GEDI and TAWDI to uncover executive leadership effectiveness and team dynamics.",
    buttonText: "LEARN ABOUT OUR TOOLS",
  },
];

const stats = [
  { number: "15+", label: "Global Accredited Coaches" },
  { number: "750+", label: "Certified Professional Coaches" },
  { number: "2+", label: "Global Certification Programs" },
  { number: "10+", label: "Global Credentials Professional Development" },
  { number: "15+", label: "Business Client Partner" },
];

const points = [
  "Accredited by ICF and top global bodies.",
  "Pioneers in bilingual coaching (Arabic & English).",
  "Tailored solutions aligned with culture and goals.",
  "Over 20 years empowering leaders across industries.",
  "Evidence-based, human-centered, measurable outcomes.",
  "Global network of certified coaches ensuring diverse perspectives.",
];

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup");

    if (!hasSeenPopup) {
      // Show popup 1 second after page load
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -right-10 top-1/2 -translate-y-1/2 rounded-full p-3 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-[#2B3476]"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute -left-11 top-1/2 -translate-y-1/2   rounded-full p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#2B3476]"
            d="m15 6l-6 6l6 6"
          />
        </svg>
      </button>
    );
  }

  const handleClosePopup = () => {
    setShowPopup(false);
    // Mark that user has seen the popup
    localStorage.setItem("hasSeenNewsletterPopup", "true");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {showPopup && <NewsletterPopup onClose={handleClosePopup} />}

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
          {/* Right: Animation (absolutely positioned) */}
          <div className="absolute -right-2 top-96 -mt-16 lg:-mt-24 opacity-65">
            <img
              src={squareAnimation}
              alt="Goals Animation"
              className="w-40 h-40 object-contain rotate-45"
            />
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-[24px]  font-poppins ">
          {/* Leaders */}
          <div className="bg-[#E4E4E4] rounded-[12px] py-14 px-5  group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:cursor-pointer origin-center hover:shadow-[0px_4px_15.2px_0px_#00000040]">
            <h3 className="text-[30px] font-semibold  group-hover:font-extrabold text-primary mb-2 ">
              Leaders
            </h3>
            <p className=" text-[17px] font-normal text-center xl:px-1 group-hover:font-bold">
              Overcome burnout, overwhelm, and uncertainty.
            </p>
          </div>

          {/* Teams */}
          <div className="py-14 px-5  rounded-[12px] group  transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer origin-center hover:shadow-[0px_4px_15.2px_0px_#00000040]">
            <h3 className="text-[30px] font-semibold group-hover:font-extrabold text-secondary mb-2  ">
              Teams
            </h3>
            <p className=" text-[17px] font-normal text-center xl:px-1 group-hover:font-bold">
              Struggle with mistrust and blocked creativity.
            </p>
          </div>

          {/* Organizations */}
          <div className="bg-[#E4E4E4] rounded-[12px] py-14 px-5 group transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer origin-center hover:shadow-[0px_4px_15.2px_0px_#00000040]">
            <h3 className="text-[30px] font-semibold  group-hover:font-extrabold text-primary mb-2 ">
              Organizations
            </h3>

            <p className=" text-[17px] font-normal text-center xl:px-1 group-hover:font-bold">
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
      <section className="relative py-16 flex items-center justify-center bg-white lg:px-20">
        <div className="absolute -top-9 left-0">
          {/* First Circle */}
          <img
            src="src\assets\Group 1000001851 (1).svg"
            alt="Circle 1"
            className="opacity-full w-[150px] "
          />
        </div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
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
            {/* Right: Animation (absolutely positioned) */}
            <div className="absolute -right-20 -top-7 -mt-16 lg:-mt-24 opacity-65">
              <img
                src={squareAnimation}
                alt="Goals Animation"
                className="w-40 h-40 object-contain rotate-45"
              />
            </div>

            <div className="bg-[#E4E4E4] p-4  px-4 rounded-[20px] shadow-sm w-fit font-poppins">
              <p className=" text-sm">
                The question is no longer “How do we grow?”, but: <br />
                <span className=" text-primary font-bold">
                  “How do we grow{" "}
                  <span className="text-secondary">Future-Ready?</span>”
                </span>
              </p>
            </div>

            <p className=" leading-snug mb-6 max-w-md text-[13px] font-poppins tracking-[0.7px] ">
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

      {/* Areas of impact */}
      <section>
        <div className="text-center  px-6 pt-12 ">
          <h2 className="text-[46px] font-medium font-spartan mb-7">
            Our{" "}
            <span className="text-primary relative">
              Areas of{" "}
              <svg
                className="absolute left-[13px] bottom-[-25px] w-[calc(100%-2px)] h-[20px] overflow-visible"
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
            </span>{" "}
            <span className="text-secondary">Impact</span>
          </h2>
          <p className=" mb-8 max-w-4xl mx-auto font-poppins text-[15px]">
            We equip leaders and teams with the skills that matter most –
            well-being, resilience, emotional intelligence, and adaptive
            leadership.
          </p>
        </div>
        <div className="pb-10 px-[120px] bg-white text-center relative">
          {/* First Circle */}
          {/* Background Rings (Top Left) */}
          <div className="absolute pointer-events-none">
            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "138.76px",
                height: "136.43px",
                top: "-19.51px",
                left: "-19.76px",
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
                top: "-47px",
                left: "-78px",
                transform: "rotate(-233.73deg)",
                opacity: 0.1, // lighter
                borderWidth: "11px",
                borderStyle: "solid",
                borderColor: "rgba(15, 28, 128, 0.4)",
                borderRadius: "100px",
                boxShadow: "0px 4px 16px 0px rgba(43, 52, 118, 0.3)",
              }}
            ></div>
          </div>
          <Slider {...settings}>
            {impactData.map((item, index) => (
              <div key={index} className="px-3 py-5">
                <div className="rounded-[10px]   transition duration-300 py-[86px] px-[8px] bg-[#F4F5F8] flex flex-col items-center text-center hover:shadow-blue border border-slate-300 group">
                  <div className="w-[118px] h-[118px] mb-4 flex items-center justify-center rounded-full bg-white shadow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h3 className="font-poppins text-[20px] font-medium  mb-4 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-[14px]  leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* inspire */}

      <section className="py-10 px-6 md:px-20 bg-white text-center ">
        {/* Heading */}
        <h2 className="text-3xl text-[46px] font-medium font-spartan mb-10">
          Programs That{" "}
          <span className="text-primary relative">
            Inspire Real{" "}
            <svg
              className="absolute left-[13px] bottom-[-26px] w-[calc(100%-62px)] h-[20px] overflow-visible"
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
          </span>{" "}
          <span className="text-secondary">Change</span>
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-sm md:text-base leading-6">
          We empower leaders, teams, organizations, and coaches with practical,
          research-backed solutions – rooted in cultural and human connection.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[50px] relative z-10 mx-auto">
          {/* Background Rings (Top Left) */}
          <div className="absolute  top-5  left-0   pointer-events-none z-40">
            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "138.76px",
                height: "136.43px",
                top: "492.49px",
                left: "-1.76px",
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
                top: " 466px",
                left: "-65px",
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
          {programs.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[12px] shadow-[0px_4px_8px_0px_#00000040] p-8 py-20 text-left flex flex-col justify-between 
  overflow-hidden transition-all duration-500"
            >
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(279.6deg,#FFFFFF_0.39%,rgba(70,86,206,0.3)_99.69%)] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>

              <div className="relative z-10">
                <h3 className="text-[32px] font-medium font-spartan mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary font-poppins text-[17px] font-medium mb-4">
                  {item.subtitle}
                </p>
                <p className=" text-[14px] leading-7 mb-6 font-poppins">
                  {item.description}
                </p>
              </div>

              <button
                className="relative z-10 font-spartan text-left px-5 py-3 bg-primary text-white rounded-[12px] tracking-[0.5px] text-sm font-medium transition-all duration-500 
    hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
    hover:pr-8 w-max"
              >
                {item.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* founder section  */}
      <section className="py-24 px-6 md:px-[130px] bg-white font-sans relative">
        {/* Background Rings (Top Left) */}
        <div className="absolute pointer-events-none z-0">
          <div
            className="absolute rounded-full"
            style={{
              position: "absolute",
              width: "138.76px",
              height: "136.43px",
              top: "-24.51px",
              left: "-26.76px",
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
              top: "-48px",
              left: "-100px",
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
        <div
          className="max-w-6xl mx-auto grid gap-12 items-center 
             md:grid-cols-2 xl:grid-cols-5"
        >
          {/* Left (with vertical line on xl screens) */}
          <div
            className="flex flex-col items-center md:items-start text-center md:text-left 
               xl:col-span-2 xl:pr-10 xl:border-r xl:border-primary"
          >
            <img
              src="src/assets/founder.svg"
              alt="Founder"
              className="w-[18rem] h-[18rem] object-cover rounded-full z-20"
            />
            <h3 className="mt-6 text-[22px] font-medium font-poppins text-primary">
              Mrs. Raja’a Yousef Allaho
            </h3>
            <p className="font-poppins font-light text-[19px] mt-1">
              Founder of Mashar | Professional{" "}
              <br className="xl:block hidden" />
              Executive & Team Coach
            </p>
          </div>

          {/* Right */}
          <div className="xl:col-span-3">
            <div className="space-y-6 mb-6">
              <h2 className="text-[46px] font-medium font-spartan leading-snug">
                Meet <span className="text-primary">Our Founder</span> & <br />{" "}
                <span className="text-secondary relative inline-block">
                  Lead Coach
                  <svg
                    className="absolute left-[106px] bottom-[-3px] w-[calc(100%-62px)] h-[20px] overflow-visible"
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

              <p className="font-poppins text-[14px] leading-relaxed">
                With over 15 years of experience, “I empower leaders to pursue
                purposeful growth, lead with clarity, and embrace the journey of
                transformation. For me, coaching is more than a profession – it
                is a calling
              </p>

              <p className="font-poppins text-[14px] leading-relaxed">
                Since 2007, I have dedicated myself to honing my expertise,
                blending skills, knowledge, and insight to support teams and
                organizations in reaching their fullest potential and guiding
                them to live and lead with authentic purpose.”
              </p>
            </div>

            <button
              className="mt-6 bg-primary text-white px-6 py-2 rounded-[12px] shadow inline-flex items-center gap-2 text-[16px] font-normal tracking-[1px] transition-all duration-500 
                 hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
                 hover:pr-9"
            >
              EXPLORE OUR SIGNATURE EXPERIENCE →
            </button>
          </div>
        </div>
      </section>

      {/* 15+ global */}

      <section className="py-16 px-6 bg-[radial-gradient(60.63%_609.29%_at_50%_50%,#0F1C80_44.56%,#FF7C02_100%)]">
        <div className="px-[30px] grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] shadow-md py-8 px-4 flex flex-col items-center justify-center text-center 
             transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:cursor-pointer origin-center"
            >
              <h3 className="text-3xl md:text-[40px] font-bold text-[#FF7C02] font-poppins mb-2">
                {item.number}
              </h3>
              <p className="text-[16px] font-poppins leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* why mashar */}

      <section className=" mx-auto px-6 md:px-12 lg:px-[130px]   max-w-7xl py-20  gap-12 items-center">
        {/* Left Content */}
        <h2 className="text-3xl md:text-[46px] font-medium   text-center font-spartan mb-12">
          Purpose- Driven,{" "}
          <span className="text-primary relative">
            Baked by{" "}
            <svg
              className="absolute left-[-62px] bottom-[-26px] w-[calc(100%-12px)] h-[20px] overflow-visible"
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
          <span className="text-secondary">Experience</span>
        </h2>
        <p className="text-center mb-8 font-poppins text-[13px] ">
          Here’s why Mashar is trusted by those who lead with heart and vision.
        </p>
        <div className="grid md:grid-cols-2 max-w-6xl ">
          <div>
            <ul className="space-y-2 mb-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-[38px]">
                  {/* ✅ Inline SVG icon */}
                  <span className=" text-primary">
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

                  <span className="font-poppins text-[14px]">{point}</span>
                </li>
              ))}
            </ul>

            <button
              className="bg-primary ] text-white font-medium px-4 py-3 rounded-lg flex items-center gap-2  ml-[69px] transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-8"
            >
              LISTEN TO OUR STORY [SEND TO ABOUT]
              <span>→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className=" justify-end flex">
            <img
              src="src/assets/Frame 1000002297 (1).svg"
              alt="Workshop"
              className="rounded-[30px]  max-w-md md:max-w-sm "
            />
          </div>
        </div>
      </section>

      {/* frequently asked questions  */}

      <section className=" mx-auto px-6 md:px-12 lg:px-[130px]   max-w-7xl py-10  gap-12 items-center">
        {/* Heading */}
        <div className="text-center mb-12 relative">
          {/* Background Rings (Top Left) */}
          <div className="absolute  top-5  left-0 z-0  pointer-events-none">
            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "138.76px",
                height: "136.43px",
                top: "-31.51px",
                left: "92.24px",
                opacity: 0.04,
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
                top: " -55px",
                left: "17px",
                transform: "rotate(-233.73deg)",
                opacity: 0.04,
                borderWidth: "11px",
                borderStyle: "solid",
                borderColor: "rgb(15, 28, 128)",
                borderRadius: "100px",
                boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
              }}
            ></div>
          </div>
          <h2 className="text-3xl md:text-[46px] font-medium font-spartan tracking-[0.9px]">
            Frequently{" "}
            <span className="text-primary relative">
              Asked{" "}
              <svg
                className="absolute left-[-10px] bottom-[-32px] w-[calc(100%+43px)] h-[20px] overflow-visible"
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
            </span>{" "}
            <span className="text-secondary">Questions</span>
          </h2>
          <p className="mt-16 font-poppins text-[14px] max-w-lg mx-auto">
            Find answers to common questions about our services and discover how
            we can support your journey to success.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className=" max-w-6xl  space-y-4 relative">
          {/* Background Rings (Top Left) */}
          <div className="absolute  top-5  left-0 z-0  pointer-events-none">
            <div
              className="absolute rounded-full"
              style={{
                position: "absolute",
                width: "138.76px",
                height: "136.43px",
                top: " 150.49px",
                left: "-28.76px",
                opacity: 0.04,
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
                top: "122px",
                left: "-89px",
                transform: "rotate(-233.73deg)",
                opacity: 0.04,
                borderWidth: "11px",
                borderStyle: "solid",
                borderColor: "rgb(15, 28, 128)",
                borderRadius: "100px",
                boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
              }}
            ></div>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-[0px_4px_4px_0px_#00000012]"
            >
              <button
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center font-poppins p-6 text-left font-medium transition text-[20px] ${
                  openIndex === index
                    ? "bg-primary text-white font-normal"
                    : "bg-[#2B347608] text-primary"
                }`}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    key={`content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.36, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#2B347608] font-poppins text-[15px] leading-7"
                  >
                    <div className="p-5">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* still questions */}
      <section className="py-12 text-center mx-auto px-6 md:px-12 lg:px-[130px]   max-w-7xl ">
        {/* Heading */}
        <h2 className="text-[48px] font-medium font-spartan mb-4  ">
          <span className="text-primary">Still have </span>

          <span className="bg-[linear-gradient(90deg,#00208A_40.54%,#FF7C02_100%)] text-transparent bg-clip-text">
            Questions?
          </span>
        </h2>

        {/* Button */}
        <div className="mt-4">
          <button
            className="inline-flex items-center gap-2 bg-primary text-white tracking-[0.6px] px-16 py-3 rounded-[12px] text-sm font-medium transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-20 "
          >
            CONTACT US
            <span>→</span>
          </button>
        </div>
      </section>
      {/* start conversation */}

      <section className="relative py-16 px-6 md:px-12 text-center text-white bg-[radial-gradient(60.63%_609.29%_at_50%_50%,#0F1C80_44.56%,#FF7C02_100%)]">
        <div className=" mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-[46px] font-medium mb-6 font-spartan">
            Start a Conversation That Changes Everything.
            <div className="my-6 w-80 flex justify-center items-center mx-auto">
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
          </h2>

          {/* Curved Line */}

          {/* Subtext */}
          <p className="text-base md:text-[14px] mb-2 opacity-90 font-poppins">
            If you're looking to inspire transformation—not just information—
            you’re in the right place.
          </p>
          <p className="text-base md:text-[14px] mb-10 opacity-90 font-poppins">
            Let’s co-create a future where people flourish, organizations
            evolve, and the region leads with wisdom.
          </p>

          {/* Button */}
          <div>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 border border-white rounded-[12px] text-sm md:text-base font-medium font-spartan  tracking-[0.7px] transition-all duration-500 
             hover:bg-[linear-gradient(90deg,#0F1C80_70%,#FF7C02_100%)] 
             hover:pr-8"
            >
              BOOK A DISCOVERY CALL →
            </button>
          </div>
        </div>
      </section>
      {/* logos */}
      <section className=" pt-20 pb-10 text-center relative ">
        {/* Background Rings (Top Left) */}
        <div className="absolute  top-5  left-0 z-0  pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              position: "absolute",
              width: "138.76px",
              height: "136.43px",
              top: "66.49px",
              left: "151.24px",
              opacity: 0.05,
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
              top: "46px",
              left: "84px",
              transform: "rotate(-233.73deg)",
              opacity: 0.05,
              borderWidth: "11px",
              borderStyle: "solid",
              borderColor: "rgb(15, 28, 128)",
              borderRadius: "100px",
              boxShadow: "0px 4px 16px 0px rgb(43, 52, 118)",
            }}
          ></div>
        </div>
        {/* Heading */}
        <h2 className="text-3xl md:text-[46px] font-medium  font-spartan mb-10">
          Leaders{" "}
          <span className="text-primary relative">
            Across the {/* Underline (curved style mimic) */}
            <svg
              className="absolute left-[-8px] bottom-[-23px] w-[calc(100%-23px)] h-[20px] overflow-visible"
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
          </span>{" "}
          <span className="text-secondary">Region</span>
        </h2>

        <p className="font-poppins text-[15px] mb-12">
          Trusted by Leaders Across the Region
        </p>
        <LeadersSection />
      </section>

      {/* testimonials */}
      <section className="pt-8 pb-32  px-6 md:px-10 bg-white text-center">
        <TestimonialsSlider />
      </section>
    </>
  );
};
export default Home;
