import React, { useState } from 'react';

import {
    CardElement, useElements, useStripe
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCarderror] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
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
    };
   
  
    return (
       <div className='card max-w-lg px-4 py-2 shadow-xl  rounded mt-6'>
         <form onSubmit={handleSubmit}>
       <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
        <div className='text-right mt-4'>
        <button className='btn btn-primary px-8 text-white' type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
        </div>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
       </div>
    );
};

export default CheckoutForm;