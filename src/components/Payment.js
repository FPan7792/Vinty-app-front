import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

import axios from "axios";

function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation;

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: Cookies.get("token"),
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;

    try {
      const response = await axios.post(
        "https://vinty-app.herokuapp.com/payment",
        {
          stripe_token: stripeToken,
        }
      );
      console.log(response.data);
      response.data.status === "suceedeed" && setCompleted(true);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <div className="payment-form-container">
        <p>Résume de la commande </p>
        <div>
          <div>
            <span>{location.test}</span>
            <span>Prix</span>
          </div>
          <div>
            <span>Frais protection acheteurs</span>
            <span>Prix</span>
          </div>
          <div>
            <span>Frais de port</span>
            <span>Prix</span>
          </div>
          <hr />
          <div>
            <div>
              <span>Total</span>
              <span>Prix</span>
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
              <button type="submit">Confirmer le paiement </button>
            </form>
          ) : (
            <span>Paiement validé</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
