import React, { useEffect, useState } from 'react'
import NavBar from '../../../components/navigation/NavBar';
import { useData } from '../../../firebase/FirebaseDataHook';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesObj } from './../../../routers/AllRoutes';
import { useAuth } from '../../../firebase/FirebaseAuthHook';
import Routing from '../../../routers/Routing';

export default function ProductDetails(props) {

    const { increment = 1, decrement = 1 } = props;

    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const { AddProductToCart, CurrentUser } = useAuth();
    const url = useLocation();
    const nav = useNavigate();

    const [count, setCount] = useState(1);

    useEffect(() => { loaderr() }, [Products]);

    useEffect(() => { }, [CurrentUser]);
    useEffect(() => { }, [product]);


    function loaderr() {
        console.log("Getting products ", Products);

        let pathSpilt = url.pathname.split("/") // gives an array
        let cat = pathSpilt[pathSpilt.length - 3]
        let sub = pathSpilt[pathSpilt.length - 2]
        let id = pathSpilt[pathSpilt.length - 1]

        console.log("URL", url.pathname, cat, sub, id) //"/:cat/:subcat/:product"

        if (Products != null) {
            if (Products[cat]) {
                if (Products[cat][sub]) {
                    if (Products[cat][sub].products) {
                        if (Products[cat][sub].products[id]) {
                            console.log("we have a product", Products[cat][sub].products[id])

                            let prod = Products[cat][sub].products[id];
                            setProduct(prod);
                        }
                    }
                }
            }
        }
    }

    function AddToCart() {

        console.log("Adding to our cart here");

        if (CurrentUser !== null) {
            console.log("Adding to our cart here");
            let old = CurrentUser.cart;
            console.log("OLD", old);

            let newOder = {
                main: product.mainCategory,
                sub: product.subCategory,
                price: product.productPrice,
                id: product.id,
                quantity: 1,
            }
            if (old !== null && old !== undefined) {
                old.push(newOder);
                console.log("old added", old);
                AddProductToCart(CurrentUser.uid, old)
                    .then((res) => {
                        console.log("Yay");
                        window.alert("Added to cart");
                        nav(("/cart"), { replace: true });
                    })
                    .catch((err) => {
                        console.log("Error at ", err);
                    });

            } else {
                let cart = [];
                cart.push(newOder);
                console.log("New added", cart);

                AddProductToCart(CurrentUser.uid, cart)
                    .then((res) => {
                        console.log("Yay");
                        window.alert("Added to cart");
                        nav(("/cart"), { replace: true });
                    })
                    .catch((err) => {
                        console.log("Error at ", err);
                    });
            }

        } else {
            let con = window.confirm('Please log in to add to cart');
            if (con) {
                nav(("/signin"), { replace: true });
            }
        }
    }

    function IncrementNumber() {
        setCount(count + increment);
    }

    function DecrementNumber() {
        setCount(count - decrement);
    }


    return (
        <>
            <div className="product" id="product">
                <img src={product.productImg} alt="" className="productImg" />
                <div className="productDetails">
                    <h1 className="productTitle">{product.productName}</h1>
                    <h2 className="productPrice">R {product.productPrice}</h2>
                    <p className="productDesc">{product.productDescription}</p>

                    <div className="counter">
                        <button className="btn-count" onClick={(() => DecrementNumber())}>
                            -
                        </button>
                        <input className="form-control" placeholder="1"
                            value={count}
                            onChange={(e) => setCount(e.target.valueAsNumber)} />
                        <button className="btn-count" onClick={(() => IncrementNumber())}>
                            +
                        </button>
                    </div>
                    <p className='sizes-text'>Select Size:</p>
                    <div className="sizes">
                        <div className="size">XS</div>
                        <div className="size">S</div>
                        <div className="size">M</div>
                        <div className="size">L</div>
                        <div className="size">XL</div>
                        <div className="size">XXL</div>
                    </div>
                    <button className="productButton" onClick={(() => AddToCart())}>ADD TO BAG!</button>
                </div>

            </div>
        </>
    )
}
