import classes from "./subtitle.module.css";

export const Subtitle = ({ name, align = "center" }) => {
  return (
    <div
      className={classes.subtitle__section}
      style={{
        justifyContent: align,
        "--direction":
          align === "center"
            ? "center"
            : align === "flex-start"
            ? "flex-start"
            : "flex-end",
      }}
    >
      <h2>
        {name}
        <span></span>
        <span></span>
      </h2>
    </div>
  );
};
