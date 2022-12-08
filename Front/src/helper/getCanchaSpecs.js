export const getCanchaSpecs = (charCode) => {
  switch (charCode) {
    case "T":
      return "Techada-";
    case "AL":
      return "Aire Libre-";
    case "SC":
      return "Superficie Cemento-";
    case "SS":
      return "Superficie Sintética-";
    case "PC":
      return "Pared Cemento-";
    case "PB":
      return "Pared Blindex-";
    default:
      break;
  }
};
