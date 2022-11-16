import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeCourt } from "./pages/HomeCourt";
import { Profile } from "./pages/Profile/Profile";
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
			<Route path='/profile' element={<Profile />} />
			<Route path='/login' />
			<Route path='/register' />
		</Routes>
	);
};
