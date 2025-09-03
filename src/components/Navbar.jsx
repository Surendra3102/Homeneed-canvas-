import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">canvas</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["Home", "About", "Features", "Blog", "Portfolio", "Shop", "Contacts"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </a>
          </li>
        ))}
        <div className="cart">🛒 $120.00 (1 item)</div>
      </ul>
    </nav>
  );
};

export default Navbar;
