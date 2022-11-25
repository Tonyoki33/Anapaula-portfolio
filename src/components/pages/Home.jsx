import React from "react";

import DynamicImgs from "../elements/DynamicImgs";
import HomeMenu from "../elements/HomeMenu";

const Home = () => {
  return (
    <>
      <div className="main-background">
        <HomeMenu />
        <DynamicImgs />
      </div>
    </>
  );
};

export default Home;
