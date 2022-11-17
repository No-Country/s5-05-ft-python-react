import { useState } from "react";
// import FemalePlayer from "../../assets/profile/female_player.png";
import AvailableIcon from "../../assets/profile/available_icon.png";
import GenreIcon from "../../assets/profile/genre_icon.png";
import LevelIcon from "../../assets/profile/level_icon.png";
import MalePlayer from "../../assets/profile/male_player.png";
import PositionIcon from "../../assets/profile/position_icon.png";
import WtsIcon from "../../assets/profile/wts_icon.png";
import { openInNewTab } from "../../helpers/openInNewTab";
import "./profile.css";
import { ProfileUpdateComplex } from "./ProfileUpdate/Complex/ProfileUpdateComplex";
import { ProfileUpdatePlayer } from "./ProfileUpdate/Player/ProfileUpdatePlayer";
export const Profile = () => {
	const [user, setUser] = useState("player");
	const [updateData, setUpdateData] = useState(false);

	const handleUpdateData = () => {
		setUpdateData(!updateData);
	};

	return (
		<div className='container--section--profile'>
			<div className='container--profile'>
				<button
					className={
						updateData
							? "profile--button--updateData"
							: "profile--button--saveData"
					}
					onClick={handleUpdateData}>
					{updateData ? "Guardar Cambios" : "Actualizar Perfil"}
				</button>
				{user === "player" ? (
					<ProfileUpdatePlayer updateData={updateData} />
				) : (
					<ProfileUpdateComplex updateData={updateData} />
				)}
			</div>
		</div>
	);
};
