import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CollapseExpandCard({ skull1 }) {
  const controls = useAnimation();
  const [isFront, setIsFront] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = async (hoverState) => {
    if (isAnimating || hovered === hoverState) return; // prevent retrigger
    setHovered(hoverState);
    setIsAnimating(true);

    // collapse
    await controls.start({
      scaleX: 0.01,
      transition: { duration: 0.25, ease: "easeInOut" },
    });

    // swap content/background only at midpoint
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
        background: isFront
          ? "linear-gradient(360deg, #FFFFFF 0%, #0F1C80 100%)"
          : "#ffffff",
        boxShadow: "4px 4px 4px 0px #00000040, -4px -4px 4px 0px #00000040",
      }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center w-full h-full p-8"
        style={{ pointerEvents: "none" }}
      >
        {isFront ? (
          <>
            <div className="bg-white w-48 h-40 p-2 flex items-center justify-center rounded-3xl mb-4">
              <img src={skull1} alt="front" className="h-36 object-contain" />
            </div>
            <p className="text-[21px] font-spartan font-medium text-center tracking-wide">
              Academy of Brain-Based Leadership – <br /> (Certified Facilitator)
            </p>
          </>
        ) : (
          <p className="text-[#0F1C80] font-spartan font-medium text-center text-[21px]">
            Academy of Brain-Based Leadership – <br /> Certified Facilitator
            (Back)
          </p>
        )}
      </div>
    </motion.div>
  );
}
