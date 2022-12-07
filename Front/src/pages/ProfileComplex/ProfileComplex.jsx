import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourtsIcon from "../../assets/profile/courts_icon.png";
import CourtImage from "../../assets/profile/img_complex.jpg";
import LocationIcon from "../../assets/profile/location_icon.png";
import PositionIcon from "../../assets/profile/position_icon.png";
import RoofIcon from "../../assets/profile/roof_icon.png";
import SurfaceIcon from "../../assets/profile/surface_icon.png";
import WallIcon from "../../assets/profile/wall_icon.png";
import WtsIcon from "../../assets/profile/wts_icon.png";
import { instance } from "../../axios/axiosConfig";
import { Loading } from "../../components/Loading/Loading";
import { ErrorComplex } from "../404Complex/ErrorComplex";

import "./profileComplex.css";

export const ProfileComplex = () => {
	const { idComplex } = useParams();
	const [userComplex, setUserComplex] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		instance
			.get(`complejo/${idComplex}`)
			.then(({ data }) => {
				!data.message && setUserComplex(data);
			})
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
		console.log(idComplex);
	}, [idComplex]);

	return (
		<div className='container--section--profileComplex'>
			{loading ? (
				<Loading />
			) : userComplex === null ? (
				<ErrorComplex />
			) : (
				<div className='container--profileComplex'>
					<div className='container--profileComplex--avatar--name'>
						<img
							className='profileComplex--avatar'
							src={CourtImage}
							alt='avatar icon'
						/>
						<h2 className='profileComplex--name'>
							{userComplex.nombre}
						</h2>
					</div>
					<div className='container--profileComplex--info'>
						<div className='container--profileComplex--info--adress'>
							<img
								className='profileComplex--info--icon'
								src={LocationIcon}
								alt='complex adress'
							/>
							<div className='profileComplex--info--data'>
								<div className='profileComplex--info--adress--text'>
									Dirección
								</div>
								<div className='profileComplex--info--adress--name'>
									{userComplex.calle} {userComplex.altura} -{" "}
									{userComplex.ciudad} , {userComplex.pais}.
								</div>
							</div>
						</div>
						<div className='container--profileComplex--info--contact'>
							<img
								className='profileComplex--info--icon'
								src={WtsIcon}
								alt='complex adress'
							/>
							<div className='profileComplex--info--contact--text'>
								Contacto
							</div>
							<div className='profileComplex--info--contact--number'>
								159159159159
							</div>
						</div>

						<div className='container--profileComplex--info--courts'>
							<img
								className='profileComplex--info--icon'
								src={CourtsIcon}
								alt='complex courts'
							/>
							<div className='profileComplex--info--courts--text'>
								Canchas
							</div>
							<div className='profileComplex--info--courts--name'>
								{userComplex.cant_cancha}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
