import React from "react";
import {Link} from "react-router-dom";

const CardItems = ({ index,id, image, title, price, currency }) => {
  return (
    <div className="card" style={{ width: "300px", height: "400px" }}>
      <img
        src={image}
        style={{ width: "100", height: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Price: {price} {currency}</h5>
        <p className="card-text">{title}</p>
        <Link to ={`/details/${id}`} className="btn btn-primary">Ver Detalles</Link>
      </div>
    </div>
  );
};

export default CardItems;
