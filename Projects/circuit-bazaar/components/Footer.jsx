import React from "react";
import { AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2024 - Present CircuitBazaar. All Rights Reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
        <FaSquareXTwitter />
      </p>
    </div>
  );
};

export default Footer;
