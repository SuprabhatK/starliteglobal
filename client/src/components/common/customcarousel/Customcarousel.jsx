// components/CustomCarousel.jsx
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Link} from 'react-router-dom';

import "./Customcarousel.scss"; // Optional for custom styles
import { slider1, slider2, slider3 } from "../../../assets";

const carouselData = [
  {
    image: slider1,
    title: "Global Shipping Made Easy",
    desc: "Efficient and secure international logistics services tailored for your needs.",
    buttonLink: "/about",
  },
  {
    image: slider2,
    title: "Trusted Worldwide",
    desc: "Connecting businesses globally with our trusted freight network.",
    buttonLink: "/about",
  },
  {
    image: slider3,
    title: "Your Freight. Our Priority.",
    desc: "Experience hassle-free trading with unmatched reliability and speed.",
    buttonLink: "/about",
  },
];

const Customcarousel = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    arrows: false, // Optional
    appendDots: dots => (
      <div style={{ bottom: "0px" }}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => <button className="custom-bar" />,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {carouselData.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="carousel-img" />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <Link to={slide.buttonLink} className="know-more-btn">Know More</Link>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Customcarousel;
