import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {
  return (
    <div className="card mb-5 shadow">
      <img src={"/images/" + item.img} className="card-img-top m-auto w-50" alt={item.nombre} />
      <div className="card-body">
        <p className="card-text">
          {item.marca}
        </p>
        <hr />
        <p className="card-text">
          {item.tipo}
        </p>
        <hr />
        <div>
          <p className="card-text">
            ${item.precio}
          </p>
          <Link to={`/item/${item.id}`} className='btn btn-primary '> Ver detalle</Link>
        </div>
      </div>
    </div>
  )

}

export default Item;