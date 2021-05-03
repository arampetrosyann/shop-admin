import React from "react";

import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
