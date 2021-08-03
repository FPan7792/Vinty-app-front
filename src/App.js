import "./App.css";
import Header from "./components/Header.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Publish from "./containers/Publish.js";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // let token = "";
  const [userToken, setUserToken] = useState(null);

  return (
    <Router>
      <Header userToken={userToken} setUserToken={setUserToken} />
      <Switch>
        <Route path="/user/signup">
          <Signup userToken={userToken} setUserToken={setUserToken} />
        </Route>
        <Route path="/user/login">
          <Login userToken={userToken} setUserToken={setUserToken} />
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
