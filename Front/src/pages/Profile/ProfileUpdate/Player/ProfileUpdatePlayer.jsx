import "./profileUpdatePlayer.css";

const user = {
	name: "Nombre",
	lastName: "Apellido",
	position: "Drive",
	available: "Lista de Horarios",
	contact: "1234567899",
	genre: "Hombre",
};

export const ProfileUpdatePlayer = ({ updateData }) => {
	return (
		<div className='container--profile--updatePlayer'>
			<label className='profile--updatePlayer--label'>
				{updateData ? "Nombre" : ""}
			</label>
			<input
				className='profile--updatePlayer--input'
				type='text'
				placeholder={user.name}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updatePlayer--label'>
				{updateData ? "Apellido" : ""}
			</label>
			<input
				className='profile--updatePlayer--input'
				type='text'
				placeholder={user.lastName}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updatePlayer--label'>
				{updateData ? "Posición" : ""}
			</label>
			<input
				className='profile--updatePlayer--input'
				type='text'
				placeholder={user.position}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updatePlayer--label'>
				{updateData ? "Horarios" : ""}
			</label>
			<input
				className='profile--updatePlayer--input'
				type='text'
				placeholder={user.available}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updatePlayer--label'>
				{updateData ? "Contacto" : ""}
			</label>
			<input
				className='profile--updatePlayer--input'
				type='text'
				placeholder={user.contact}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updatePlayer--label'>
				{updateData ? "Genero" : ""}
			</label>
			<input
				className='profile--updatePlayer--input'
				type='text'
				placeholder={user.genre}
				disabled={updateData ? false : true}
			/>
		</div>
	);
};
