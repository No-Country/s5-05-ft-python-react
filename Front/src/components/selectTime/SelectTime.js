import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import { timesText } from "../../helper/timePlayers";
import { days } from "./days";
import { findDay, findHour } from "./helper";

import "./selectTime.css";
import styles from "./styles.module.css";

const {
  container_tableTimes,
  container_tableTimes_text,
  tableTimes_text,
  days_container,
  day_text,
  container,
  button,
} = styles;

export const SelectTime = ({ callback, initialState }) => {
  const [elections, setElections] = useState({});
  const [state, setstate] = useState({
    cells: initialState || [
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
    ],
  });

  const validation = () => {
    callback(state, elections);
  };

  useEffect(() => {
    const days = {
      lun: [],
      mar: [],
      mie: [],
      jue: [],
      vie: [],
      sab: [],
      dom: [],
    };

    state.cells.forEach((hour, indexHour) => {
      if (hour.includes(true)) {
        const hora = findHour(indexHour);
        hour.forEach((day, indexDay) => {
          const dia = findDay(indexDay);
          if (day) {
            days[dia] = [...days[dia], hora];
          }
        });
      }
    });
    setElections(days);
  }, [state.cells]);

  return (
    <div className={container}>
      <div className={days_container}>
        {days.map((day, index) => (
          <p key={index} className={day_text}>
            {day}
          </p>
        ))}
      </div>
      <div className={container_tableTimes}>
        <div className={container_tableTimes_text}>
          {timesText.map((t) => (
            <div key={t.time} className={tableTimes_text}>
              {t.time}
            </div>
          ))}
        </div>
        <TableDragSelect
          value={state.cells}
          onChange={(cells) => {
            setstate({ cells });
          }}
        >
          {timesText.map((time) => (
            <tr key={time.id}>
              {days.map((day, index) => (
                <td key={`${day}${index}`} />
              ))}
            </tr>
          ))}
        </TableDragSelect>
      </div>
      <button className={button} type="button" onClick={validation}>
        Aceptar
      </button>
    </div>
  );
};
