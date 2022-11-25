import { HomeButton } from "../HomeButton/HomeButton";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation().pathname;

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
    resalt__link
  } = classes;

  return (
    <nav className={nav}>
      <div className={nav__container}>
        <div className={nav__logo}>
          <Link to="/">LogoPadel</Link>
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
            <li className={location === "/complex" ? resalt__link : "" } >
              <Link to="/complex">Canchas</Link>
            </li>
            <li className={location === "/players" ? resalt__link : "" }>
              <Link to="/players">Usuarios</Link>
            </li>
          </ul>
          <div className={menu__buttons__container}>
            <HomeButton name={"Registrate"} to="/register" color="#3282c3" />
            <HomeButton name={"Registra una cancha"} to="/register" color="#3282c3" />
            <HomeButton name={"Inicia sesion"} to="/login" color="#3282c3" />
          </div>
        </div>
      </div>
    </nav>
  );
};
