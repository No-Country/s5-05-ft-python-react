import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import FemalePlayer from "../../../assets/profile/female_player.png";
import MalePlayer from "../../../assets/profile/male_player.png";
import PhotoIcon from "../../../assets/profile/photo_icon.png";
import { PlayerTimeSelector } from "../../../components/PlayerTimeSelector/PlayerTimeSelector";
import { UserContext } from "../../../context/userContext";
import {
	validStringLength,
	validStringLetters,
	validStringNumber,
} from "../../../helper/validations";

export const ProfileUpdatePlayer = () => {
	const { userPlayer, PUT_userPlayer, logout } = useContext(UserContext);

	//updaters
	const [nameUpdate, setNameUpdate] = useState(userPlayer.nombre);
	const [lastNameUpdate, setLastNameUpdate] = useState(userPlayer.apellido);
	const [positionUpdate, setPositionUpdate] = useState(userPlayer.posicion);
	const [coverUpdate, setCoverUpdate] = useState(userPlayer.cover);
	const [surfaceUpdate, setSurfaceUpdate] = useState(userPlayer.surface);
	const [wallUpdate, setWallUpdate] = useState(userPlayer.wall);
	const [levelUpdate, setLevelUpdate] = useState(userPlayer.nivel);
	const [availableUpdate, setAvailableUpdate] = useState(userPlayer.grilla);
	const [contactUpdate, setContactUpdate] = useState(userPlayer.telefono);
	const [genreUpdate, setGenreUpdate] = useState(userPlayer.sexo);
	const [userNumber, setUserNumber] = useState(userPlayer.usuario);

	// errors
	const [errorName, setErrorName] = useState(false);
	const [errorLastName, setErrorLastName] = useState(false);
	const [errorContact, setErrorContact] = useState(false);
	const [errorTimes, setErrorTimes] = useState(false);

	const [buttonCancel, setButtonCancel] = useState(false);
	const [disableButton, setDisableButton] = useState(false);
	const [updateData, setUpdateData] = useState(false);

	useEffect(() => {
		errorName || errorLastName || errorContact || errorTimes
			? setDisableButton(true)
			: setDisableButton(false);
	}, [errorName, errorLastName, errorContact, errorTimes, setDisableButton]);

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

	const handleUpdateData = () => {
		if (updateData) {
			let newUser = {
				nombre: nameUpdate,
				apellido: lastNameUpdate,
				rol: positionUpdate,
				nivel: levelUpdate,
				grilla: availableUpdate,
				telefono: contactUpdate,
				sexo: genreUpdate,
				usuario: userNumber,
			};
			PUT_userPlayer(newUser);
		}

		setUpdateData(!updateData);
	};

	const handleCancelButton = () => {
		setErrorName(false);
		setErrorLastName(false);
		setErrorContact(false);
		setErrorTimes(false);
		setNameUpdate(userPlayer.nombre);
		setLastNameUpdate(userPlayer.apellido);
		setPositionUpdate(userPlayer.posicion);
		setSurfaceUpdate(userPlayer.surface);
		setWallUpdate(userPlayer.wall);
		setCoverUpdate(userPlayer.cover);
		setAvailableUpdate(userPlayer.grilla);
		setContactUpdate(userPlayer.telefono);
		setGenreUpdate(userPlayer.sexo);
		setLevelUpdate(userPlayer.nivel);
		setUpdateData(false);
		setButtonCancel(true);
	};

	return (
		<div className='container--profile--update'>
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
					<option value='Reves'>Reves</option>
					<option value='Drive'>Drive</option>
					<option value='Ambos'>Toda la Cancha</option>
				</select>
			</div>
			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_3" : ""
					}`}>
					{updateData ? "Superficie" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={surfaceUpdate}
					onChange={(e) => setSurfaceUpdate(e.target.value)}>
					<option value='reves'>Sintetico</option>
					<option value='drive'>Cemento</option>
					<option value='allCourt'>Ambas</option>
				</select>
			</div>
			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_3" : ""
					}`}>
					{updateData ? "Paredes" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={wallUpdate}
					onChange={(e) => setWallUpdate(e.target.value)}>
					<option value='reves'>Blindex</option>
					<option value='drive'>Cemento</option>
					<option value='allCourt'>Ambas</option>
				</select>
			</div>
			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_3" : ""
					}`}>
					{updateData ? "Cubierta" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={coverUpdate}
					onChange={(e) => setCoverUpdate(e.target.value)}>
					<option value='Reves'>Techada</option>
					<option value='Drive'>Aire Libre</option>
					<option value='Ambos'>Ambos</option>
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
				{!updateData ? (
					<input
						className='profile--update--input'
						type='text'
						value={"Horarios"}
						disabled={updateData ? false : true}
						onChange={(e) => setAvailableUpdate(e.target.value)}
					/>
				) : (
					<PlayerTimeSelector
						availableUpdate={availableUpdate}
						setAvailableUpdate={setAvailableUpdate}
						setErrorTimes={setErrorTimes}
					/>
				)}
				{errorTimes && (
					<div className='profile--update--error'>
						Debe seleccionar al menos un horario
					</div>
				)}
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
					<option value='Masculino'>Masculino</option>
					<option value='Femenino'>Femenino</option>
				</select>
			</div>
			<ToastContainer />
			<button
				className='profile--button--logout'
				onClick={() => logout(userNumber)}>
				Cerrar Sesion
			</button>
		</div>
	);
};
