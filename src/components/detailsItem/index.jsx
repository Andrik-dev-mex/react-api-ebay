import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import Table from "./../table";
import Tbody from "../table/Tbody";

const DetailsItem = (props) => {
  const { id } = props.match.params;
  const [item, setItem] = useState({});
  const [image, setImage] = useState("");
  const [price, setPrice] = useState({});
  const [seller, setSeller] = useState({});
  const [location, setLocation] = useState({});
  const [shipping, setShipping] = useState([]);

  const setTypeShipping = () => {
    let type = "";
    shipping.forEach((item) => {
      if (item.type) {
        type = item.type;
      }
    });

    return type;
  };

  const setCodeShipping = () => {
    let code = "";
    shipping.forEach((item) => {
      if (item.shippingServiceCode) {
        code = item.shippingServiceCode;
      }
    });

    return code;
  };

  useEffect(() => {
    const getItem = (id) => {
      Axios.get(`http://localhost:5000/ebay/findItem/${id}`).then((res) => {
        setItem(res.data);
        setImage(res.data.image.imageUrl);
        setPrice(res.data.price);
        setSeller(res.data.seller);
        setLocation(res.data.itemLocation);
        setShipping(res.data.shippingOptions);
      });
    };

    getItem(id);
  }, [id]);

  console.log(item.localizedAspects);

  return (
    <div className="container rounded bg-light">
      <div className="row mt-2">
        <div className="col mt-2">
          <img
            src={image}
            alt=""
            className="ml-auto border rounded"
            style={{ width: "100%", height: "350px" }}
          />
        </div>
        <div className="col mt-2">
          <p className="h5 text-center">{item.title}</p>
          <p className="lead">Condition: {item.condition}</p>
          <p className="lead">Brand: {item.brand}</p>
          <p className="lead">Color: {item.color}</p>
          <p className="lead">Model: {item.mpn === undefined ? "N/A" : item.mpn}</p>
          <p className="lead">
            Price : {price.value} {price.currency}
          </p>
        </div>
        <div className="col mt-2">
          <p className="h5 text-center">Additional Information </p>
          <p className="lead">Seller Username: {seller.username}</p>
          <p className="lead">
            Location: {location.city}, {location.stateOrProvince}
            {location.country}
          </p>
          <p className="lead">Shipping: {setCodeShipping()}</p>
          <p className="lead">Type: {setTypeShipping()}</p>
          <button type="button" className="btn btn-success btn-block mt-auto">
            Buy Now!
          </button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <Table>
            {item &&<Tbody values={item.localizedAspects}></Tbody>}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DetailsItem);
