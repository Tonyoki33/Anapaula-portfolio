import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <li
          style={{ padding: "10px", cursor: "pointer", listStyleType: "none" }}
        >
          <Link
            style={{
              marginLeft: "10px",
              color: "white",
              textDecoration: "none",
            }}
            to={"/Anapaula-portfolio"}
            relative="path"
          >
            Home
          </Link>
          <Link
            style={{
              marginLeft: "10px",
              color: "white",
              textDecoration: "none",
            }}
            to={"/works"}
            relative="path"
          >
            Works
          </Link>
        </li>
      </div>
    </>
  );
};

export default Nav;
