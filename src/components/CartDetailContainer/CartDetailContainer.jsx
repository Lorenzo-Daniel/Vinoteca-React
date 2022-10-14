import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartConext";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import CartEmpty from "./CartEmpty";

const CartDetailContainer = () => {
    const { carrito, removeItem, precioTotal, clearAlert } = useCartContext();
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [precioFinal, setPrecioFinal] = useState();


    useEffect(() => {
        carrito.length > 0
            ? setProductosCarrito(carrito)
            : setProductosCarrito(false)
    }, [carrito])

    useEffect(() => {
        setPrecioFinal(precioTotal())
    }, [carrito])

    return (
        <div>
            {productosCarrito
                ? <div className='container d-flex flex-column mt-3 '>
                    <div className='d-flex justify-content-end'>
                        <button className="btn bg-danger border-0 fs-6 text-white" onClick={clearAlert}>
                            Vaciar carrito
                            <i className="fa-solid fa-trash ms-1 "></i>
                        </button>
                    </div>
                    <div className="">
                        <h2 className="text-center mt-3">
                            Productos en el Carrito
                        </h2>
                    </div>
                </div>
                : ''
            }
            <div className="d-flex flex-column justify-content-center">
                {productosCarrito
                    ? carrito.map(element =>
                        <CartDetail removeItem={removeItem} producto={element} key={element.id} />)
                    : <CartEmpty />
                }
            </div>
            {productosCarrito
                ? <div className="container d-flex flex-column align-items-end">
                    <p className="bg-light fs-3 rounded-2 p-3 mt-5">
                        Precio Total ${precioFinal}
                    </p>
                    <div>
                        <Link to={'/checkout'} className='btn btn-primary'>Terminar orden</Link>
                    </div>
                </div>
                : ''
            }
        </div>
    )
}

export default CartDetailContainer;