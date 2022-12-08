import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const PrivatesPages = () => {
  const { userCredentials } = useContext(UserContext);
  console.log(userCredentials);

  return userCredentials.login ? <Outlet /> : <Navigate to={-1} />;
};
