import React from "react";
import { useSelector } from "react-redux";
import Routes from "./routes";
import "./styles/App.css";
import Spinner from "./components/Spinner";
import useApp from "./talons/useApp";

const App = () => {
  const { isDataFetched } = useSelector((state) => state.admin);

  useApp("authorization");

  if (!isDataFetched) {
    return <Spinner />;
  }

  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;
