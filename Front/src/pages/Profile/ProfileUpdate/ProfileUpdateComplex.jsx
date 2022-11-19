import { useState } from "react";
import AvatarCourt from "../../../assets/profile/img_complex.jpg";
import PhotoIcon from "../../../assets/profile/photo_icon.png";

const complex = {
	name: "Nombre de la cancha",
	address: "Direccion XXXXX",
	country: "Pais XXXXX",
	city: "Ciudad XXXXX",
	available: "Lista de Horarios",
	contact: "1234567899",
};

export const ProfileUpdateComplex = ({ updateData }) => {
	const [nameUpdate, setNameUpdate] = useState();
	const [adressUpdate, setAdressUpdate] = useState();
	const [cityUpdate, setCityUpdate] = useState();
	const [countryUpdate, setCountryUpdate] = useState();
	const [availableUpdate, setAvailableUpdate] = useState();
	const [contactUpdate, setContactUpdate] = useState();

	return (
		<div className='container--profile--update'>
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
			<label
				className={`profile--update--label  ${
					updateData ? "show_time_1" : ""
				}`}>
				{updateData ? "Nombre" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={complex.name}
				disabled={updateData ? false : true}
				onChange={(e) => setNameUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_2" : ""
				}`}>
				{updateData ? "Direccion" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={complex.address}
				disabled={updateData ? false : true}
				onChange={(e) => setAdressUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_3" : ""
				} `}>
				{updateData ? "Ciudad" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={complex.city}
				disabled={updateData ? false : true}
				onChange={(e) => setCityUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_4" : ""
				} `}>
				{updateData ? "Pais" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={complex.country}
				disabled={updateData ? false : true}
				onChange={(e) => setCountryUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_5" : ""
				} `}>
				{updateData ? "Horarios" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={complex.available}
				disabled={updateData ? false : true}
				onChange={(e) => setAvailableUpdate(e.target.value)}
			/>
			<label
				className={`profile--update--label ${
					updateData ? "show_time_6" : ""
				} `}>
				{updateData ? "Contacto" : ""}
			</label>
			<input
				className='profile--update--input'
				type='text'
				placeholder={complex.contact}
				disabled={updateData ? false : true}
				onChange={(e) => setContactUpdate(e.target.value)}
			/>
		</div>
	);
};
