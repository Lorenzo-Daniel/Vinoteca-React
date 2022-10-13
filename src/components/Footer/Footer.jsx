import React from "react";
import logo from '../../logo-copa.png'

const Footer = () => {
    return (
        <footer className="pb-1 pt-5 background_header   mt-5 text-white">
            <div className="container">
                <div className="row m-0 background_header rounded-3 mb-4 py-4 px-5">
                    <div className="col-lg-4 d-flex flex-column justify-content-center ">
                        <div className="d-flex justify-content-center align-items-end">
                            <img src={logo} width="70" className="" alt="" />
                            <p className="fs-6 mb-2 ">Visita nuestras redes sociales</p>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <nav className="nav d-flex justify-content-center rounded-3  bg-dark opacity-75  ">
                                <a className="nav-link m-0" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-facebook-f fs-6 text-white border border-white rounded p-2"></i>
                                </a>
                                <a className="nav-link m-0" href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-twitter fs-6 text-white border border-white rounded p-2"></i>
                                </a>
                                <a className="nav-link m-0" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >
                                    <i className="fab fa-instagram fs-6 text-white border rounded border-white p-2"></i>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="col-8 col-md-5 col-lg-3 m-auto d-none d-md-block">
                        <h4 className="mb-2 text-center">
                            Horarios de Tienda
                        </h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between">
                                <span className="text-center">
                                    Lunes
                                </span>
                                <span>
                                    9:00 - 24:00
                                </span>
                            </li>
                            <hr className="m-0" />
                            <li className="d-flex justify-content-between">
                                <span className="text-left">
                                    Martes
                                </span>
                                <span>
                                    9:00 - 24:00
                                </span>
                            </li>
                            <hr className="m-0" />
                            <li className="d-flex justify-content-between">
                                <span>
                                    Mirecoles
                                </span>
                                <span>
                                    9:00 - 24:00
                                </span>
                            </li>
                            <hr className="m-0" />
                            <li className="d-flex justify-content-between">
                                <span>
                                    Jueves
                                </span>
                                <span>
                                    9:00 - 24:00
                                </span>
                            </li>
                            <hr className="m-0" />
                            <li className="d-flex justify-content-between">
                                <span>
                                    Viernes
                                </span>
                                <span>
                                    9:00 - 02:00
                                </span>
                            </li>
                            <hr className="m-0" />
                            <li className="d-flex justify-content-between">
                                <span>
                                    Sabado
                                </span>
                                <span>
                                    9:00 - 02:00
                                </span>
                            </li>
                            <hr className="m-0" />
                            <li className="d-flex justify-content-between">
                                <span>
                                    Domingo
                                </span>
                                <span>
                                    Cerrado
                                </span>
                            </li>
                            <hr className="m-0" />
                        </ul>
                    </div>
                    <div className="d-flex flex-column col-lg-2 align-items-center justify-content-center">
                        <a href="https://www.google.com/maps/place/Vinoteca+%7C+Vinos+de+Espa%C3%B1a+(Lugar+Ficticio)/@-34.9105701,-56.1668795,19z/data=!4m5!3m4!1s0x959f8158fb74b68d:0xe8793b9947c391e2!8m2!3d-34.9105712!4d-56.1663323"
                            className="my-3 " target="_blank" rel="noopener noreferrer" >
                            <i className="fa-solid fa-location-dot text-success fs-1"></i>
                        </a>
                        <h4 className="d-none d-lg-block text-center lh-2">Ubicacion Tienda</h4>
                    </div>
                </div>
            </div>
            <div className=" d-flex align-items-center background_header">
                <p className="m-auto text-center mt-2 mb-0 ">
                    Copyright 2022. All Right Reserved. Design and Develop by
                    <i className="ms-1">Daniel Lorenzo</i>
                </p>
            </div>
        </footer>
    )
}

export default Footer;