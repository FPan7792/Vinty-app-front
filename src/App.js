import "./App.css";
import Home from "./containers/Home.js";
import Offer from "./containers/Offer.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/offer">Offer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
