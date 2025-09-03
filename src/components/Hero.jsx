import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const slides = [
  {
    id: 1,
    text: (
      <>
        <span className="highlight">WE</span><span className="high">LOVE</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="null">what we</span> <b>DO</b>
      </>
    ),
    img: "10.png",
    bg: "#f6f3f0",
  },
  {
    id: 2,
    text: (
      <>
        <span className="highlight">AFFORDABLE</span>
        <span className="high">SOLUTIONS</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="null">for better</span>{" "}
        <b>LIVING</b>
      </>
    ),
    img: "6.png",
    bg: "#f2f2f2",
  },
  {
    id: 3,
    text: (
      <>
        <span className="highlight">TRANSFORMING</span>
        <span className="high">SPACES</span>
        <br />
        &nbsp;&nbsp;&nbsp;<span className="null">transforming</span>{" "}
        <b>LIVES</b>
      </>
    ),
    img: "5.png",
    bg: "#fdfdfd",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Config: typingDuration + pause
  const typingDuration = 3000; // ms (must match CSS animation-duration)
  const pause = 1000; // ms
  const slideInterval = typingDuration + pause;

  const showSlide = (i) => {
    setIndex((prev) => (i + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(index + 1);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="hero" style={{ background: slides[index].bg }}>
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} className="slide">
            <div className="slide-text">
              {/* ✅ Force re-run typing animation when index changes */}
              <h2 key={index}>
                <span className="typing">{slide.text}</span>
              </h2>
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
