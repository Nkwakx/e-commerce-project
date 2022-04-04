import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useData } from './../../../../firebase/FirebaseDataHook';

export default function Training() {
    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const url = useLocation();

    useEffect(() => { loader() }, []);
    useEffect(() => { loader() }, [Products]);

    function loader() {
        let arr = []

        if (Products != null) {
            let baseMain = Products["fitness"]

            if (baseMain) {
                let dancCat = baseMain["training"];
                if (dancCat) {
                    arr = [...arr, ...Object.values(dancCat.products)];
                }
            }
        }
        setProduct(arr);
    }

    return (
        <>
            {
                product.map((entry, index) => {
                    return (
                        <NavLink to={`${url.pathname}/${entry.id}`} key={index}><div className="card" key={index}>
                            <div className="card__body">
                                <img src={entry.productImg} className="card__image" alt='' />
                                <p className="card__title">{entry.productName}</p>
                                <h3 className="card__description">{entry.productPrice}</h3>
                            </div>
                        </div>
                        </NavLink>
                    );
                })
            }
        </>
    )
}
