import { Route, Routes } from "react-router-dom";
import "./App.css";

import { PlayerTimesDisplay } from "./components/PlayerTimesDisplay/PlayerTimesDisplay";
import { SelectTime2 } from "./components/selectTime/SelectTime";
import { Complex } from "./pages/Complex/Complex";
import { ComplexForm } from "./pages/ComplexForm/ComplexForm";
import { Homepage } from "./pages/HomePage/HomePage";
import { Login } from "./pages/login/Login";
import { PlayerForm } from "./pages/PlayerForm/PlayerForm";
import { Players } from "./pages/Players/Players";
import { Profile } from "./pages/Profile/Profile";
import { ProfileComplex } from "./pages/ProfileComplex/ProfileComplex";
import { ProfilePlayer } from "./pages/ProfilePlayer/ProfilePlayer";
import { Register } from "./pages/Register/Register";

export const App = () => {
	// post
	fetch("http://127.0.0.1:8000/api/usuario/", {
		method: "get",
		body: JSON.stringify({
			email: "nico6@gmail.com",
			password: "12345",
			is_jugador: true,
			is_complejo: false,
			perfil_completo: false
		}),
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache",
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json"
		}
	});

	// get
	fetch("http://127.0.0.1:8000/api/usuario/")
		.then((response) => response.json())
		.then((rta) => console.log(rta));

	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/complex' element={<Complex />} />
			<Route path='/players' element={<Players />} />
			<Route
				path='/profile/complex/:idComplex'
				element={<ProfileComplex />}
			/>
			<Route
				path='/profile/player/:idPlayer'
				element={<ProfilePlayer />}
			/>
			<Route path='/profile' element={<Profile />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/form/complex' element={<ComplexForm />} />
			<Route path='/form/player' element={<PlayerForm />} />
		</Routes>
	);
};
