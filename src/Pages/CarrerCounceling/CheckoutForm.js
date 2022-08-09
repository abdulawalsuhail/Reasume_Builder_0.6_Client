import React, { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useNavigate, useOutletContext } from "react-router-dom";
import axiosPrivate from "../Api/axiosPrivate";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [userInfo, setUserinfo, price] = useOutletContext();
  const navigate = useNavigate();


  //   payment request api call

  useEffect(() => {
    if (price) {
      axiosPrivate
        .post("/create-payment-intent", { price })
        .then((response) => {
          if (response?.data?.clientSecret) {
            setClientSecret(response.data.clientSecret);
          }
        });
    }
  }, [price]);

  //   payment btn
  const handleSubmit = async (event) => {
    event.preventDefault();

    // userInfo
    const name = userInfo.name;
    const email = userInfo.email;
    const country = userInfo.country;

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCarderror(error?.message || "");

    //   confirm payment

    if (name && email && country) {
      const { paymentIntent, error: paymentErr } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email: email,
              country: country,
            },
          },
        });

        if (paymentErr) {
            setCarderror(paymentErr?.message);
          }
          else{
            toast.success("your payment successfull")
          }
    } else {
      navigate("/resume-builder/career-counselling/62f0b75472d55b6e96f197d2");
    }
  };

  return (
    <div className="card max-w-lg px-4 py-2 shadow-xl  rounded mt-6">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-right mt-4">
          <button
            className="btn btn-primary px-8 text-white"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
