export function findHour(hour) {
	switch (hour) {
		case 0:
			return "07:00 a 08:30";
		case 1:
			return "07:30 a 09:00";
		case 2:
			return "08:00 a 09:30";
		case 3:
			return "08:30 a 10:00";
		case 4:
			return "09:00 a 09:30";
		case 5:
			return "09:30 a 11:00";
		case 6:
			return "10:00 a 11:30";
		case 7:
			return "10:30 a 12:00";
		case 8:
			return "11:00 a 12:30";
		case 9:
			return "11:30 a 13:00";
		case 10:
			return "12:00 a 13:30";
		case 11:
			return "12:30 a 14:00";
		case 12:
			return "13:00 a 14:30";
		case 13:
			return "13:30 a 15:00";
		case 14:
			return "14:00 a 15:30";
		case 15:
			return "14:30 a 16:00";
		case 16:
			return "15:00 a 16:30";
		case 17:
			return "15:30 a 17:00";
		case 18:
			return "16:00 a 17:30";
		case 19:
			return "16:30 a 18:00";
		case 20:
			return "17:00 a 18:30";
		case 21:
			return "17:30 a 19:00";
		case 22:
			return "18:00 a 19:30";
		case 23:
			return "18:30 a 20:00";
		case 24:
			return "19:00 a 20:30";
		case 25:
			return "19:30 a 21:00";
		case 26:
			return "20:00 a 21:30";
		case 27:
			return "20:30 a 22:00";
		case 28:
			return "21:00 a 22:30";
		case 29:
			return "21:30 a 23:00";
		case 30:
			return "22:00 a 23:30";
		case 31:
			return "22:30 a 24:00";
		default:
			break;
	}
}

export const findDay = (day) => {
	switch (day) {
		case 0:
			return "lun";
		case 1:
			return "mar";
		case 2:
			return "mie";
		case 3:
			return "jue";
		case 4:
			return "vie";
		case 5:
			return "sab";
		case 6:
			return "dom";

		default:
			break;
	}
};

export const timesText = [
	{ id: "1", time: "07:00 a 08:30" },
	{ id: "2", time: "07:30 a 09:00" },
	{ id: "3", time: "08:00 a 09:30" },
	{ id: "4", time: "08:30 a 10:00" },
	{ id: "5", time: "09:00 a 09:30" },
	{ id: "6", time: "09:30 a 11:00" },
	{ id: "7", time: "10:00 a 11:30" },
	{ id: "8", time: "10:30 a 12:00" },
	{ id: "9", time: "11:00 a 12:30" },
	{ id: "10", time: "11:30 a 13:00" },
	{ id: "11", time: "12:00 a 13:30" },
	{ id: "12", time: "12:30 a 14:00" },
	{ id: "13", time: "13:00 a 14:30" },
	{ id: "14", time: "13:30 a 15:00" },
	{ id: "15", time: "14:00 a 15:30" },
	{ id: "16", time: "14:30 a 16:00" },
	{ id: "17", time: "15:00 a 16:30" },
	{ id: "18", time: "15:30 a 17:00" },
	{ id: "19", time: "16:00 a 17:30" },
	{ id: "20", time: "16:30 a 18:00" },
	{ id: "21", time: "17:00 a 18:30" },
	{ id: "22", time: "17:30 a 19:00" },
	{ id: "23", time: "18:00 a 19:30" },
	{ id: "24", time: "18:30 a 20:00" },
	{ id: "25", time: "19:00 a 20:30" },
	{ id: "26", time: "19:30 a 21:00" },
	{ id: "27", time: "20:00 a 21:30" },
	{ id: "28", time: "20:30 a 22:00" },
	{ id: "29", time: "21:00 a 22:30" },
	{ id: "30", time: "21:30 a 23:00" },
	{ id: "31", time: "22:00 a 23:30" },
	{ id: "32", time: "22:30 a 24:00" },
];
