import React from "react";
import { Route, Redirect } from "react-router-dom";


function PrivateRoute({ component: Component, ...rest }) {
  const authTokens = localStorage.getItem("authTokens") === "true";

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signIn", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
