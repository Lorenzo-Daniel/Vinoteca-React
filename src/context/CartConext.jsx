import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const SwalFire = (texto) => {
    MySwal.fire({
        title: <p>Eliminaste
            <i className='mx-2'>
                {texto}
            </i>
            del carrito
        </p>,
        confirmButtonColor: '#84202a'
    })
}

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const producto = carrito.find(element => element.id === item.id);
            carrito[carrito.indexOf(producto)].cantidad += cantidad;
            setCarrito([...carrito])
        } else {
            setCarrito([...carrito, { ...item, cantidad: cantidad }])
        }
    }


    const removeItem = (item) => {
        let nuevo_array = carrito.filter(element => element.id !== item.id);
        let producto_eliminado = carrito.find(element => element.id === item.id)
        setCarrito(nuevo_array)
        SwalFire(`'${producto_eliminado.marca}'`);

    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (itemId) => {
        return carrito.some(elemento => elemento.id === itemId)
    }

    const TotalCarrito = () => {
        const suma = carrito.reduce((acc, item) => acc += item.cantidad, 0);
        return suma
    }

    const precioTotal = () => {
        const precio = carrito.reduce((acc, producto) => acc += (producto.precio * producto.cantidad), 0);
        return precio
    }


    return (
        <CartContext.Provider value={
            {
                addItem,
                removeItem,
                clear,
                TotalCarrito,
                precioTotal,
                carrito
            }
        }>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;