import React from 'react'
import NavBar from './../../../../components/navigation/NavBar';
import { BsPaypal } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaCreditCard } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import cartImg from '../../../../assets/images/img7.jpg'

export default function CartItemList() {
  return (
    <>
      <NavBar />
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

              <form action="#">
                <div className="cardholder-name">
                  <label for="cardholder-name" className="label-default">Cardholder name
                    <input type="text" name="cardholder-name" id="cardholder-name" className="input-default" />
                  </label>
                </div>

                <div className="card-number">
                  <label for="card-number" className="label-default">Card number
                  <input type="number" name="card-number" id="card-number" className="input-default" />
                  </label>
                </div>

                <div className="input-flex">
                  <div className="expire-date">
                    <label for="expire-date" className="label-default">Expiration date
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
                    <label for="cvv" className="label-default">CVV
                    <input type="number" name="cvv" id="cvv" className="input-default" />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <button className="btn btn-primary">
              <b>Pay</b> $ <span id="payAmount">2.15</span>
            </button>
          </section>


          <section className="summary-cart">
            <div className="cart-item-box">
              <h2 className="section-heading">Order Summary</h2>
              <div className="product-card">
                <div className="card-cart">
                  <div className="img-box">
                    <img src={cartImg} alt="Green tomatoes" width="80px" className="product-img" />
                  </div>
                  <div className="detail">
                    <h4 className="product-name">Yoga Roller</h4>
                    <div className="wrapper">
                      <div className="product-qty">
                        <button id="decrement">
                          -
                        </button>
                        <span id="quantity">1</span>
                        <button id="increment">
                          +
                        </button>
                      </div>
                      <div className="price">
                        $ <span id="price">1.25</span>
                      </div>
                    </div>
                  </div>
                  <button className="product-close-btn">
                    <AiOutlineClose/>
                  </button>
                </div>
              </div>
            
            </div>
            <div className="wrapper">
              <div className="amount">
                <div className="subtotal">
                  <span>Subtotal</span> <span>$ <span id="subtotal">2.05</span></span>
                </div>
                <div className="tax">
                  <span>Tax</span> <span>$ <span id="tax">0.10</span></span>
                </div>
                <div className="shipping">
                  <span>Shipping</span> <span>$ <span id="shipping">0.00</span></span>
                </div>
                <div className="total">
                  <span>Total</span> <span>$ <span id="total">2.15</span></span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
