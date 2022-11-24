import { useState } from "react";
import classes from "./navbar.module.css";
import { HomeButton } from "../HomeButton/HomeButton";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  window.onscroll = () => {
    setOpenMenu(false);
  };

  const {
    nav,
    nav__container,
    nav__logo,
    bar,
    top,
    nav__menu,
    menu__buttons__container,
    middle,
    bottom,
  } = classes;

  return (
    <nav className={nav}>
      <div className={nav__container}>
        <div className={nav__logo}>
          <a href="/">LogoPadel</a>
        </div>
        <label htmlFor="check" className={bar}>
          <input
            id="check"
            type="checkbox"
            onChange={(e) => setOpenMenu(e.target.checked)}
            checked={openMenu}
          />
          <span className={top}></span>
          <span className={middle}></span>
          <span className={bottom}></span>
        </label>
        <div className={nav__menu} style={{ left: openMenu ? "0px" : "-100%" }}>
          <ul>
            <li>Canchas</li>
            <li>Usuarios</li>
          </ul>
          <div className={menu__buttons__container}>
            <HomeButton name={"Registrate"} color="#3282c3" />
            <HomeButton name={"Registra una cancha"} color="#3282c3" />
            <HomeButton name={"Inicia sesion"} color="#3282c3" />
          </div>
        </div>
      </div>
    </nav>
  );
};
