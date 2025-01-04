import React from "react";
import "./styles.css";
import chocolateCake from "../images/choc-sponge-cake.jpg";

function Hero() {
  return (
    <section id="about" className="hero d-flex align-items-center">
      <img
        src={chocolateCake}
        alt="Hero Image"
        loading="lazy"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
