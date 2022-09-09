import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../App";

export default function RequireAuth({children}) {
    const { state } = useContext(AuthContext);
    let location = useLocation();
    if (!state.auth) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};
