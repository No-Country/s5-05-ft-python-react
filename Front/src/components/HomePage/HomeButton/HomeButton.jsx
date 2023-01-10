import classes from "./homeButton.module.css";
import { Link } from "react-router-dom";

export const HomeButton = ({ name, to, color = "white" }) => {
  return (
    <Link to={to} className={classes.btn__primary} style={{ "--color": color }}>
      {name}
    </Link>
  );
};
