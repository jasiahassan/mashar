import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const testimonials = [
  {
    id: 1,
    text: " 1.  Mashar’s coaching helped me reconnect with my purpose and lead my team with clarity and confidence. Their understanding of our culture made all the difference.",
    author: "HR Director, Regional Telecom Provider",
  },
  {
    id: 2,
    text: " 2. As our industry evolves rapidly, Mashar’s leadership development program gave our managers the clarity, resilience, and cultural agility they need to lead with confidence. It was practical, insightful, and deeply relevant to our challenges.",
    author: " Head of Risk, Leading Bank in Kuwait",
  },
  {
    id: 3,
    text: " 3. Mashar’s coaching helped me sharpen my decision-making and align my leadership style with our organizational culture.”",
    author: "HR Director, Regional Telecom Provider",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    arrows: false,
    pauseOnHover: false,
    focusOnSelect: true,
  };

  return (
    <div className="testimonial-slider w-full  mx-auto">
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="px-4">
            <div className="testimonial-card  rounded-2xl text-center px-10   flex flex-col items-center justify-center">
              {/* Quotation Icon */}
              <div className=" mb-12">
                {" "}
                <img src="src\assets\inverted-coma.svg" className="w-12" />{" "}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 text-white  leading-relaxed max-w-md font-normal font-poppins text-[12px] tracking-[0.9px] ">
                {item.text}
              </p>

              {/* Author */}
              <h4 className="font-normal font-poppins text-[12px] text-white tracking-[0.9px] mt-7">
                {item.author}
              </h4>

              {/* Avatar (optional) */}
              <div className="mt-4 w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={`https://i.pravatar.cc/150?u=${item.id}`}
                  alt={item.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
