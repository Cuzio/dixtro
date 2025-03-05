import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import logo from "../images/DIXTRO-LOGO.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>
            <i>
              When you’re moving from your old house to a new location, there
              are thousands of things to betaken care of. We’ll be your
              assistants, helping you move all your belongings fast wherever you
              wish.
            </i>
          </p>
          <div className="footer-socials">
            <a href="" className="social">
              <FaInstagram />
            </a>
            <a href="" className="social">
              <CiTwitter />
            </a>
            <a href="" className="social">
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li className="">
              <a
                className=""
                aria-current="page"
                href="/"
                // onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li className="">
              <a className="" href="/about">
                About Us
              </a>
            </li>
            <li className="">
              <a className="" href="">
                Services
              </a>
            </li>
            <li className="">
              <a className="" href="" target="_blank">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li className="">
              <a className="" aria-current="page" href="/">
                Trucking & Haulage
              </a>
            </li>
            <li className="">
              <a className="" href="">
                Relocation & Logistics
              </a>
            </li>
            <li className="">
              <a className="" href="">
                Car rental
              </a>
            </li>
            <li className="">
              <a className="" href="" target="_blank">
                Courier services
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact us</h3>
          <ul>
            <li className="">
              <a className="" aria-current="page" href="/">
                Liberation Road, NG
              </a>
            </li>
            <li className="">
              <a className="" href="">
                +234 123 0089 456
              </a>
            </li>
            <li className="">
              <a className="" href="">
                info@dixtro.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
