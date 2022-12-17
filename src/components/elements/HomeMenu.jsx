import React from "react";
import db from "../utils/CDN-db";

const HomeMenu = () => {
  return (
    <>
      <div className="txt-container">
        <h1 className="home-title">ANAPAULA MALACALZA</h1>
        <ul className="home-list">
          <li>
            About me
            <div className="img-two">
              <img src={db[7].img} alt="" className="main-img" />
              <img src={db[6].img} alt="" className="main-img" />
              <p
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  position: "absolute",
                  left: "0.5rem",
                  top: "50%",
                  padding: "2rem 4rem",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                mollitia sequi corrupti ullam nam vero officiis quisquam, iste
                aliquid velit asperiores? Assumenda, minus laboriosam. Sit hic
                qui doloribus! Totam voluptatibus laborum quae accusamus
                reprehenderit aliquam at nihil nemo consequatur porro.
              </p>
            </div>
          </li>
          <li>
            Resume
            <div className="img-three"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeMenu;
