import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeCourt } from "./pages/HomeCourt";
import { ProfileComplex } from "./pages/ProfileComplex/ProfileComplex";
import { ProfilePlayer } from "./pages/ProfilePlayer/ProfilePlayer";

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeCourt />} />
			<Route
				path='/profile/complex/:idComplex'
				element={<ProfileComplex />}
			/>
			<Route
				path='/profile/player/:idPlayer'
				element={<ProfilePlayer />}
			/>
			<Route path='/profile' element={<ProfilePlayer />} />
			<Route path='/login' />
			<Route path='/register' />
		</Routes>
	);
};
