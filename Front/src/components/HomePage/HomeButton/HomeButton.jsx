import classes from "./homeButton.module.css";

export const HomeButton = ({ name, color = "white" }) => {
  return (
    <button className={classes.btn__primary} style={{ "--color": color }}>
      {name}
    </button>
  );
};
