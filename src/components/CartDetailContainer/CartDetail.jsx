import React from "react";

const CartDetail = ({ removeItem, producto }) => {
    return (
        <div className="d-flex flex-column align-items-center  justify-content-evenly  gap-3 mt-5 mx-2 col-md-10 m-md-auto flex-md-row align-items-md-end mt-md-5 border p-2" >
            <div className="col-1 d-flex justify-content-center">
                <img src={'/images/' + producto.img} alt="" width='80' />
            </div>
            <ul className="d-flex flex-column flex-md-row justify-content-md-evenly m-0 list-unstyled col-10  align-items-center">
                <li>
                    <b>
                        Marca:
                    </b> {producto.marca}
                </li>
                <li>
                    <b>
                        Tipo:
                    </b>
                    {producto.tipo}
                </li>
                <li>
                    <b>
                        Precio ud:
                    </b>
                    ${producto.precio}
                </li>
                <li>
                    <b>
                        precio {producto.cantidad} ud : 
                    </b>
                     $ {producto.precio * producto.cantidad}
                </li>
            </ul>
            <div className="col-1 d-flex justify-content-center">
                <button className="btn bg-danger text-white" onClick={() => removeItem(producto)}>
                    <i className="fa-solid fa-trash fs-2"></i>
                </button>
            </div>
            <hr />
        </div>
    )
}
export default CartDetail;