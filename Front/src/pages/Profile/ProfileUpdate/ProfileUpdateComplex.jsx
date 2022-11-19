import AvatarCourt from "../../../assets/profile/img_complex.jpg";
import PhotoIcon from "../../../assets/profile/photo_icon.png";

const complex = {
	name: "Nombre de las canchas",
	address: "Direccion XXXXX",
	country: "Pais XXXXX",
	city: "Ciudad XXXXX",
	available: "Lista de Horarios",
	contact: "1234567899",
};

export const ProfileUpdateComplex = ({ updateData }) => {
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
						className='profile--update--cameraIcon'
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
			/>
		</div>
	);
};
