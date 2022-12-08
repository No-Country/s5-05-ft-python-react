import images from "../../../assets/HomePage/imagesHomePage";
import { HomeButton } from "../HomeButton/HomeButton";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.module.css";
import { useContext, useState } from "react";

import { UserContext } from "../../../context/userContext";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation().pathname;

  const { userCredentials } = useContext(UserContext);

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
    resalt__link,
  } = classes;

  return (
    <nav className={nav}>
      <div className={nav__container}>
        <div className={nav__logo}>
          <Link to="/">
            <img src={images.Logo} alt="" />
          </Link>
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
            {userCredentials.id !== "" ? (
              userCredentials.is_jugador ? (
                <li className={location === "/complex" ? resalt__link : ""}>
                  <Link to="/complex">Canchas</Link>
                </li>
              ) : (
                <li className={location === "/players" ? resalt__link : ""}>
                  <Link to="/players">Usuarios</Link>
                </li>
              )
            ) : null}
          </ul>
          <div className={menu__buttons__container}>
            {userCredentials.id !== "" ? (
              userCredentials.is_jugador ? (
                userCredentials.perfil_completo ? (
                  <HomeButton name={"Perfil"} to="/profile" color="#3282c3" />
                ) : (
                  <HomeButton
                    name={"Completar perfil"}
                    to="/form/player"
                    color="#3282c3"
                  />
                )
              ) : userCredentials.perfil_completo ? (
                <HomeButton name={"Perfil"} to="/profile" color="#3282c3" />
              ) : (
                <HomeButton
                  name={"Completar datos"}
                  to="/form/complex"
                  color="#3282c3"
                />
              )
            ) : (
              <>
                <HomeButton
                  name={"Inicia sesion"}
                  to="/login"
                  color="#3282c3"
                />
                <HomeButton
                  name={"Registrate"}
                  to="/register"
                  color="#3282c3"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
