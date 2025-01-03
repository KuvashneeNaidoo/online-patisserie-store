import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Products.css";
import easterCake from "../images/easter-cake.jpg";
import cinnamonRolls from "../images/cinnamon-rolls.jpg";
import redVelvet from "../images/red-velvet.jpg";
import blackBerrySponge from "../images/blackberry-sponge.jpg";
import lemonLoaf from "../images/lemon-loaf.jpg";
import marshmallowTreat from "../images/marshmallow-treat.jpg";
import cherryPie from "../images/cherry-pie.jpg";
import bundtCake from "../images/bundt-cake.jpg";
import cheeseCake from "../images/cheesecake.jpg";
import chocolateBrownies from "../images/chocolate-brownies.jpg";
import macarons from "../images/macarons.jpg";
import fonfettiCake from "../images/fonfetti-cake.jpg";

function Products() {
  return (
    <div className="products-page">
      <Hero />
      <div className="container">
        <h1 className="products-heading">Our Products</h1>
        <div className="products-grid">
          {/* Product 1 */}
          <Link
            to={`/product-description/easter-cake`}
            className="product-card"
          >
            <img src={easterCake} alt="Easter Cake" className="product-image" />
            <h3 className="product-title">Easter Cake</h3>
            <p className="product-description">
              Delicious chocolate cake made with the finest ingredients.
            </p>
          </Link>

          {/* Product 2 */}
          <Link
            to="/product-description/cinnamon-rolls"
            className="product-card"
          >
            <img
              src={cinnamonRolls}
              alt="Cinnamon Rolls"
              className="product-image"
            />
            <h3 className="product-title">Cinnamon Rolls</h3>
            <p className="product-description">
              Soft and fluffy cinnamon rolls drizzled with cream cheese icing.
            </p>
          </Link>

          {/* Product 3 */}
          <Link to="/product-description/red-velvet" className="product-card">
            <img
              src={redVelvet}
              alt="Red Velvet Cake"
              className="product-image"
            />
            <h3 className="product-title">Red Velvet Cake</h3>
            <p className="product-description">
              A delicious red velvet cake with a smooth cream cheese frosting.
            </p>
          </Link>

          {/* Product 4 */}
          <Link
            to="/product-description/blackberry-sponge"
            className="product-card"
          >
            <img
              src={blackBerrySponge}
              alt="Blackberry Sponge"
              className="product-image"
            />
            <h3 className="product-title">Blackberry Sponge</h3>
            <p className="product-description">
              Light and fluffy sponge cake topped with fresh blackberries.
            </p>
          </Link>

          {/* Product 5 */}
          <Link to="/product-description/lemon-loaf" className="product-card">
            <img src={lemonLoaf} alt="Lemon Loaf" className="product-image" />
            <h3 className="product-title">Lemon Loaf</h3>
            <p className="product-description">
              A zesty lemon loaf with a tangy glaze on top.
            </p>
          </Link>

          {/* Product 6 */}
          <Link
            to="/product-description/marshmallow-treat"
            className="product-card"
          >
            <img
              src={marshmallowTreat}
              alt="Marshmallow Treat"
              className="product-image"
            />
            <h3 className="product-title">Marshmallow Treat</h3>
            <p className="product-description">
              Sweet and gooey marshmallow treats with a crispy rice base.
            </p>
          </Link>

          {/* Product 7 */}
          <Link to="/product-description/cherry-pie" className="product-card">
            <img src={cherryPie} alt="Cherry Pie" className="product-image" />
            <h3 className="product-title">Cherry Pie</h3>
            <p className="product-description">
              A classic cherry pie with a golden, buttery crust.
            </p>
          </Link>

          {/* Product 8 */}
          <Link to="/product-description/bundt-cake" className="product-card">
            <img src={bundtCake} alt="Bundt Cake" className="product-image" />
            <h3 className="product-title">Bundt Cake</h3>
            <p className="product-description">
              A moist bundt cake topped with a delicious glaze.
            </p>
          </Link>

          {/* Product 9 */}
          <Link to="/product-description/cheesecake" className="product-card">
            <img src={cheeseCake} alt="Cheesecake" className="product-image" />
            <h3 className="product-title">Cheesecake</h3>
            <p className="product-description">
              A rich and creamy cheesecake with a buttery crust.
            </p>
          </Link>

          {/* Product 10 */}
          <Link
            to="/product-description/chocolate-brownies"
            className="product-card"
          >
            <img
              src={chocolateBrownies}
              alt="Chocolate Brownies"
              className="product-image"
            />
            <h3 className="product-title">Chocolate Brownies</h3>
            <p className="product-description">
              Decadent chocolate brownies with a fudgy center.
            </p>
          </Link>

          {/* Product 11 */}
          <Link to="/product-description/macarons" className="product-card">
            <img src={macarons} alt="Macarons" className="product-image" />
            <h3 className="product-title">Macarons</h3>
            <p className="product-description">
              Delicate almond meringue cookies filled with flavorful
              buttercream.
            </p>
          </Link>

          {/* Product 12 */}
          <Link
            to="/product-description/fonfetti-cake"
            className="product-card"
          >
            <img
              src={fonfettiCake}
              alt="Fonfetti Cake"
              className="product-image"
            />
            <h3 className="product-title">Fonfetti Cake</h3>
            <p className="product-description">
              Funfetti cake loaded with colorful sprinkles and topped with
              frosting.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
