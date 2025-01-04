import React from "react";
import "./styles.css";
import chocolateCake from "../images/chocolate-cake.jpg";

function Hero() {
  return (
    <section id="about" className="hero d-flex align-items-center">
      <img
        src={chocolateCake}
        alt="Hero Image"
        loading="lazy"
        className="hero-image"
      />
      <div className="hero-content text-center text-white">
        <h1>Our Desserts</h1>
      </div>
    </section>
  );
}

export default Hero;
