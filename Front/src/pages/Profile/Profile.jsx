import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/userContext";
import "./profile.css";
import { ProfileUpdateComplex } from "./ProfileUpdate/ProfileUpdateComplex";
import { ProfileUpdatePlayer } from "./ProfileUpdate/ProfileUpdatePlayer";

export const Profile = () => {
	const { userCredentials } = useContext(UserContext);

	return (
		<div className='container--section--profile'>
			<div className='container--profile'>
				{userCredentials.is_jugador ? (
					<ProfileUpdatePlayer />
				) : (
					<ProfileUpdateComplex />
				)}
			</div>
		</div>
	);
};
