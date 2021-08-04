import "./App.css";
import Header from "./components/Header.js";
import Payment from "./containers/Payment.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Publish from "./containers/Publish.js";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

export default function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);
  const [userId, setUserId] = useState();

  return (
    <Router>
      <Header userToken={userToken} setUserToken={setUserToken} />
      <Switch>
        <Route path="/user/signup">
          <Signup setUserToken={setUserToken} setUserId={setUserId} />
        </Route>
        <Route path="/user/login">
          <Login
            setUserToken={setUserToken}
            setUserId={setUserId}
            userId={userId}
          />
        </Route>
        <Route exact path="/offer/publish">
          {userToken !== null ? <Publish /> : <Redirect to="/user/login" />}
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/payments">
          <Payment userId={userId} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
