// import FemalePlayer from "../../../assets/profile/female_player.png";
import { useState } from "react";
import MalePlayer from "../../../assets/profile/male_player.png";
import PhotoIcon from "../../../assets/profile/photo_icon.png";
const user = {
	name: "Nombre",
	lastName: "Apellido",
	position: "Drive",
	available: "Lista de Horarios",
	contact: "1234567899",
	genre: "Hombre",
};

export const ProfileUpdatePlayer = ({ updateData }) => {
	const [nameUpdate, setNameUpdate] = useState();
	const [lastNameUpdate, setLastNameUpdate] = useState();
	const [positionUpdate, setPositionUpdate] = useState();
	const [availableUpdate, setAvailableUpdate] = useState();
	const [contactUpdate, setContactUpdate] = useState();
	const [genreUpdate, setGenreUpdate] = useState();

	return (
		<div className='container--profile--update'>
			<div className='container--profile--avatar'>
				<img
					className='profilePlayer--avatar'
					src={MalePlayer}
					alt='avatar icon'
				/>
				{updateData && (
					<img
						className='profile--update--cameraIcon'
						src={PhotoIcon}
						alt='camera icon'
					/>
				)}
			</div>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_1" : ""
				}`}>
				{updateData ? "Nombre" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={user.name}
				disabled={updateData ? false : true}
				onChange={(e) => setNameUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_2" : ""
				}`}>
				{updateData ? "Apellido" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={user.lastName}
				disabled={updateData ? false : true}
				onChange={(e) => setLastNameUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_3" : ""
				}`}>
				{updateData ? "Posición" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={user.position}
				disabled={updateData ? false : true}
				onChange={(e) => setPositionUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_4" : ""
				}`}>
				{updateData ? "Horarios" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={user.available}
				disabled={updateData ? false : true}
				onChange={(e) => setAvailableUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_5" : ""
				}`}>
				{updateData ? "Contacto" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={user.contact}
				disabled={updateData ? false : true}
				onChange={(e) => setContactUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_6" : ""
				}`}>
				{updateData ? "Genero" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={user.genre}
				disabled={updateData ? false : true}
				onChange={(e) => setGenreUpdate(e.target.value)}
			/>
		</div>
	);
};
