import React, {useState} from "react";
import Axios from "axios";
import {withRouter} from "react-router-dom"
import InputForm from "./../input";
import CardItems from "./../cardItems";

const Index = () => {
  const [items, setItems] = useState({ products: [] });

  const getProducts = (param,limit) => {
    if (param && limit) {
      Axios.get(`http://localhost:5000/ebay/find/${param}/${limit}`)
        .then(res => {
          setItems({ products: res.data.itemSummaries });
          console.log(param, limit);
        }).catch(error => { console.log(error); });
    }
  };

  const handleSubmit = (e, param, limit) => {
    e.preventDefault();
    getProducts(param, limit);
  };

  return (
    <div>
      <div className="container mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <InputForm submit={handleSubmit} />
      </div>
      <div className="container mt-2 mx-auto" style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <div className="card-columns">
          { items &&
            items.products.map((item, index) => (
              <CardItems
              key={index}
                image={item.image.imageUrl}
                title={item.title}
                price={item.price.value}
                currency = {item.price.currency}
                id = {item.itemId}
              />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default withRouter(Index);