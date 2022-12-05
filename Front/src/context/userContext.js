import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [token, setToken] = useState();
	const [userPlayer, setUserPLayer] = useState({});
	const [userComplex, setUserComplex] = useState({});

	const login = (user) => {
		// login with email + password
		fetch("URL/api/login/", {
			method: "POST",
			body: JSON.stringify(user),
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const createUser = (user) => {
		fetch("URL/api/usuario/", {
			method: "POST",
			body: JSON.stringify(user),
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const updateToken = () => {};

	const updateUserPlayer = async (player) => {
		let updated;
		await fetch("URL/api/jugador/id/", {
			method: "PUT",
			body: JSON.stringify(player),
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setUserPLayer(player);
				updated = true;
			})
			.catch((error) => {
				console.log(error);
				updated = false;
			});
		return updated;
	};

	const updateUserComplex = async (complex) => {
		let updated;
		await fetch("URL/api/complejo/id/", {
			method: "PUT",
			body: JSON.stringify(complex),
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setUserComplex(complex);
				updated = true;
			})
			.catch((error) => {
				console.log(error);
				updated = false;
			});

		return updated;
	};

	const logout = (token) => {
		fetch(`URL/api/api/logout/?token=${token}`, () => {});
	};

	const getUserPlayer = async (id) => {
		let userSearch;
		await fetch("URL/api/jugador/id/")
			.then((response) => response.json())
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
	const getUserComplex = async (idComplex) => {
		let userSearch;
		await fetch(`URL/api/complejo/${idComplex}/`)
			.then((response) => response.json())
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

	return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
