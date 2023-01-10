import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AvailableIcon from "../../assets/profile/available_icon.png";
import FemalePlayer from "../../assets/profile/female_player.png";
import GenreIcon from "../../assets/profile/genre_icon.png";
import LevelIcon from "../../assets/profile/level_icon.png";
import MalePlayer from "../../assets/profile/male_player.png";
import PositionIcon from "../../assets/profile/position_icon.png";
import RoofIcon from "../../assets/profile/roof_icon.png";
import SurfaceIcon from "../../assets/profile/surface_icon.png";
import WallIcon from "../../assets/profile/wall_icon.png";
import WtsIcon from "../../assets/profile/wts_icon.png";
import { instance } from "../../axios/axiosConfig";
import { Loading } from "../../components/Loading/Loading";
import { PlayerTimesDisplay } from "../../components/PlayerTimesDisplay/PlayerTimesDisplay";
import { openInNewTab } from "../../helper/openInNewTab";
import { ErrorPlayer } from "../404Player/ErrorPlayer";
import "./profilePlayer.css";

export const ProfilePlayer = () => {
	const { idPlayer } = useParams();
	const [userPlayer, setUserPlayer] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		instance
			.get(`jugador/${idPlayer}/`)
			.then(({ data }) => {
				!data.message && setUserPlayer(data);
			})
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, [idPlayer]);

	const preferencesCourtCover = () => {
		let valueReturn = "";
		let T = userPlayer.cancha_specs.includes("T");
		let AL = userPlayer.cancha_specs.includes("AL");
		if (T & AL) {
			valueReturn = "Cubierta Techada o al Aire Libre";
		} else {
			if (T) {
				valueReturn = "Cubierta Techada";
			} else {
				valueReturn = "Cubierta al Aire Libre";
			}
		}
		return valueReturn;
	};

	const preferencesCourtSurface = () => {
		let valueReturn = "";
		let SC = userPlayer.cancha_specs.includes("SC");
		let SS = userPlayer.cancha_specs.includes("SS");
		if (SC & SS) {
			valueReturn = "Sup. Cemento o Sintetica";
		} else {
			if (SC) {
				valueReturn = "Sup. Cemento";
			} else {
				valueReturn = "Sup. Sintetica";
			}
		}
		return valueReturn;
	};

	const preferencesCourtWalls = () => {
		let valueReturn = "";
		let PC = userPlayer.cancha_specs.includes("PC");
		let PB = userPlayer.cancha_specs.includes("PB");
		if (PC & PB) {
			valueReturn = "Pared Cemento o Blindex";
		} else {
			if (PB) {
				valueReturn = "Pared Blindex";
			} else {
				valueReturn = "Pared Cemento";
			}
		}
		return valueReturn;
	};

	return (
		<div className='container--section--profilePlayer'>
			{loading ? (
				<Loading />
			) : userPlayer === null ? (
				<ErrorPlayer />
			) : (
				<div className='container--profilePlayer'>
					<div className='container--profilePlayer--avatar--name'>
						<img
							className='profilePlayer--avatar'
							src={
								userPlayer.sexo === "Masculino"
									? MalePlayer
									: FemalePlayer
							}
							alt='avatar icon'
						/>
						<div className='container--profilePlayer--name'>
							{userPlayer.apellido} {userPlayer.nombre}
						</div>
					</div>
					<div className='container--profilePlayer--info'>
						<div className='container--profilePlayer--info--level'>
							<img
								className='profilePlayer--info--icon'
								src={LevelIcon}
								alt='player level'
							/>
							<div className='profilePlayer--info--level--text'>
								Nivel
							</div>
							<div className='profilePlayer--info--level--number'>
								{userPlayer.nivel}
							</div>
						</div>

						<div className='container--profilePlayer--info--position'>
							<img
								className='profilePlayer--info--icon'
								src={PositionIcon}
								alt='player level'
							/>
							<div className='profilePlayer--position--value'>
								{userPlayer.rol === "Ambos"
									? "Drive y Reves"
									: userPlayer.rol}
							</div>
						</div>

						<div className='container--profilePlayer--info--level'>
							<img
								className='profilePlayer--info--icon'
								src={SurfaceIcon}
								alt='surface court'
							/>
							<div className='profilePlayer--info--level--text'>
								{preferencesCourtSurface()}
							</div>
						</div>
						<div className='container--profilePlayer--info--level'>
							<img
								className='profilePlayer--info--icon'
								src={WallIcon}
								alt='surface court'
							/>
							<div className='profilePlayer--info--level--text'>
								{preferencesCourtWalls()}
							</div>
						</div>
						<div className='container--profilePlayer--info--level'>
							<img
								className='profilePlayer--info--icon'
								src={RoofIcon}
								alt='surface court'
							/>
							<div className='profilePlayer--info--level--text'>
								{preferencesCourtCover()}
							</div>
						</div>

						<div className='container--profilePlayer--info--available'>
							<img
								className='profilePlayer--info--icon'
								src={AvailableIcon}
								alt='player hours'
							/>
							<div className='container--profilePlayer--info--available--text'>
								<div className='profilePlayer--info--available--text'>
									Horarios Disponibles
								</div>
								<PlayerTimesDisplay
									availableTimes={userPlayer.grilla}
								/>
							</div>
						</div>

						<div className='container--profilePlayer--info--contact'>
							<img
								className='profilePlayer--info--icon'
								src={WtsIcon}
								alt='player contact'
							/>

							<div
								onClick={() =>
									openInNewTab(
										`https://wa.me/${userPlayer.telefono}`
									)
								}
								className='profilePlayer--info--contact--number'>
								{userPlayer.telefono}
							</div>
						</div>
						<div className='container--profilePlayer--info--genre'>
							<img
								className='profilePlayer--info--icon'
								src={GenreIcon}
								alt='player genre'
							/>
							<div className='profilePlayer--info--genre--text'>
								{userPlayer.sexo}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
