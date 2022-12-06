import { useState } from "react";
import AvatarCourt from "../../../assets/profile/img_complex.jpg";
import PhotoIcon from "../../../assets/profile/photo_icon.png";
import {
	validNumberString,
	validStringLength,
	validStringNumber,
} from "../../../helper/validations";

export const ProfileUpdateComplex = ({
	userComplex,
	updateData,
	setUpdateData,
}) => {
	//updaters
	const [nameUpdate, setNameUpdate] = useState(userComplex.nombre);
	const [adressUpdate, setAdressUpdate] = useState(userComplex.altura);
	const [streetUpdate, setStreetUpdate] = useState(userComplex.calle);
	const [cityUpdate, setCityUpdate] = useState(userComplex.ciudad);
	const [countryUpdate, setCountryUpdate] = useState(userComplex.pais);
	const [contactUpdate, setContactUpdate] = useState(userComplex.contacto);
	const [courtsUpdate, setCourtsUpdate] = useState(userComplex.cant_cancha);
	const [userNumber, setUserNumber] = useState(userComplex.usuario);

	// const [coverUpdate, setCoverUpdate] = useState(userComplex.cover);
	// const [surfaceUpdate, setSurfaceUpdate] = useState(userComplex.surface);
	// const [wallUpdate, setWallUpdate] = useState(userComplex.wall);

	//errors
	const [errorName, setErrorName] = useState(false);
	const [errorStreet, setErrorStreet] = useState(false);
	const [errorAdress, setErrorAdress] = useState(false);
	const [errorCity, setErrorCity] = useState(false);
	const [errorCountry, setErrorCountry] = useState(false);
	const [errorContact, setErrorContact] = useState(false);
	const [errorCourt, setErrorCourts] = useState(false);

	const handleName = (e) => {
		validStringLength(e) ? setErrorName(false) : setErrorName(true);
		setNameUpdate(e);
	};
	const handleAdress = (e) => {
		validNumberString(e) ? setErrorAdress(false) : setErrorAdress(true);
		setAdressUpdate(e);
	};
	const handleStreet = (e) => {
		validStringLength(e) ? setErrorStreet(false) : setErrorStreet(true);
		setStreetUpdate(e);
	};
	const handleCity = (e) => {
		validStringLength(e) ? setErrorCity(false) : setErrorCity(true);
		setCityUpdate(e);
	};
	const handleCountry = (e) => {
		validStringLength(e) ? setErrorCountry(false) : setErrorCountry(true);
		setCountryUpdate(e);
	};
	const handleContact = (e) => {
		validStringNumber(e) ? setErrorContact(false) : setErrorContact(true);
		setContactUpdate(e);
	};
	const handleCourts = (e) => {
		!isNaN(e) && e.length > 0
			? setErrorCourts(false)
			: setErrorCourts(true);
		setCourtsUpdate(e);
	};

	const handleCancelButton = () => {
		setErrorName(false);
		setErrorAdress(false);
		setErrorStreet(false);
		setErrorCity(false);
		setErrorCountry(false);
		setErrorContact(false);
		setErrorCourts(false);
		setNameUpdate(userComplex.nombre);
		setStreetUpdate(userComplex.altura);
		setAdressUpdate(userComplex.calle);
		setCityUpdate(userComplex.ciudad);
		setCountryUpdate(userComplex.pais);
		setContactUpdate(userComplex.contacto);
		setCourtsUpdate(userComplex.cant_cancha);
		// setCoverUpdate(userComplex.cover);
		// setSurfaceUpdate(userComplex.surface);
		// setWallUpdate(userComplex.wall);
		setUpdateData(false);
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
					className='profileComplex--avatar'
					src={AvatarCourt}
					alt='avatar icon'
				/>
				{updateData && (
					<img
						className='profile--updateComplex--cameraIcon'
						src={PhotoIcon}
						alt='camera icon'
					/>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_6" : ""
					} `}>
					{updateData ? "Canchas" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorCourt && "borderColor--input--error"
					} `}
					type='text'
					value={courtsUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleCourts(e.target.value)}
				/>
				{errorCourt && (
					<div className='profile--update--error'>
						Debe ser número
					</div>
				)}
			</div>

			{/* <div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_6" : ""
					} `}>
					{updateData ? "Cubierta" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={coverUpdate}
					onChange={(e) => setCoverUpdate(e.target.value)}>
					<option value='Techada'>Techada</option>
					<option value='Aire Libre'>Aire Libre</option>
					<option value='ambas'>Ambas Opciones</option>
				</select>
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_6" : ""
					} `}>
					{updateData ? "Superficie" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={surfaceUpdate}
					onChange={(e) => setSurfaceUpdate(e.target.value)}>
					<option value='Cemento'>Cemento</option>
					<option value='Sintetico'>Sintetico</option>
					<option value='ambas'>Ambas Opciones</option>
				</select>
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_6" : ""
					} `}>
					{updateData ? "Paredes" : ""}
				</label>
				<select
					className='profile--update--input'
					disabled={updateData ? false : true}
					value={wallUpdate}
					onChange={(e) => setWallUpdate(e.target.value)}>
					<option value='Cemento'>Cemento</option>
					<option value='Blindex'>Blindex</option>
					<option value='ambas'>Ambas Opciones</option>
				</select>
			</div> */}

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label  ${
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
						Nombre debe ser mayor a 3 caracteres
					</div>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_6" : ""
					} `}>
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
						updateData ? "show_time_2" : ""
					}`}>
					{updateData ? "Direccion" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorAdress && "borderColor--input--error"
					} `}
					type='text'
					value={adressUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleAdress(e.target.value)}
				/>
				{errorAdress && (
					<div className='profile--update--error'>
						Deben ser números
					</div>
				)}
			</div>
			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_2" : ""
					}`}>
					{updateData ? "Calle" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorStreet && "borderColor--input--error"
					} `}
					type='text'
					value={streetUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleStreet(e.target.value)}
				/>
				{errorStreet && (
					<div className='profile--update--error'>
						Dirección debe ser mayor a 3 caracteres
					</div>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_3" : ""
					} `}>
					{updateData ? "Ciudad" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorCity && "borderColor--input--error"
					} `}
					type='text'
					value={cityUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleCity(e.target.value)}
				/>
				{errorCity && (
					<div className='profile--update--error'>
						Ciudad debe ser mayor a 3 caracteres
					</div>
				)}
			</div>

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_4" : ""
					} `}>
					{updateData ? "Pais" : ""}
				</label>
				<input
					className={`profile--update--input ${
						errorCountry && "borderColor--input--error"
					} `}
					type='text'
					value={countryUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleCountry(e.target.value)}
				/>
				{errorCountry && (
					<div className='profile--update--error'>
						Pais debe ser mayor a 3 caracteres
					</div>
				)}
			</div>
		</div>
	);
};
