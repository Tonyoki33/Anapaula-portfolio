import React from "react";
import db from "../utils/CDN-db";
import CardDetail from "./CardDetail";

const Card = () => {
  return (
    <>
      {db.map((key) => {
        return <CardDetail name={key.name} img={key.img} />;
      })}
    </>
  );
};

export default Card;
