
import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../assets/FooterLogoo.png"; // change path if needed

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="section-container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <div className="footer-logo-wrap">
              <img src={footerLogo} alt="Nature’s Nourish" className="footer-logo-img" />
            </div>

            <p className="footer-tagline">
              Premium natural hair oils crafted with love and care for your hair’s health.
            </p>
          </div>

        
          {/* QUICK LINKS */}
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/products">Shop All</Link></li>   {/* ✅ working */}
              <li><Link to="/about">About Us</Link></li>      {/* ✅ working */}
              <li><span>Ingredients</span></li>               {/* ⏳ later */}
              <li><span>FAQs</span></li>                      {/* ⏳ later */}
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div className="footer-links">
            <h4 className="footer-heading">Customer Care</h4>
            <ul>
              <li><span>Shipping Info</span></li>             {/* ⏳ later */}
              <li><span>Returns</span></li>                   {/* ⏳ later */}
              <li><Link to="/contact">Contact Us</Link></li>  {/* ✅ working */}
              <li><span>Track Order</span></li>               {/* ⏳ later */}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-social">
            <h4 className="footer-heading">Follow Us</h4>

            <div className="social-icons">

              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2026 Nature’s Nourish Hair Oils. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;