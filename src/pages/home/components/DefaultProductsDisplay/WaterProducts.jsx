import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useData } from './../../../../firebase/FirebaseDataHook';

export default function WaterProducts() {

    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const url = useLocation();

    useEffect(() => { loader(); }, [Products]);

    function loader() {
        console.log("Products Main Cat Fit", Products)
        let arr = []
        if (Products != null) {
            let baseMain = Products["watersport"];

            if (baseMain) {
                console.log("Yes", baseMain)
                Object.values(baseMain).forEach((subcat) => {
                    console.log("subcat", subcat?.products)
                    if (subcat && subcat.products) {
                        console.log("product array", Object.values(subcat.products))
                        arr = [...arr, ...Object.values(subcat.products)]
                    }
                })
            }
        }
        setProduct(arr);
    }

    return (
        <>
            {
                product.map((entry, index) => {
                    return (
                        <NavLink to={`${entry.subCategory}/${entry.id}`} key={index}><div className="card" key={index}>
                            <div className="card__body">
                                <img src={entry.productImg} className="card__image" alt='' />
                                <p className="card__title">{entry.productName}</p>
                                <h3 className="card__description">R {entry.productPrice}</h3>
                            </div>
                        </div></NavLink>
                    );
                })
            }
        </>
    )
}
