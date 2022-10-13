import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Spinner from "../Spinner/Spinner";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    const { tipo } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const newCollection = collection(db, 'Vinoteca');
        const queryItems = tipo ? query(newCollection, where('tipo', '==', tipo)) : newCollection;
        getDocs(queryItems).then(res => {
                setProductos(res.docs.map(element => ({ id: element.id, ...element.data() })));
                setLoading(false)
            })
        }, [tipo])



        return (
            <div className="row justify-content-center ">
                <div className="col-md-8 mt-5">
                    {loading ?
                        <div className=" mt-5">
                            <Spinner />
                            <h1 className=" text-center s-1 mt-5">
                                Cargando...
                            </h1>
                        </div> :
                        <ItemList item={productos} tipo={tipo} />
                    }
                </div>
            </div>
        )
    };

    export default ItemListContainer;