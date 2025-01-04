import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import chocolateCake from "../images/chocolate-cake.jpg";
import cheeseCake from "../images/cheesecake.jpg";

function TransformBrand() {
  const navigate = useNavigate();

  return (
    <>
      <section
        id="transform-your-desserts"
        className="two-column-section container-fluid"
      >
        <div className="row align-items-center">
          <div className="col-md-6" style={{ paddingRight: 0 }}>
            <h2>Transform Your Dessert Experience</h2>
            <p style={{ padding: "0 100px" }}>
              Indulge in a world of sweetness with our delightful creations.
              From classic favorites to innovative treats, our desserts are
              crafted to satisfy your cravings and leave you wanting more.
            </p>
            <button
              className="btn btn-dark"
              style={{ margin: "0 300px" }}
              onClick={() => navigate("/products")}
            >
              Explore Desserts
            </button>
          </div>
          <div className="col-md-6" style={{ paddingRight: 0 }}>
            <img
              src={cheeseCake}
              alt="Delicious Cheesecake"
              className="img-fluid rounded"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="standout-desserts"
        className="two-column-section container-fluid"
      >
        <div className="row align-items-center">
          <div className="col-md-6" style={{ paddingRight: 0 }}>
            <img
              src={chocolateCake}
              alt="Irresistible Chocolate Cake"
              className="img-fluid rounded"
              loading="lazy"
            />
          </div>
          <div className="col-md-6" style={{ paddingLeft: 0 }}>
            <h2>Stand Out with Every Bite</h2>
            <p style={{ padding: "0 100px" }}>
              Delight your taste buds with our premium desserts, crafted from
              the finest ingredients. Share the joy with friends and family
              through our beautifully presented, delectable treats.
            </p>
            <button
              className="btn btn-dark"
              style={{ margin: "0 300px" }}
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
