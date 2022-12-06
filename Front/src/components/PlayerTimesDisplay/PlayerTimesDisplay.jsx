import React, { useEffect, useState } from "react";
import { findDay, findHour } from "../../helper/timePlayers";
import { Loading } from "../Loading/Loading";

import styles from "./playerTimesDisplay.module.css";
import { SwiperTimes } from "./SwiperTimes";

const { container, labelDay, containerDays, containerTimes, timeText } = styles;

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

	return loading ? (
		<Loading />
	) : (
		<div className={container}>
			{days.dom.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Domingo</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.dom} />
					</div>
				</div>
			)}
			{days.lun.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Lunes</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.lun} />
					</div>
				</div>
			)}
			{days.mar.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Martes</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.mar} />
					</div>
				</div>
			)}
			{days.mie.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Miercoles</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.mie} />
					</div>
				</div>
			)}
			{days.jue.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Jueves</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.jue} />
					</div>
				</div>
			)}
			{days.vie.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Viernes</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.vie} />
					</div>
				</div>
			)}
			{days.sab.length > 0 && (
				<div className={containerDays}>
					<div className={labelDay}>Sabado</div>
					<div className={containerTimes}>
						<SwiperTimes times={days.sab} />
					</div>
				</div>
			)}
		</div>
	);
};
