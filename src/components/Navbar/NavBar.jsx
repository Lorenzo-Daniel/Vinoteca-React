import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-copa.png';
import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <header className="shadow-sm sticky-top bg-light">
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <div className="col-1">
                        <Link to={'/'} className="p-3 " href="./index.html" id="btnLogo">
                            <img src={logo} width="80" alt="logo" />
                        </Link>
                    </div>
                    <h1 className="m-auto tangerine mt-3">
                        Vinoteca
                    </h1>
                    <div className='col-1'>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default NavBar