import { useState } from "react";
import AvatarCourt from "../../../assets/profile/img_complex.jpg";
import PhotoIcon from "../../../assets/profile/photo_icon.png";
import {
	validStringLength,
	validStringNumber,
} from "../../../helpers/validations";

const complex = {
	name: "Nombre de la cancha",
	address: "Direccion XXXXX",
	country: "Pais XXXXX",
	city: "Ciudad XXXXX",
	available: "Lista de Horarios",
	contact: "1234567899",
};

export const ProfileUpdateComplex = ({ updateData, setUpdateData }) => {
	//updaters
	const [nameUpdate, setNameUpdate] = useState(complex.name);
	const [adressUpdate, setAdressUpdate] = useState(complex.address);
	const [cityUpdate, setCityUpdate] = useState(complex.city);
	const [countryUpdate, setCountryUpdate] = useState(complex.country);
	const [availableUpdate, setAvailableUpdate] = useState(complex.available);
	const [contactUpdate, setContactUpdate] = useState(complex.contact);

	//errors
	const [errorName, setErrorName] = useState(false);
	const [errorAdress, setErrorAdress] = useState(false);
	const [errorCity, setErrorCity] = useState(false);
	const [errorCountry, setErrorCountry] = useState(false);
	const [errorContact, setErrorContact] = useState(false);

	const handleName = (e) => {
		validStringLength(e) ? setErrorName(false) : setErrorName(true);
		setNameUpdate(e);
	};
	const handleAdress = (e) => {
		validStringLength(e) ? setErrorAdress(false) : setErrorAdress(true);
		setAdressUpdate(e);
	};
	const handleCity = (e) => {
		validStringLength(e) ? setErrorCity(false) : setErrorCity(true);
		setCityUpdate(e);
	};
	const handleCountry = (e) => {
		validStringLength(e) ? setErrorCountry(false) : setErrorCountry(true);
		setCountryUpdate(e);
	};
	const handleAvailable = (e) => {
		setAvailableUpdate(e);
	};
	const handleContact = (e) => {
		validStringNumber(e) ? setErrorContact(false) : setErrorContact(true);
		setContactUpdate(e);
	};

	const handleCancelButton = () => {
		setErrorName(false);
		setErrorAdress(false);
		setErrorCity(false);
		setErrorCountry(false);
		setErrorContact(false);
		setNameUpdate(complex.name);
		setAdressUpdate(complex.address);
		setCityUpdate(complex.city);
		setCountryUpdate(complex.country);
		setContactUpdate(complex.contact);
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

			<div className='container--profile--sections'>
				<label
					className={`profile--update--label ${
						updateData ? "show_time_5" : ""
					} `}>
					{updateData ? "Horarios" : ""}
				</label>
				<input
					className='profile--update--input'
					type='text'
					value={availableUpdate}
					disabled={updateData ? false : true}
					onChange={(e) => handleAvailable(e.target.value)}
				/>
				<div className='profile--update--error'>Error Horarios</div>
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
		</div>
	);
};
