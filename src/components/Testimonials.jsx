import React from "react";
import "./styles.css";
import imageEmily from "../images/image-emily.jpg";
import imageJennie from "../images/image-jennie.jpg";
import imageThomas from "../images/image-thomas.jpg";

function Testimonials() {
  return (
    <section id="testimonials" className="py-5">
      <h3 className="text-center">What Our Customers Say</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={imageEmily}
              alt="Emily"
              className="img-fluid rounded"
              loading="lazy"
            />
            <p>
              "Sugar Lane’s desserts are simply the best! Every bite is a burst
              of flavor. My guests were raving about the treats at my party." -
              Emily R.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={imageJennie}
              alt="Jennie"
              className="img-fluid rounded"
              loading="lazy"
            />
            <p>
              "I couldn’t be happier with Sugar Lane. The attention to detail
              and the taste of their desserts are unmatched. Truly a delightful
              experience!" - Jennie F.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={imageThomas}
              alt="Thomas"
              className="img-fluid rounded"
              loading="lazy"
            />
            <p>
              "Sugar Lane exceeded my expectations! Their desserts were the
              highlight of our event, and the presentation was stunning." -
              Thomas S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
