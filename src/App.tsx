import React from "react";
import ReactDOM from "react-dom";
import { Router, Outlet } from "react-location"
import { routes, location } from "./router"
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
