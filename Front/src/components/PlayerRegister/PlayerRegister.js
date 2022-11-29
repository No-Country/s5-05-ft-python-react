import React from "react";
import { SelectTime } from "../selectTime/SelectTime";

export const PlayerRegister = () => {
  const days = (result) => console.log(result);

  return (
    <div>
      <SelectTime callback={days} />
    </div>
  );
};
