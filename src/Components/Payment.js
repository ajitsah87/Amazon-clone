import React, { useState,useEffect   } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate= useNavigate
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(()=>{
const getClientSecret = async ()=>{
    const response = await axios({
        method:"POST",
        url:`/payments/create?total=${getBasketTotal(basket)*100}`
    })
    setClientSecret(response.data.clientSecret)
}
getClientSecret();
  },[basket])
  const handleSubmit = async(event) => {
    event.preventDefault()
    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=>{
        setSucceeded(true)
        setError(null)
        setProcessing(false)
       navigate('/orders')
    })
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="Payment">
      <div className="Payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length}items</Link>)
        </h1>
        <div className="Payment_section">
          <div className="Payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="Payment_Address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="Payment_section">
          <div className="Payment_title">
            <h3>Review items and delivery </h3>
          </div>
          <div className="Payment_item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="Payment_section">
          <div className="Payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="Payment_detail">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="Payment_priceContainer">
              <CurrencyFormat
        renderText={(value) => (
         <h3>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button disabled= {processing || disabled || succeeded}>
        <span>{processing ?<p>Processing</p>:"Buy Now"}</span>
      </button>
              </div>
              {error&&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
