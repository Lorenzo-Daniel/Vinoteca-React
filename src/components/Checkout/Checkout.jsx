import React from "react";
import { useCartContext } from "../../context/CartConext";
import { useState, useEffect } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
const SwalFire = (texto) => {
    MySwal.fire({
        title: <p> {texto} </p>,
        confirmButtonColor: '#84202a'
    })
}


const Checkout = () => {
    const { carrito, clear, precioTotal } = useCartContext();
    const [precioFinal, setPrecioFinal] = useState();
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [apellido, setApellido] = useState('')
    const [orderId, setOrderId] = useState([]);


    useEffect(() => {
        setPrecioFinal(precioTotal())
    }, [carrito])


    const sendOrder = () => {
        if (nombre === '') {
            SwalFire('  Debes Ingresar un dato en el campo Nombre')
            return false;
        } else if (apellido === '') {
            SwalFire('  Debes Ingresar un dato en el campo Apellido')
            return false;
        } else if (email === '') {
            SwalFire(' Debes Ingresar un dato en el campo email')
            return false;
        } else if (confirmEmail === '') {
            SwalFire(' Debes Ingresar un dato en el campo Confirmar email')
            return false
        } else if (confirmEmail !== email) {
            SwalFire('La direccion email no coincide')
        } else {

            const client = {
                name: nombre,
                apellido: apellido,
                email: email,
            };

            const items = [];

            carrito.forEach(element => {
                items.push({
                    id: element.id,
                    title: element.marca,
                    price: element.precio,
                    cantidad: element.cantidad
                });
            });

            const order = {
                client: client,
                items: items,
                fecha: Date()
            };

            const db = getFirestore();
            const newColl = collection(db, 'ordenes');
            addDoc(newColl, order).then(res => setOrderId(res.id));
            clear();
        }
    }


    return (
        <div>
            <div className="container d-flex flex-column mt-5">
                <form action="" className="col-12 col-md-10 col-lg-6 m-auto mb-4 shadow p-3 rounded" onSubmit={(e) => e.preventDefault()}>
                    <p>Ingresa tus datos:</p>
                    <div className="mb-3">
                        <label className="form-label"> Nombre</label>
                        <input type="text" className="form-control" placeholder="Ingresá tu Nombre" onInput={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" placeholder="Ingresá tu Apellido" onInput={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">email</label>
                        <input type="email" className="form-control" placeholder="Ingresá tu email" onInput={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">confirmar email</label>
                        <input type="email" className="form-control" placeholder="Ingresá tu email" onInput={(e) => setConfirmEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={sendOrder}>
                        Finalizar
                    </button>
                </form>
                <div className="col ">
                    <h4 className="text-center">Productos seleccionados</h4>
                    <div>
                        {carrito.map((item) => {
                            return <div key={item.id} className='col-10  m-auto mt-4'>
                                <div className="d-flex justify-content-between align-items-end">
                                    <div>
                                        <img src={'/images/' + item.img} alt={item.marca} width={80} />
                                    </div>
                                    <div className="d-flex flex-column flex-md-row col-md-8 justify-content-evenly align-items-start">
                                        <p className="m-0">
                                            Precio: ${item.precio}
                                        </p>
                                        <p className="m-0">
                                            cant. {item.cantidad}
                                        </p>
                                        <p className="m-0">
                                            # {item.marca}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        })
                        }
                    </div>
                    {carrito.length > 0
                        ? <div className="d-flex justify-content-end">
                            <div className="col-4 ">
                                <p className="bg-light text-center fs-3 rounded-2 p-3 mt-5">
                                    Precio Total ${precioFinal}
                                </p>
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div>
            {
                orderId.length < 1
                    ? ''
                    : <div className="d-flex flex-column align-items-center bg-success p-3 mx-2 col-md-5 rounded-3 m-md-auto text-white">
                        <p className="m-0">
                            Tu orden de compra es : {orderId}
                        </p>
                        <p className="m-0">
                            Gracias por Tu compra!
                        </p>
                    </div>
            }
        </div>
    )
}

export default Checkout;
