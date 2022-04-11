import React, { useEffect, useState } from 'react'
import { useData } from './../../../../firebase/FirebaseDataHook';
import { NavLink, useLocation } from 'react-router-dom';

export default function CombactSport() {
    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const url = useLocation();

    useEffect(() => { loader() }, []);
    useEffect(() => { loader() }, [Products]);

    function loader() {
        console.log("Dancing sub product ", Products);
        let arr = []

        if (Products != null) {
            let baseMain = Products["fitness"]

            if (baseMain) {
                console.log("Yes", baseMain)

                let dancCat = baseMain["combact-sport"];
                if (dancCat) {
                    console.log("Dancing here", dancCat.products);

                    arr = [...arr, ...Object.values(dancCat.products)]
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
                                <h3 className="card__description">R {entry.productPrice}</h3>
                            </div>
                        </div>
                        </NavLink>
                    );
                })
            }
        </>
    )
}
