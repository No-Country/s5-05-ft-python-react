import classes from "./footer.module.css";

export const Footer = () => {
  const { footer, footer__part_1, footer__part_2 } = classes;

  return (
    <footer className={footer}>
      <div>
        <div className={footer__part_1}>
          ¡Que no queden canchas disponibles!
        </div>
        <div className={footer__part_2}>
          Web elaborada por S5-05-REACT/PYTHON <br />
          Copyright © 2022 S5-05-REACT/PYTHON
        </div>
      </div>
    </footer>
  );
};
