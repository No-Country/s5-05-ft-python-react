import { useEffect, useState } from "react";
import FemalePlayer from "../../../assets/profile/female_player.png";
import MalePlayer from "../../../assets/profile/male_player.png";
import PhotoIcon from "../../../assets/profile/photo_icon.png";
import {
	validStringLength,
	validStringLetters,
	validStringNumber,
} from "../../../helper/validations";
const user = {
	name: "Nombre",
	lastName: "Apellido",
	position: "drive",
	level: "7",
	available: "Lista de Horarios",
	contact: "1234567899",
	genre: "h",
};

export const ProfileUpdatePlayer = ({
	updateData,
	setUpdateData,
	setDisableButton,
}) => {
	//updaters
	const [nameUpdate, setNameUpdate] = useState(user.name);
	const [lastNameUpdate, setLastNameUpdate] = useState(user.lastName);
	const [positionUpdate, setPositionUpdate] = useState(user.position);
	const [levelUpdate, setLevelUpdate] = useState(user.level);
	const [availableUpdate, setAvailableUpdate] = useState(user.available);
	const [contactUpdate, setContactUpdate] = useState(user.contact);
	const [genreUpdate, setGenreUpdate] = useState(user.genre);

	// errors
	const [errorName, setErrorName] = useState(false);
	const [errorLastName, setErrorLastName] = useState(false);
	const [errorContact, setErrorContact] = useState(false);

	const [buttonCancel, setButtonCancel] = useState(false);

	useEffect(() => {
		errorName || errorLastName || errorContact
			? setDisableButton(true)
			: setDisableButton(false);
	}, [errorName, errorLastName, errorContact, setDisableButton]);

	//function handlers
	const handleName = (e) => {
		validStringLength(e) && validStringLetters(e)
			? setErrorName(false)
			: setErrorName(true);
		setNameUpdate(e);
	};

	const handleLastName = (e) => {
		validStringLength(e) && validStringLetters(e)
			? setErrorLastName(false)
			: setErrorLastName(true);
		setLastNameUpdate(e);
	};

	const handleContact = (e) => {
		validStringNumber(e) ? setErrorContact(false) : setErrorContact(true);
		setContactUpdate(e);
	};

	const handleCancelButton = () => {
		setErrorName(false);
		setErrorLastName(false);
		setErrorContact(false);
		setNameUpdate(user.name);
		setLastNameUpdate(user.lastName);
		setPositionUpdate(user.position);
		setAvailableUpdate(user.available);
		setContactUpdate(user.contact);
		setGenreUpdate(user.genre);
		setUpdateData(false);
		setButtonCancel(true);
	};

	return (
		<div className='container--profile--update'>
			{updateData && (
				<button
					className='button--profile--cancel'
					onClick={handleCancelButton}>
					Cancelar Cambios
				</button>
			)}
			<div className='container--profile--avatar'>
				<img
					className='profilePlayer--avatar'
					src={genreUpdate === "h" ? MalePlayer : FemalePlayer}
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

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_1" : ""
					}`}>
					{updateData ? "Nombre" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorName && "borderColor--input--error"
					} `}
					type='text'
					value={nameUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleName(e.target.value)}
				/>
				{errorName && (
					<div className='profile--update--error'>
						Nombre debe ser válido y mayor a 3 caracteres
					</div>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_2" : ""
					}`}>
					{updateData ? "Apellido" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorLastName && "borderColor--input--error"
					} `}
					type='text'
					value={lastNameUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleLastName(e.target.value)}
				/>
				{errorLastName && (
					<div className='profile--update--error'>
						Apellido debe ser válido y mayor a 3 caracteres
					</div>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_3" : ""
					}`}>
					{updateData ? "Posición" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={positionUpdate}
					onChange={(e) => setPositionUpdate(e.target.value)}>
					<option value='reves'>Reves</option>
					<option value='drive'>Drive</option>
					<option value='allCourt'>Toda la Cancha</option>
				</select>
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_3" : ""
					}`}>
					{updateData ? "Nivel" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={levelUpdate}
					onChange={(e) => setLevelUpdate(e.target.value)}>
					<option value='7'>7</option>
					<option value='6'>6</option>
					<option value='5'>5</option>
					<option value='4'>4</option>
					<option value='3'>3</option>
					<option value='2'>2</option>
					<option value='1'>1</option>
				</select>
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_4" : ""
					}`}>
					{updateData ? "Horarios" : ""}
				</label>
				<input
					className='profile--update--input'
					type='text'
					value={availableUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => setAvailableUpdate(e.target.value)}
				/>
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_5" : ""
					}`}>
					{updateData ? "Contacto" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorContact && "borderColor--input--error"
					} `}
					type='text'
					value={contactUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleContact(e.target.value)}
				/>
				{errorContact && (
					<div className='profile--update--error'>
						Debe ser número válido y mayor a 8 caracteres
					</div>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_6" : ""
					}`}>
					{updateData ? "Genero" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={genreUpdate}
					onChange={(e) => setGenreUpdate(e.target.value)}>
					<option value='m'>Mujer</option>
					<option value='h'>Hombre</option>
				</select>
			</div>
		</div>
	);
};
