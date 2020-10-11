import React, { useState } from "react";

const Input = ({ submit }) => {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(10);

  const getQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const getLimit = (e) => {
    setLimit(e.target.value);
    console.log(limit);
  };

  const protectInput = () => {
    if (query.length > 0) {
      return false;
    } else {
      return true;
    }
  };
  
  return (
    <form
      className="form-inline "
      onSubmit={(e) => {
        submit(e, query, limit);
      }}
    >
      <label htmlFor="query">Product or keyword:</label>
      <input
        type="text"
        name="query"
        id="query"
        placeholder={"Find a product"}
        className="form-control ml-sm-2"
        onChange={getQuery}
        value={query}
      />
      <button
        type="submit"
        className="btn btn-success ml-sm-2 mr-sm-2"
        disabled={protectInput()}
      >
        Search
      </button>
      <label htmlFor="limit">Max. Products</label>
      <input
        type="number"
        name="limit"
        className="form-control ml-sm-2"
        style={{ width: "60px" }}
        onChange={getLimit}
        value={limit}
        max={50}
        min={1}
      />
    </form>
  );
};

export default Input;
