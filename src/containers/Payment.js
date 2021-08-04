import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayValid from "../components/PayValid.js";

const stripePromise = loadStripe(
  "pk_test_51JKOrfJDPJjwfeVJpVAV0vDLrRIhTciwmv8YPtJtWMVqyriZjIkmGn4pgBmpIU6YM3FhLBYDRfLrc5vKKGd9wksz00Pnh1fmD6"
);

function Payment({ userId }) {
  const location = useLocation();
  return (
    <div>
      <Elements stripe={stripePromise}>
        <PayValid
          product_description={location.state.product_description}
          product_price={location.state.product_price}
          owner_id={location.state.owner_id}
          userId={userId}
        />
      </Elements>
    </div>
  );
}

export default Payment;
