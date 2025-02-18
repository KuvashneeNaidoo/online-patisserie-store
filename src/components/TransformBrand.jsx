import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import chocolateBrownie from "../images/chocolate-brownies.jpg";
import cheeseCake from "../images/cheesecake.jpg";

function TransformBrand() {
  const navigate = useNavigate();

  return (
    <>
      <section id="transform-your-desserts" className="two-column-section">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 text-content">
            <h2>Transform Your Dessert Experience</h2>
            <p>
              Indulge in a world of sweetness with our delightful creations.
              From classic favorites to innovative treats, our desserts are
              crafted to satisfy your cravings and leave you wanting more.
            </p>
            <button
              className="btn btn-dark"
              onClick={() => navigate("/products")}
            >
              Explore Desserts
            </button>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              src={cheeseCake}
              alt="Delicious Cheesecake"
              className="img-fluid rounded"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="standout-desserts" className="two-column-section">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <img
              src={chocolateBrownie}
              alt="Irresistible Chocolate Cake"
              className="img-fluid rounded"
              loading="lazy"
            />
          </div>
          <div className="col-md-6 col-sm-12 text-content">
            <h2>Stand Out with Every Bite</h2>
            <p>
              Delight your taste buds with our premium desserts, crafted from
              the finest ingredients. Share the joy with friends and family
              through our beautifully presented, delectable treats.
            </p>
            <button
              className="btn btn-dark"
              onClick={() => navigate("/products")}
            >
              Discover More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TransformBrand;
