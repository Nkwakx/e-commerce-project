import React from 'react'
import CartImg from '../../../../assets/images/img10.jpg'
import NavBar from './../../../../components/NavBar';

export default function ProductDetails() {
    return (
        <>
            <NavBar />

            <div class="product" id="product">
                <img src={CartImg} alt="" class="productImg" />
                <div class="productDetails">
                    <h1 class="productTitle">20 kg Chest Presser</h1>
                    <h2 class="productPrice">$199</h2>
                    <p class="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda dolorum
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
                    <div class="sizes">
                        <div class="size">XS</div>
                        <div class="size">S</div>
                        <div class="size">M</div>
                        <div class="size">L</div>
                        <div class="size">XL</div>
                        <div class="size">XXL</div>
                    </div>
                    <button class="productButton">ADD TO BAG!</button>
                </div>

            </div>
        </>
    )
}
