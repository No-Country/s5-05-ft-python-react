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
		<div className='container--profile--update'>
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
			/>
		</div>
	);
};
