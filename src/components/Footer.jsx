import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <p>Copyright © 2025 Canvas HTML Template. All Rights Reserved.</p>
      </div>

      {/* Right Section */}
      <div className="footer-right">

    
        <img src="fb.png" alt="Facebook" />
        <img src="insta.png" alt="Twitter" />
        <img src="link.png" alt="Instagram" />
        <img src="x.png" alt="Dribbble" />
        <img src="youtube.png" alt="Pinterest" />
      </div>
    </footer>
  );
};

export default Footer;
