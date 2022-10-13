import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartConext";


const ItemDetail = ({ item, clase }) => {
    const [visible, setVisible] = useState(clase);
    const [irAlCarrito, setCarrito] = useState(true);
    const { addItem } = useCartContext();

    const onAdd = (cantidad) => {
        setCarrito(false)
        addItem(item, cantidad)
    }

    useEffect(() => {
        setTimeout(() => {
            setVisible('')
        }, 1000);
    }, []);


    return (
        <div className={`${visible} container`}>
            <h1 className="text-center border mt-5 bg-dark text-white py-3">{item.marca}</h1>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                <div className=" pt-5">
                    <div className="card Ancho" >
                        <img src={"/images/" + item.img} className="animacion1 rounded-3" alt={item.marca} />
                    </div>
                </div>
                <div className="col-md-8 p-3 p-md-5 border rounded-2 mt-5 bg-dark text-white">
                    <h3>
                        Descripción:
                    </h3>
                    <p className="mb-5">
                        {item.descripcion}
                    </p>
                    <div className="d-flex justify-content-between">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>
                                    <b> Marca:</b> {item.marca}
                                </li>
                                <li>
                                    <b>Bodega:</b> {item.bodega}
                                </li>
                                <li>
                                    <b>Denominación:</b> {item.denominacion}
                                </li>
                                <li>
                                    <b>Tipo:</b> {item.tipo}
                                </li>
                                <li>
                                    <b>Añada:</b> {item.añada}
                                </li>
                                <li>
                                    <b> Grado: </b> {item.grado}
                                </li>
                                <li>
                                    <b>Variedad:</b> {item.variedad}
                                </li>
                                <li>
                                    <b>Precio: ${item.precio}</b>
                                </li>
                                <li>
                                    <div className="accordion mt-2" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                    aria-expanded="true" aria-controls="collapseOne">
                                                    Maridaje
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body d-flex p-3 justify-content-evenly align-items-center back_img_maridaje opacity-3">
                                                    <p className="m-0 p-3 bg-darky">
                                                        {item.maridaje}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button onClick={() => window.history.back()} className="btn btn-warning"><i className="fa-solid fa-arrow-left-long"></i><br />Volver</button>
                        </div>
                        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                            <h5 className="text-center">
                                {item.marca} | Cosecha: {item.añada}
                            </h5>
                            <p>
                                Precio : ${item.precio}
                            </p>
                            <div>
                                {irAlCarrito
                                    ? <ItemCount inicial={0} stock={10} onAdd={onAdd} />
                                    : <Link to='/cart' className="btn btn-success">
                                        Ir al carrito 
                                        <i className="fa-solid fa-shopping-cart ms-2"></i>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="my-5 py-1 bg-dark" />`;
        </div>
    )
}


export default ItemDetail;