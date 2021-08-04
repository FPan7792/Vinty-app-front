import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

import axios from "axios";

const PayValid = ({ product_description, product_price, userId }) => {
  const elements = useElements();
  const stripe = useStripe();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      console.log(product_price);
      console.log(product_description);

      const response = await axios.post(
        "https://vinty-app.herokuapp.com/payment",
        {
          stripe_token: stripeToken,
          product_price: product_price,
          product_description: product_description,
        }
      );
      console.log(response.data);
      response.data.status === "suceedeed" && setCompleted(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  const sellerCharges = 0.4;
  const provideCharges = 0.8;
  const total = sellerCharges + provideCharges + product_price;
  return (
    <div>
      <div className="payment-form-container">
        <p>{product_description}</p>
        <div>
          <div>
            <span>Prix</span>
            <span>{product_price}</span>
          </div>
          <div>
            <span>Frais protection acheteurs</span>
            <span>{sellerCharges}</span>
          </div>
          <div>
            <span>Frais de port</span>
            <span>{provideCharges}</span>
          </div>
          <hr />
          <div>
            <div>
              <span>Total</span>
              <span>{total}</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus dolore facere ut qui odio minima consequatur quae
                doloribus facilis? Aliquid iste voluptas dignissimos ut odio
                numquam quas a nostrum odit!
              </p>
            </div>
          </div>
          <hr />
          {!completed ? (
            <form onSubmit={handleSubmit}>
              <CardElement />
              <input type="submit" value="Confimer le paiement" />
            </form>
          ) : (
            <span>Paiement validé</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayValid;
