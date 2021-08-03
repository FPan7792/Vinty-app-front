import "./App.css";
import Header from "./components/Header.js";
import Payment from "./components/Payment.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Publish from "./containers/Publish.js";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
const stripePromise = loadStripe(
  "pk_test_51JKOrfJDPJjwfeVJpVAV0vDLrRIhTciwmv8YPtJtWMVqyriZjIkmGn4pgBmpIU6YM3FhLBYDRfLrc5vKKGd9wksz00Pnh1fmD6"
);

export default function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);

  return (
    <Router>
      <Header userToken={userToken} setUserToken={setUserToken} />
      <Elements stripe={stripePromise}>
        <Route path="/payments">
          <Payment />
        </Route>
      </Elements>
      <Switch>
        <Route path="/user/signup">
          <Signup setUserToken={setUserToken} />
        </Route>
        <Route path="/user/login">
          <Login setUserToken={setUserToken} />
        </Route>
        <Route exact path="/offer/publish">
          {userToken !== null ? <Publish /> : <Redirect to="/user/login" />}
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
