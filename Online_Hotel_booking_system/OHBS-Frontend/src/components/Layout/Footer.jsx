import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Online Hotel Booking Website developed in 2025, focused on providing a seamless and convenient booking experience for travelers.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/SignUp">Login/Signup</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/facebook.svg" alt="Facebook" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(200deg)", background: "#1877f2", borderRadius: "50%", width: "24px", height: "24px", marginRight: "8px", verticalAlign: "middle", padding: "2px" }} />
                Facebook
              </a>
              <a href="https://www.x.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/x.svg" alt="Twitter" style={{ filter: "invert(1) grayscale(1)", background: "#000", borderRadius: "50%", width: "24px", height: "24px", marginRight: "8px", verticalAlign: "middle", padding: "2px" }} />
                Twitter
              </a>
              <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/instagram.svg" alt="Instagram" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(320deg)", background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", borderRadius: "50%", width: "24px", height: "24px", marginRight: "8px", verticalAlign: "middle", padding: "2px" }} />
                Instagram
              </a>
              <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/linkedin.svg" alt="LinkedIn" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(180deg)", background: "#0a66c2", borderRadius: "50%", width: "24px", height: "24px", marginRight: "8px", verticalAlign: "middle", padding: "2px" }} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023-2025 Online Hotel Booking Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;