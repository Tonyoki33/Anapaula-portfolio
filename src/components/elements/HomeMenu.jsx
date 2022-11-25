import React from "react";
import MainCarousel from "./MainCarousel";

const HomeMenu = () => {
  return (
    <>
      <div className="txt-container">
        <h1 className="home-title">ANAPAULA MALACALZA</h1>
        <ul className="home-list">
          <li>
            About me
            <div className="img-two">
              <p style={{ fontSize: "1rem", fontWeight: "400" }}>
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
