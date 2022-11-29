import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import { days } from "./days";
import { findDay, findHour } from "./helper";

import styles from "./styles.module.css";

const { days_container, day_text, container, button } = styles;

export const SelectTime = ({ callback }) => {
  const [elections, setElections] = useState({});
  const [state, setstate] = useState({
    cells: [
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
    const result = state.cells.find((el) => el.includes(true));
    if (result) {
      callback(elections);
    } else {
      alert("Falta elegir horario (acá va una alerta decente jaja)");
    }
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
        {days.map((day) => (
          <p key={day} className={day_text}>
            {day}
          </p>
        ))}
      </div>
      <TableDragSelect
        value={state.cells}
        onChange={(cells) => {
          setstate({ cells });
        }}
      >
        <tr>
          <td>
            07:00 <br /> 08:30
          </td>
          <td></td>
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            08:30 <br /> 10:00
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            10:00 <br /> 11:30
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            11:30 <br /> 13:00
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            13:00 <br /> 14:30
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            14:30 <br /> 16:00
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            16:00 <br /> 17:30
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            17:30 <br /> 19:00
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            19:00 <br /> 20:30
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            20:30 <br /> 22:00
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            22:00 <br /> 23:30
          </td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </TableDragSelect>
      <button className={button} type="button" onClick={validation}>
        Aceptar
      </button>
    </div>
  );
};
