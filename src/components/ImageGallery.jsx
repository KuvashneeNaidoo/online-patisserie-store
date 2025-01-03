import React from "react";
import "./imageGallery.css";
import basqueCheesecake from "../images/basque-cheesecake.jpg";
import birthdayOreoCake from "../images/birthday-oreo-cake.jpg";
import chocolateCrumbCake from "../images/chocolate-crumb-cake.jpg";
import chocolateDripCake from "../images/chocolate-drip-cake.jpg";

const images = [
  basqueCheesecake,
  birthdayOreoCake,
  chocolateCrumbCake,
  chocolateDripCake,
];

function ImageGallery() {
  const imageElements = [...images, ...images]; // Repeat display of images

  return (
    <section id="image-gallery" className="py-5">
      <div className="container-fluid px-0">
        <div className="gallery-wrapper">
          <div className="d-flex gallery-scroll">
            {imageElements.map((src, index) => (
              <div key={index} className="col-3">
                <img
                  src={src}
                  alt={`Cake ${index}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
