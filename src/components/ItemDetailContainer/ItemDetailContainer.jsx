import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "../Spinner/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, 'Vinoteca', id);
        getDoc(response).then(res => {
            setItem(({ id: res.id, ...res.data() }));
            setLoading(false)
        })
    }, [id]);

    return (
        <div>
            {loading
                ? <Spinner />
                : <ItemDetail item={item} clase='visually-hidden' />
            }
        </div>
    )
}

export default ItemDetailContainer;