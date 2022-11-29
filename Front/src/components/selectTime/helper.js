export function findHour(hour) {
  switch (hour) {
    case 0:
      return "07:00 - 8:30";
    case 1:
      return "08:30 - 10:00";
    case 2:
      return "10:00 - 11:30";
    case 3:
      return "11:30 - 13:00";
    case 4:
      return "13:00 - 14:30";
    case 5:
      return "14:30 - 16:00";
    case 6:
      return "16:00 - 17:30";
    case 7:
      return "17:30 - 19:00";
    case 8:
      return "19:00 - 20:30";
    case 9:
      return "20:30 - 22:00";
    case 10:
      return "22:00 - 23:30";
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
