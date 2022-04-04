import React, { useEffect, useState } from 'react'
import NavBar from './../../../../components/navigation/NavBar';
import { useData } from './../../../../firebase/FirebaseDataHook';
import { useLocation } from 'react-router-dom';

export default function ProductDetails(props) {

    const [product, setProduct] = useState([]);
    const { Products } = useData();
    const url = useLocation();


    useEffect(() => { loader() }, [Products]);

    function loader() {
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

    return (
        <>
            <NavBar />
            <div className="product" id="product">
                <img src={product.productImg} alt="" className="productImg" />
                <div className="productDetails">
                    <h1 className="productTitle">{product.productName}</h1>
                    <h2 className="productPrice">{product.productPrice}</h2>
                    <p className="productDesc">{product.productDescription}</p>

                    <div className="counter">
                        <button className="btn-count" >
                            -
                        </button>
                        <input className="form-control" placeholder="1" />
                        <button className="btn-count" >
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
                    <button className="productButton">ADD TO BAG!</button>
                </div>

            </div>
            {/* <div className="product" id="product">
                <img src={CartImg} alt="" className="productImg" />
                <div className="productDetails">
                    <h1 className="productTitle">20 kg Chest Presser</h1>
                    <h2 className="productPrice">$199</h2>
                    <p className="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda dolorum
                        doloremque sapiente aliquid aperiam.</p>

                    <div className="counter">
                        <button className="btn-count" >
                            -
                        </button>
                        <input className="form-control" placeholder="1" />
                        <button className="btn-count" >
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
                    <button className="productButton">ADD TO BAG!</button>
                </div>

            </div> */}
        </>
    )
}
