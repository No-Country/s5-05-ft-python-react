import React from "react";
import { useLocation } from "react-router-dom";
import { ClubRegister } from "../../components/registers/clubRegister/ClubRegister";

export const Registers = () => {
  const { state } = useLocation();

  return (
    <div>
      <ClubRegister />
    </div>
  );
};
