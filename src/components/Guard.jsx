import React from "react";
import { Navigate } from "react-router-dom";

const Guard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user) {
    return children;
  } else return <Navigate to="/login" />;
};

export default Guard;
