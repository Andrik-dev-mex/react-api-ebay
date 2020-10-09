import React, { useState } from "react";

const Input = ({submit}) => {
  const [query,setQuery] = useState('');

  const getQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  return (
    <form className="form-inline " onSubmit={(e)=>{submit(e,query)}}>
      <label htmlFor="get-query">Buscar:</label>
      <input
        type="text"
        name="query"
        id="query"
        className="form-control ml-sm-2"
        onChange={getQuery}
        value={query}
      />
      <button type="submit" className="btn btn-success ml-sm-2">Buscar</button>
    </form>
  );
};

export default Input;
