import React, { useEffect, useRef, useState } from "react";
import { SelectTime } from "../selectTime/SelectTime";
import styles from "./modal.module.css";
const { container, close, toggle, button_days } = styles;

export const Modal_selectTime = ({ changeAvailavility, initialState }) => {
  const [toggleModal, settoggleModal] = useState(false);

  const openModal = () => settoggleModal(true);
  const closeModal = () => settoggleModal(false);

  const result = (arr, election) => {
    const result = arr.cells.find((el) => el.includes(true));

    if (result) {
      changeAvailavility({ cells: arr.cells, election });
    } else {
      changeAvailavility({
        cells: false,
        election: [],
      });
    }
    settoggleModal(false);
  };

  return (
    <>
      {toggleModal ? (
        <div className={`${container} ${toggleModal && toggle}`}>
          <button onClick={closeModal} className={close}>
            X
          </button>
          <SelectTime callback={result} initialState={initialState} />
        </div>
      ) : (
        <button className={button_days} onClick={openModal} type="button">
          Disponibilidad
        </button>
      )}
    </>
  );
};
