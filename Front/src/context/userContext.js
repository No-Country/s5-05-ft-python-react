import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SuccesIcon from "../assets/profile/succes_icon.png";
import { instance } from "../axios/axiosConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    id: "",
    is_jugador: false,
    is_complejo: false,
    perfil_completo: false,
    login: false,
  });

  const [token, setToken] = useState(null);

  // actualizar cuando completa form de jugador / complejo
  const [userPlayer, setUserPLayer] = useState(null);
  const [userComplex, setUserComplex] = useState(null);

  const updateUser = (userValue) => {
    setUserCredentials(userValue);
  };

  const updateToken = (tokenValue) => {
    setToken(tokenValue);
  };

  const PUT_userPlayer = (player) => {
    instance
      .put(`jugador/${player.usuario}/`, player, {
        auth: {
          username: userCredentials.username,
          password: userCredentials.password,
        },
      })
      .then(({ data }) => {
        setUserPLayer(data);
        notify(true);
      })
      .catch(() => {
        notify(false);
      });
  };

  const PUT_userComplex = (complex) => {
    instance
      .put(`complejo/${complex.usuario}/`, complex, {
        auth: {
          username: userCredentials.username,
          password: userCredentials.password,
        },
      })
      .then(({ data }) => {
        setUserComplex(data);
        notify(true);
      })
      .catch(() => {
        notify(false);
      });
  };

  const logout = () => {
    instance.get(`logout/?token=${token}`);

    setUserCredentials({
      username: "",
      password: "",
      id: "",
      is_jugador: false,
      is_complejo: false,
      perfil_completo: false,
    });
    setUserPLayer(null);
    setUserComplex(null);
    navigate("login");
  };

  const getUserPlayer = (id) => {
    instance.get(`jugador/${id}/`).then(({ data }) => {
      setUserPLayer(data);
    });
  };

  const getUserComplex = (id) => {
    instance.get(`jugador/${id}/`).then(({ data }) => {
      setUserComplex(data);
    });
  };

  const notify = (resolve) =>
    resolve
      ? toast("Cambios guardados", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: "profile--update--toast",
          draggablePercent: 60,
          autoClose: 1000,
          icon: () => (
            <img
              className="profile--update--toast--icon"
              src={SuccesIcon}
              alt="icon"
            />
          ),
        })
      : toast.error("Ocurrio un error", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: "profile--update--toast--error",
          draggablePercent: 60,
          autoClose: 1000,
        });

  return (
    <UserContext.Provider
      value={{
        userCredentials,
        token,
        userPlayer,
        userComplex,
        updateUser,
        updateToken,
        PUT_userPlayer,
        PUT_userComplex,
        logout,
        getUserPlayer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
