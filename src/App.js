import "./App.css";
import Header from "./components/Header.js";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";
import Signup from "./containers/Signup.js";
import Login from "./containers/Login.js";
import Publish from "./containers/Publish.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/user/signup">
          <Signup />
        </Route>
        <Route path="/user/login">
          <Login />
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
