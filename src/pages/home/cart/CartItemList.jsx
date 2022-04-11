import React, { useEffect, useState } from 'react'
import NavBar from './../../../components/navigation/NavBar';
import { BsPaypal } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaCreditCard } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowRight } from "react-icons/bs";
import { useAuth } from '../../../firebase/FirebaseAuthHook';
import { useData } from '../../../firebase/FirebaseDataHook';
import { NavLink } from 'react-router-dom';

export default function CartItemList() {
  // const { increment = 1, decrement = 1 } = props;

  const { Products, } = useData();
  const { RemoveProductFromCart, CurrentUser, AddProductToCart } = useAuth();

  const [CART, setCART] = useState([]);
  const [count, setCount] = useState(1);
  const [countTotal, setCountTotal] = useState(0);


  useEffect(() => {

    // if (CurrentUser !== null && CurrentUser.cart !== undefined && CurrentUser.cart !== null && CurrentUser.cart.length > 0) {
    //   console.log("Current user details: ", CurrentUser);
    //   setCART(CurrentUser.cart);
    // }
    // if (CurrentUser !== null && CurrentUser.cart !== undefined &&
    //   CurrentUser.cart !== null && (CurrentUser.cart.length !== CART.length)) {
    //   console.log("Something changed lets show it", CurrentUser.cart.length, ">>>>", CART.length);
    // }

  }, [CurrentUser]);


  useEffect(() => {

    console.log("Prod: ", Products);
    let arr = [];

    if (CurrentUser !== null && (CurrentUser.cart !== null && CurrentUser.cart !== undefined)) {
      if (Products !== null) {
        console.log("Ok we have info lets go to with setup", CurrentUser.cart);

        CurrentUser.cart.forEach((entry, index) => {
          if (Products[entry.main]) {
            if (Products[entry.main][entry.sub]) {
              if (Products[entry.main][entry.sub].products) {
                if (Products[entry.main][entry.sub].products[entry.id]) {
                  console.log("??? ", Products[entry.main][entry.sub].products[entry.id]);
                  arr.push({
                    prod: Products[entry.main][entry.sub].products[entry.id],
                    cart: entry,
                    index
                  });
                }
              }
            }
          }
        });

        console.log("ARR", arr)
        setCART(arr);
      }
      let tot = 0
      CurrentUser.cart.forEach((item) => {
        tot = Number(item.price) + tot
      })
      setCountTotal(tot)
    }
  }, [Products]);


  useEffect(() => { }, [CART])


  function RunRemove(entry) {
    console.log("Removing something on cart", entry);
    RemoveProductFromCart(CurrentUser.uid, entry.prod.id);
  }

  function IncrementQuantitY(entry, type) {
    if (CurrentUser !== null) {
      let old = CurrentUser.cart;
      console.log("OLD", old, count);

      let newOder = {
        main: entry.cart.main,
        sub: entry.cart.sub,
        price: entry.cart.price,
        id: entry.cart.id,
        quantity: entry.cart.quantity,
      }


      if (type === "min") {
        if (count < entry.cart.quantity) {
          newOder.quantity = newOder.quantity - 1;
          newOder.price = newOder.price - entry.prod.productPrice;
        }
        else {
          window.alert("This is our standard price for single item.");
        }

      }
      if (type === "add") {
        newOder.quantity = newOder.quantity + 1;
        newOder.price = newOder.price + entry.prod.productPrice;
      }

      if (old !== null && old !== undefined) {

        old.splice(entry.index, 1, newOder)

        console.log("old changed", old, count);

        AddProductToCart(CurrentUser.uid, old)
          .then((res) => {
          })
          .catch((err) => {
            console.log("Error at ", err);
          });
  
      }
    }
  }
  function IncrementNumber(entry) {
    IncrementQuantitY(entry, "add");
  }

  function DecrementNumber(entry) {
    IncrementQuantitY(entry, "min");
  }

  return (
    <>
      <main className="container cart">

        <div className="item-flex">

          <section className="checkout">
            <h2 className="section-heading">Payment Details</h2>
            <div className="payment-form">
              <div className="payment-method">
                <button className="method selected">
                  <FaCreditCard />
                  <span>Credit Card</span>
                  <AiFillCheckCircle className="checkmark fill" />
                </button>
                <button className="method">
                  <BsPaypal />
                  <span>PayPal</span>
                  <AiOutlineCheckCircle className="checkmark" />
                </button>
              </div>

              <form action="">

                <div className="cardholder-name">
                  <label htmlFor="cardholder-name" className="label-default"> Card name
                    <input type="number" name="cardholder-name" id="cardholder-name" className="input-default" />
                  </label>
                </div>
                <div className="card-number">
                  <label htmlFor="card-number" className="label-default"> Card number
                    <input type="number" name="card-number" id="card-number" className="input-default" />
                  </label>
                </div>

                <div className="input-flex">
                  <div className="expire-date">
                    <label htmlFor="expire-date" className="label-default">Expiration date
                      <div className="input-flex">
                        <input type="number" name="day" id="expire-date" placeholder="31" min="1" max="31"
                          className="input-default" />
                        /
                        <input type="number" name="month" id="expire-date" placeholder="12" min="1" max="12"
                          className="input-default" />
                      </div>
                    </label>
                  </div>
                  <div className="cvv">
                    <label htmlFor="cvv" className="label-default">CVV
                      <input type="number" name="cvv" id="cvv" className="input-default" />
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary">
                  <b>Pay</b> R <span id="payAmount">{countTotal}</span>
                </button>
              </form>
            </div>

          </section>

          <section className="summary-cart">
            <div className="cart-item-box">
              <h2 className="section-heading">Order Summary</h2>
              
              {CurrentUser && Products && CART && CART.length > 0 ? CART.map((entry, index) => {
                return <div className="product-card" key={index}>
                  <div className="card-cart">
                    <div className="img-box">
                      <img src={entry?.prod?.productImg} alt="Green tomatoes" width="80px" className="product-img" />
                    </div>
                    <div className="detail">
                      <h4 className="product-name">{entry?.prod?.productName}</h4>
                      <p>Size/Weight: </p>
                      <div className="price">
                        R <span>{entry?.cart?.price}</span>
                      </div>
                      <div className="wrapper">
                        <div className="product-qty">
                          <button id="decrement" onClick={(() => DecrementNumber(entry))}>
                            -
                          </button>
                          <span className="quantity">{entry?.cart?.quantity}</span>
                          <button onClick={(() => IncrementNumber(entry))}>
                            +
                          </button>
                        </div>

                      </div>
                    </div>
                    <button onClick={() => RunRemove(entry)} className="product-close-btn">
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              }): "No Product in your cart"}
              <div className="amount">
                <hr />
                <div className="shipping">
                  <span>Shipping</span> <span>R <span id="shipping">0.00</span></span>
                </div>
                <div className="total">
                  <span>Total</span> <span>R <span id="total">{countTotal}</span></span>
                </div>
              </div>
              <NavLink to="/" className="btn-continueShopping">
                Continue Shopping <i className='icon'> <BsArrowRight /></i>
              </NavLink>
            </div>


          </section>
        </div>
      </main>
    </>
  )
}

