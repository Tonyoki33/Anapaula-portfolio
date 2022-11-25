import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../media/icons8-instagram-viejo.svg";
import Linkedin from "../media/icons8-linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className="nav">
        <li
          style={{ padding: "10px", cursor: "pointer", listStyleType: "none" }}
        >
          <a
            style={{
              marginLeft: "10px",
              color: "white",
              textDecoration: "none",
            }}
            href={"https://www.instagram.com/ana_____pp/?next=%2F"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" style={{ width: "2rem" }} />
          </a>
          <Link
            style={{
              marginLeft: "10px",
              color: "white",
              textDecoration: "none",
            }}
            to={"/works"}
            relative="path"
          >
            <img src={Linkedin} alt="" style={{ width: "2rem" }} />
          </Link>
        </li>
      </div>
    </>
  );
};

export default Footer;
