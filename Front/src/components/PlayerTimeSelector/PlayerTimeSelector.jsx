import React, { useEffect, useState } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import { findDay, findHour, timesText } from "../../helper/timePlayers";

import "./playerTimeSelector.css";
import styles from "./playerTimeSelector.module.css";

const {
	container_tableTimes,
	container_tableTimes_text,
	tableTimes_text,
	days_container,
	day_text,
	container,
	// button,
} = styles;

const daysWeek = ["L", "M", "M", "J", "V", "S", "D"];

export const PlayerTimeSelector = ({
	availableUpdate,
	setAvailableUpdate,
	setErrorTimes,
}) => {
	// const [elections, setElections] = useState({});
	const [cells, setCells] = useState(availableUpdate);

	const validation = () => {
		const result = cells.find((el) => el.includes(true));
		result ? setErrorTimes(false) : setErrorTimes(true);
		result && setAvailableUpdate(cells);
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

		cells.forEach((hour, indexHour) => {
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
		// setElections(days);
		validation();
	}, [cells]);

	return (
		<div className={container}>
			<div className={days_container}>
				{daysWeek.map((day, index) => (
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
					value={cells}
					onChange={(newCells) => {
						setCells(newCells);
					}}>
					{timesText.map((time) => (
						<tr key={time.id}>
							{daysWeek.map((day, index) => (
								<td key={`${day}${index}`} />
							))}
						</tr>
					))}
				</TableDragSelect>
			</div>
			{/* <button className={button} type='button' onClick={validation}>
				Aceptar
			</button> */}
		</div>
	);
};
