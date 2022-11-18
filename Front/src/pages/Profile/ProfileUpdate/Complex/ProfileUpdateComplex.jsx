import "./profileUpdateComplex.css";

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
		<div className='container--profile--updateComplex'>
			<label className='profile--updateComplex--label'>
				{updateData ? "Nombre" : ""}
			</label>
			<input
				className='profile--updateComplex--input'
				type='text'
				placeholder={complex.name}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updateComplex--label'>
				{updateData ? "Direccion" : ""}
			</label>
			<input
				className='profile--updateComplex--input'
				type='text'
				placeholder={complex.address}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updateComplex--label'>
				{updateData ? "Ciudad" : ""}
			</label>
			<input
				className='profile--updateComplex--input'
				type='text'
				placeholder={complex.city}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updateComplex--label'>
				{updateData ? "Pais" : ""}
			</label>
			<input
				className='profile--updateComplex--input'
				type='text'
				placeholder={complex.country}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updateComplex--label'>
				{updateData ? "Horarios" : ""}
			</label>
			<input
				className='profile--updateComplex--input'
				type='text'
				placeholder={complex.available}
				disabled={updateData ? false : true}
			/>
			<label className='profile--updateComplex--label'>
				{updateData ? "Contacto" : ""}
			</label>
			<input
				className='profile--updateComplex--input'
				type='text'
				placeholder={complex.contact}
				disabled={updateData ? false : true}
			/>
		</div>
	);
};
