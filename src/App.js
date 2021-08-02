import "./App.css";
import Header from "./components/Header.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Publish from "./containers/Publish.js";
import { useState } from "react";

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
          <Publish />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
