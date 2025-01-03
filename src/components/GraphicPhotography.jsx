import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import coffee from "../images/coffee.jpg";
import volcanoCake from "../images/volcano-cake.jpg";

function GraphicPhotography() {
  const navigate = useNavigate();

  // Navigate to products page when a button is clicked
  const handleNavigation = () => {
    navigate("/products");
  };

  return (
    <section
      id="dessert-visuals"
      className="two-column-section container-fluid"
    >
      <div className="row align-items-center">
        {/* Left column */}
        <div className="col-md-6" style={{ paddingRight: 0 }}>
          <div className="image-container">
            <img
              src={volcanoCake}
              alt="Volcano Cake"
              className="img-fluid rounded"
            />
            <div className="text-overlay">
              <h2>Decadent Designs</h2>
              <p>
                Our desserts are crafted to not only taste incredible but also
                look stunning. Perfect for any occasion, they leave a lasting
                impression on both eyes and taste buds.
              </p>
              <button className="btn btn-dark" onClick={handleNavigation}>
                Explore Treats
              </button>
            </div>
          </div>
        </div>

        {/* Right column: */}
        <div className="col-md-6" style={{ paddingLeft: 0 }}>
          <div className="image-container">
            <img
              src={coffee}
              alt="Coffee and Dessert"
              className="img-fluid rounded"
            />
            <div className="text-overlay">
              <h2>Perfect Pairings</h2>
              <p>
                Pair our desserts with the perfect cup of coffee. Every bite and
                sip are designed to complement and elevate your experience.
              </p>
              <button className="btn btn-dark" onClick={handleNavigation}>
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GraphicPhotography;
