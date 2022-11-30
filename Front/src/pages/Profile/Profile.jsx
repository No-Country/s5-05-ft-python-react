import { useState } from "react";
// import FemalePlayer from "../../assets/profile/female_player.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccesIcon from "../../assets/profile/succes_icon.png";
import "./profile.css";
import { ProfileUpdateComplex } from "./ProfileUpdate/ProfileUpdateComplex";
import { ProfileUpdatePlayer } from "./ProfileUpdate/ProfileUpdatePlayer";

const userPlayer = {
	name: "Nombre",
	lastName: "Apellido",
	position: "drive",
	level: "7",
	available: [
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false],
	],
	contact: "1234567899",
	genre: "h",
};

const userComplex = {
	name: "Nombre de la cancha",
	address: "Direccion XXXXX",
	country: "Pais XXXXX",
	city: "Ciudad XXXXX",
	contact: "1234567899",
	courts: "4",
	cover: "Aire Libre",
	surface: "Cemento",
	wall: "Cemento",
};

export const Profile = () => {
	const [user, setUser] = useState("complex");
	// const [user, setUser] = useState("player");
	const [updateData, setUpdateData] = useState(false);
	const [disableButton, setDisableButton] = useState(false);

	const handleUpdateData = () => {
		updateData && notify();
		setUpdateData(!updateData);
	};

	const notify = (resolve = true) =>
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
		<div className='container--section--profile'>
			<div className='container--profile'>
				<button
					disabled={disableButton}
					className={`${
						updateData
							? "profile--button--updateData"
							: "profile--button--saveData"
					}
						${disableButton ? "profile--button--saveData--disabled" : ""}`}
					onClick={handleUpdateData}>
					{updateData ? "Guardar Cambios" : "Actualizar Perfil"}
				</button>
				{user === "player" ? (
					<ProfileUpdatePlayer
						userPlayer={userPlayer}
						updateData={updateData}
						setUpdateData={setUpdateData}
						setDisableButton={setDisableButton}
					/>
				) : (
					<ProfileUpdateComplex
						userComplex={userComplex}
						updateData={updateData}
						setUpdateData={setUpdateData}
					/>
				)}
			</div>
			<ToastContainer />
		</div>
	);
};
