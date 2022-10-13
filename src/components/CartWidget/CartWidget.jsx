import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartConext";

const CartWidget = () => {
    const { TotalCarrito } = useCartContext();

    return (
        <div className={`col-4 d-flex justify-content-end`} >
            <div className="ms-1">
                <Link to={'/cart'} type="button" className="btn position-relative me-3 border-0 shadow">
                    <i className="fa-solid fa-cart-shopping fs-4" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-black fs-3">
                        {TotalCarrito()}
                    </span>
                </Link>
            </div>
        </div>
    )
};

export default CartWidget;

