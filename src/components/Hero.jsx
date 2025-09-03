import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const slides = [
  {
    id: 1,
    text: (
      <>
        <span className="highlight">WE</span> LOVE <br /> what we <b>DO</b>
      </>
    ),
    img: "/10.png",
    bg: "#f6f3f0",
  },
  {
    id: 2,
    text: (
      <>
        <span className="highlight">AFFORDABLE</span> SOLUTIONS <br /> for
        better <b>LIVING</b>
      </>
    ),
    img: "/6.png",
    bg: "#f2f2f2",
  },
  {
    id: 3,
    text: (
      <>
        <span className="highlight">TRANSFORMING</span> SPACES <br />{" "}
        transforming <b>LIVES</b>
      </>
    ),
    img: "/5.png",
    bg: "#fdfdfd",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const showSlide = (i) => {
    setIndex((prev) => (i + slides.length) % slides.length);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(index + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="hero" style={{ background: slides[index].bg }}>
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide-text">
              <h2>{slide.text}</h2>
            </div>
            <div className="slide-img">
              <img src={slide.img} alt="slide" />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows bottom-left */}
      <div className="arrows">
        <button className="arrow left" onClick={() => showSlide(index - 1)}>
          &lt;
        </button>
        <button className="arrow right" onClick={() => showSlide(index + 1)}>
          &gt;
        </button>
      </div>
    </div>
  );
}
