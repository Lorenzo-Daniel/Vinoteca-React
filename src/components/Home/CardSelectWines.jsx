import React from "react";
import { Link } from "react-router-dom";

const categorias = [{ tipo: 'Blanco', id: 1, img: 'viñedo5.jpg' }, { tipo: 'Cava', id: 2, img: 'viñedo6.jpg' }, { tipo: 'Tinto', id: 3, img: 'viñedo7.jpg' }];

const CardSelectWines = () => {
    return (
        <div className="border m-2 p-3">
            <div className="d-flex flex-column align-items-center my-5 fs-2">
                <p className="text-center">¡Te damos la Bienvenida a Vinoteca | Vinos de España !  </p>
                <p className="text-center">En nuestra Vinoteca encontrarás amplia variedad de vinos Españoles! </p>
                <p className="text-center">Cada Producto tiene su descripción detallada, para que encuentres lo que estás buscando!</p>
            </div>
            <div className="container d-flex flex-column flex-md-row border mb-5 p-3 shadow-sm">
                {categorias.map((product) => {
                    return <div className="card col-md-3 col-10 m-auto mb-2" key={product.id}>
                        <Link to={'/category/' + product.tipo} className='btn btn-light'>
                            <img src={/images/ + product.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="text-center tangerine"> {product.tipo}</h5>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CardSelectWines;