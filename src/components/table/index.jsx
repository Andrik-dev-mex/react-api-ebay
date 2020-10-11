import React from "react";

export default function Table(props) {
  return(
    <table className="table table-sm text-center">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Characteristic</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
    {props.children}
</table>
  )
}