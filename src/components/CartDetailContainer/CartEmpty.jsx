import React from "react";
import { Link } from 'react-router-dom'

const CartEmpty = () => {
    return (
        <div className="container d-flex flex-column justify-content-between mt-5 p-5 rounded back_img_cart ">
            <div>
                <h1 className="text-white text-center">El carrito esta vacío</h1>
            </div>
            <div className="d-flex align-items-center align-self-end ">
                <Link to={'/'} className='btn shadow '>
                    <i className="fa-solid fa-arrow-left fs-3 me-2 text-white"></i>
                    <span className="text-white fs-3">Volver</span>
                </Link>
            </div>
        </div>
    )
}
export default CartEmpty;