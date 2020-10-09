import Axios from 'axios';
import React, { useState } from 'react';
import Nav from './layout/Nav';
import InputForm from "./components/input";
import CardItems from './components/cardItems';

function App() {

  const [items, setItems] = useState({ products: [] });

  const getProducts = (query) => {
    if (query) {
      Axios.get(`http://localhost:5000/ebay/find/${query}`)
        .then(res => {
          setItems({ products: res.data.itemSummaries });
          console.log(items);
        }).catch(error => { console.log(error); });
    }
  };

  const handleSubmit = (e,query) => { 
    e.preventDefault();
    getProducts(query);
  };

  return (
    <div>
      <Nav />
      <div className="container mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <InputForm submit={handleSubmit}></InputForm>
      </div>
      <div className="container mt-2" style={{ display: "flex",alignItems: 'center', justifyContent: 'center'}}>
        <div className="card-columns">
          {
            items.products.map((item, index )=> (
              <CardItems
                image={item.image.imageUrl}
                title = {item.title}
                price = {item.price}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
