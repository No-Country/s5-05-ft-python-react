import CourtsIcon from "../../assets/profile/courts_icon.png";
import CourtImage from "../../assets/profile/img_complex.jpg";
import LocationIcon from "../../assets/profile/location_icon.png";
import PositionIcon from "../../assets/profile/position_icon.png";
import RoofIcon from "../../assets/profile/roof_icon.png";
import SurfaceIcon from "../../assets/profile/surface_icon.png";
import WallIcon from "../../assets/profile/wall_icon.png";
import WtsIcon from "../../assets/profile/wts_icon.png";

import "./profileComplex.css";

export const ProfileComplex = () => {
	return (
		<div className='container--section--profileComplex'>
			<div className='container--profileComplex'>
				<div className='container--profileComplex--avatar--name'>
					<img
						className='profileComplex--avatar'
						src={CourtImage}
						alt='avatar icon'
					/>
					<h2 className='profileComplex--name'>Nombre Canchas</h2>
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
								Calle XXXXX , ciudad , pais.
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
							12364897879
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
							3
						</div>
					</div>

					{/* <div className='container--profileComplex--info--surface'>
						<img
							className='profileComplex--info--icon'
							src={SurfaceIcon}
							alt='complex surface'
						/>

						<div className='profileComplex--info--data'>
							<div className='profileComplex--info--surface--text'>
								Superficie
							</div>
							<div className='profileComplex--info--surface--name'>
								Sintetico
							</div>
						</div>
					</div> */}

					{/* <div className='container--profileComplex--info--walls'>
						<img
							className='profileComplex--info--icon'
							src={WallIcon}
							alt='court walls'
						/>

						<div className='profileComplex--info--data'>
							<div className='profileComplex--info--walls--text'>
								Paredes
							</div>
							<div className='profileComplex--info--walls--name'>
								Blindex
							</div>
						</div>
					</div> */}

					{/* <div className='container--profileComplex--info--cover'>
						<img
							className='profileComplex--info--icon'
							src={RoofIcon}
							alt='court cover'
						/>
						<div className='profileComplex--info--data'>
							<div className='profileComplex--info--cover--text'>
								Cubierta
							</div>
							<div className='profileComplex--info--cover--name'>
								Aire Libre
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};
