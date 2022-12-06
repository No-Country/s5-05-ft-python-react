import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import SuccesIcon from "../assets/profile/succes_icon.png";
import { instance } from "../axios/axiosConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	// actualizar cuando completa form de login , para poder llamar a PUT
	const [userCredentials, setUserCredentials] = useState({
		username: "nico12@gmail.com",
		password: "123456789",
		id: "",
	});

	// actualizar cuando completa form de login
	const [token, setToken] = useState();

	//para manejar las vistas del usuario
	const [userType, setUserType] = useState("complex");

	// actualizar cuando completa form de jugador / complejo
	const [userPlayer, setUserPLayer] = useState(null);
	const [userComplex, setUserComplex] = useState(null);

	useEffect(() => {
		userPlayer !== null && setUserType("player");
		userComplex !== null && setUserType("complex");
	}, [userPlayer, userComplex]);

	const updateUser = (userValue) => {
		setUserCredentials(userValue);
	};

	const updateUserPlayer = (userPlayerValue) => {
		setUserPLayer(userPlayerValue);
	};

	const updateUserComplex = (userComplexValue) => {
		setUserComplex(userComplexValue);
	};

	const updateToken = (tokenValue) => {
		setToken(tokenValue);
	};

	const PUT_userPlayer = (player) => {
		console.log(player);
		instance
			.put(`jugador/${player.usuario}/`, player, {
				auth: {
					username: userCredentials.username,
					password: userCredentials.password,
				},
			})
			.then((resp) => {
				setUserPLayer(resp.data);
				notify(true);
			})
			.catch((err) => {
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
			.then((resp) => {
				setUserComplex(resp.data);
				notify(true);
			})
			.catch((err) => {
				notify(false);
			});
	};

	const logout = () => {
		instance
			.get(`logout/?token=${token}`)
			.then((response) => console.log(response));
	};

	const getUserPlayer = (id) => {
		let userSearch = {};
		instance
			.put(`jugador/${id}/`)
			.then((response) => {
				console.log(response);
				userSearch = response;
			})
			.catch((error) => {
				console.log(error);
				userSearch = null;
			});

		return userSearch;
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
							className='profile--update--toast--icon'
							src={SuccesIcon}
							alt='icon'
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
				userType,
				userPlayer,
				userComplex,
				updateUser,
				updateUserPlayer,
				updateUserComplex,
				updateToken,
				PUT_userPlayer,
				PUT_userComplex,
				logout,
				getUserPlayer,
			}}>
			{children}
		</UserContext.Provider>
	);
};
