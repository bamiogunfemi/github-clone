import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectisAuthenticated } from '../store/userSlice';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(selectisAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}


