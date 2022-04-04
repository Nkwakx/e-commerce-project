import React, { useState, useEffect } from 'react'
import { useData } from '../../../../firebase/FirebaseDataHook';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ProductDetails from '../Views/ProductDetails';


export default function Dancing() {

    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const url = useLocation();

    //const navigate = useNavigate();
    // const handleSubmit = () => {
    //     //let nav = navigate(("/fitness/dancing/:id"), { replace: true });
    //     //let nav = navigate(url.pathname.split("/")[2], { replace: true });

    //     //console.log("Params test", nav)
    // }


    useEffect(() => { loader() }, []);
    useEffect(() => { loader() }, [Products]);

    function loader() {
        console.log("Dancing sub product ", Products);
        let arr = []

        if (Products != null) {
            let baseMain = Products["fitness"]

            if (baseMain) {
                console.log("Yes", baseMain)

                let dancCat = baseMain["dancing"];
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
            {/* <button onClick={handleSubmit}>Test</button> */}
            {
                product.map((entry, index) => {
                    return (
                        <NavLink to={`${url.pathname}/${entry.id}`} key={index}>

                            <div className="card" key={index}>
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
