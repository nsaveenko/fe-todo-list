import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "components/Dashboard";
import Login from "components/Login";
import ErrorBoundary from "components/ErrorBoundary";

const App = () => {
  return (
    <div className="wrapper">
      <ErrorBoundary>
        <Route path="/" exact component={Dashboard} />
        <Route
          path="/signup"
          render={(props) => <Login {...props} pageType="signup" />}
        />
        <Route
          path="/signin"
          render={(props) => <Login {...props} pageType="signin" />}
        />
      </ErrorBoundary>
    </div>
  );
};

export default App;
