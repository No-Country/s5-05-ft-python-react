import { useState } from "react";
// import FemalePlayer from "../../assets/profile/female_player.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccesIcon from "../../assets/profile/succes_icon.png";
import "./profile.css";
import { ProfileUpdateComplex } from "./ProfileUpdate/ProfileUpdateComplex";
import { ProfileUpdatePlayer } from "./ProfileUpdate/ProfileUpdatePlayer";
export const Profile = () => {
	// const [user, setUser] = useState("complex");
	const [user, setUser] = useState("player");
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
						updateData={updateData}
						setUpdateData={setUpdateData}
						setDisableButton={setDisableButton}
					/>
				) : (
					<ProfileUpdateComplex
						updateData={updateData}
						setUpdateData={setUpdateData}
					/>
				)}
			</div>
			<ToastContainer />
		</div>
	);
};
