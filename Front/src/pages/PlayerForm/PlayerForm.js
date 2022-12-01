import React from "react";
import { FormPlayer } from "../../components/PlayerForm/FormPlayer";

import styles from "./playerForm.module.css";
const { container } = styles;

export const PlayerForm = () => {
  return (
    <div className={container}>
      <FormPlayer />
    </div>
  );
};
