import React from "react";

const CardItems = ({index, image, title, }) => {
  return (
    <div class="card" style={{ width: "300px", height:"300px" }}>
      <img src={image} style={{width: "100", height:"150px"}} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">{title}</p>
      </div>
    </div>
  );
};

export default CardItems;
