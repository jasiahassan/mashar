import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function StepsNew() {
  const steps = [
    {
      id: 1,
      title: "Assessment & Discovery",
      description: "Understand yourself and your team.",
      side: "left",
    },
    {
      id: 2,
      title: "Coaching & Facilitation",
      description: "Engage in culturally grounded, expert-led coaching.",
      side: "right",
    },
    {
      id: 3,
      title: "Learning Design",
      description:
        "Experience learning that's brain-friendly and action-focused.",
      side: "left",
    },
    {
      id: 4,
      title: "Reflection & Integration",
      description: "Connect insight to change through feedback and reflection.",
      side: "right",
    },
    {
      id: 5,
      title: "Sustainability & Impact",
      description:
        "Build lasting growth through systems, measurement, and support.",
      side: "left",
    },
  ];

  const [stepViews, setStepViews] = useState(
    new Array(steps.length).fill(false)
  );

  const firstSegmentTop = 112; // Calculated top of first circle from container top
  const distance = 218; // Distance between consecutive step starts (170 + 48)
  const segmentHeight = 218; // Full distance for overlap behind circles

  return (
    <div className="relative w-full max-w-5xl mx-auto py-16">
      {/* Progressive line segments */}
      {Array.from({ length: 4 }, (_, i) => {
        const isOrange = stepViews[i + 1];
        const topPx = firstSegmentTop + i * distance;
        return (
          <div
            key={`segment-${i}`}
            className={`absolute left-1/2 -translate-x-1/2 w-1 transition-colors duration-3000 ease-in-out ${
              isOrange ? "bg-orange-500" : "bg-gray-300"
            }`}
            style={{
              top: `${topPx}px`,
              height: `${segmentHeight}px`,
            }}
          />
        );
      })}

      {steps.map((step) => {
        const index = step.id - 1;
        const { ref, inView } = useInView({
          threshold: 0.5,
          triggerOnce: false,
        });

        useEffect(() => {
          setStepViews((prev) => {
            const newViews = [...prev];
            newViews[index] = inView;
            return newViews;
          });
        }, [inView, index]);

        const isLeft = step.side === "left";

        return (
          <div key={step.id} ref={ref} className="relative flex w-full mb-12">
            {/* Circle on the center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <div
                className={`w-16 h-16 flex text-[20px] items-center justify-center rounded-full font-medium shadow
                  transition-colors duration-1000 ease-in-out
                  ${
                    inView
                      ? "bg-orange-500 text-black"
                      : "bg-gray-300 text-black"
                  }
                `}
              >
                {step.id}
              </div>
            </div>

            {/* Left side (card) */}
            {isLeft && (
              <div className="w-1/2 flex justify-end pr-16">
                <StepCard step={step} inView={inView} isLeft />
              </div>
            )}

            {/* Right side empty */}
            {!isLeft && <div className="w-1/2"></div>}

            {/* Left side empty for right card */}
            {isLeft && <div className="w-1/2"></div>}

            {/* Right side (card) */}
            {!isLeft && (
              <div className="w-1/2 flex justify-start pl-16">
                <StepCard step={step} inView={inView} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function StepCard({ step, inView, isLeft }) {
  return (
    <div
      className={`shadow rounded-md px-10 py-10 relative w-full h-[155px]
    transition-colors duration-[3000ms] ease-in-out
    ${inView ? "bg-secondary text-black" : "bg-gray-200 text-black"}
  `}
    >
      {/* Arrow */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0
    border-y-[15px] border-y-transparent
    transition-colors duration-[3000ms] ease-in-out
    ${
      isLeft
        ? inView
          ? "border-l-[20px] border-l-secondary -right-5"
          : "border-l-[20px] border-l-gray-200 -right-5"
        : inView
        ? "border-r-[20px] border-r-secondary -left-5"
        : "border-r-[20px] border-r-gray-200 -left-5"
    }`}
      ></div>

      <h3 className="font-medium font-spartan text-[22px] mb-1 uppercase">
        {step.title}
      </h3>
      <p className="text-[17px] font-poppins">{step.description}</p>
    </div>
  );
}
