import React from "react";
import Item from "./Item";

const ItemList = ({ item, tipo }) => {
  return (
    <div className="row m-0">
      <h1 className="tangerine text-center brand-style mb-3">
        {tipo}
      </h1>
      {item.map((item) =>
        <div className="col-md-6 col-lg-4 m-auto d-flex justify-content-center" key={item.id}>
          <Item item={item} />
        </div>
      )}
    </div>
  )
}

export default ItemList;