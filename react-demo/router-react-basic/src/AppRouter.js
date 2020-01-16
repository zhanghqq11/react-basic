import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>this is index page</h2>;
}

function List() {
  return <h2>this is list page</h2>;
}

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">main</Link> </li>
            <li><Link to="/list/">list</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
    </Router>
  );
}
export default AppRouter;