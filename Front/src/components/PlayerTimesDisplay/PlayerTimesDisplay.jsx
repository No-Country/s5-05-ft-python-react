import React, { useEffect, useState } from "react";
import { findDay, findHour } from "../../helper/timePlayers";

const days = {
	lun: [],
	mar: [],
	mie: [],
	jue: [],
	vie: [],
	sab: [],
	dom: [],
};

export const PlayerTimesDisplay = ({ availableTimes }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		availableTimes.forEach((hour, indexHour) => {
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
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const log = (value) => {
		console.log(value);
	};

	return loading ? (
		<>Cargando ...</>
	) : (
		<div>
			PlayerTimesDisplay
			{log(days)}
		</div>
	);
};
