import React, { useEffect, useState } from "react";

export default function Tbody({ values }) {
  
  const [dataItem, setDataItem] = useState([]);

  console.log(dataItem);

  useEffect(() => {
    const updateDataTable = () => {
      setDataItem(values);
    }

    updateDataTable();
  },[values])

  return (
    <tbody>
      { dataItem && dataItem.map((item, index) => {
        return (
          <tr>
            <th scope="row">{index}</th>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
