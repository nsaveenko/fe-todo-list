import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "components/Dashboard";

const App = () => {
  return <Route path="/" exact component={Dashboard} />;
};

export default App;
