import React from "react";
const CardDetail = (key) => {
  const { name, img } = key;

  return (
    <>
      <a href={img} className="card" target="_blank">
        <p>{name}</p>

        <img src={img} alt="" className="card-img" />
      </a>
    </>
  );
};

export default CardDetail;
