import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/Frame 1.svg";
import logo2 from "../assets/Frame 2.svg";
import logo3 from "../assets/Frame 1000002345 1 (1).svg";
import logo4 from "../assets/Frame 1000002345 1.svg";

import logo5 from "../assets/Frame 1000002349.svg";
import logo6 from "../assets/Frame 1000002347.svg";
import logo7 from "../assets/gulf-bank-logo-EC3E102E69-seeklogo.com 1.svg";

export default function LeadersSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="">
      <div className="logo-slider">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-36 object-contain transition"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
