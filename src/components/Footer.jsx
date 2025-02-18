import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Newsletter Subscription */}
          <div className="col-md-4 text-center">
            <h5>Join Our Newsletter</h5>
            <p>
              Sign up for our newsletter to stay updated on the latest
              irresistible specials. Be the first to know about all the exciting
              happenings at Sugar Lane!
            </p>
            <form action="#" method="post">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-light">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mr-3">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <br />
              <a href="https://instagram.com" className="text-white mr-3">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <br />
              <a href="https://youtube.com" className="text-white">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Find a Pâtisserie
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  T&Cs
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Returns & Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Brochure
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Price List
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Download Our App
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row mt-4">
          <div className="col text-center">
            <h5>Contact Us</h5>
            <p>
              Email:{" "}
              <a
                href="mailto:customercare@sugarlane.co.za"
                className="text-white"
              >
                customercare@sugarlane.co.za
              </a>
            </p>
            <p>
              Address: Sugar Lane Bakery, 1234 Sweet Tooth Avenue Pastryville,
              Cape Town, 4017
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2025 Sugar Lane. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
