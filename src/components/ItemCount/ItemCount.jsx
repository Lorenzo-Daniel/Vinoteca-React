import React, { useState } from "react";

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [initial, setInitial] = useState(inicial);
    
    const decrement = () => {
        setInitial((prev)=> prev - 1);
    }

    const increment = () => {
        setInitial((prev)=> prev + 1);
        
    }

    return (
        <div className=" d-flex justify-content-center">
            <div>
                <div className="d-flex btn-group border rounded-3" >
                <button className="btn border-0" disabled={initial === inicial} onClick={decrement} >
                        <i className="fa-solid fa-minus text-white"></i>
                    </button>
                    <p className="text-white fs-4 mx-5 my-0">
                        {initial}
                    </p>
                    <button className="btn border-0" disabled={initial === stock} onClick={increment} >
                        <i className="fa-solid fa-add text-white"></i>
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary w-100 mt-2" onClick={()=>onAdd(initial)}>
                    Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;

