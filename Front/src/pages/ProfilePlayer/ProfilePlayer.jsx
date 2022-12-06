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
import { Loading } from "../../components/Loading/Loading";
import { PlayerTimesDisplay } from "../../components/PlayerTimesDisplay/PlayerTimesDisplay";
import { openInNewTab } from "../../helper/openInNewTab";
import "./profilePlayer.css";

export const ProfilePlayer = () => {
	const { idPlayer } = useParams();
	const [userPlayer, setUserPlayer] = useState({});
	const [loading, setLoading] = useState();

	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/jugador/${idPlayer}`)
			.then((response) => response.json())
			.then((data) => {
				setUserPlayer(data);
			})
			.catch()
			.finally(setLoading(false));
	}, [idPlayer]);

	return loading ? (
		<Loading />
	) : (
		<div className='container--section--profilePlayer'>
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
							{userPlayer.rol}
						</div>
					</div>

					<div className='container--profilePlayer--info--level'>
						<img
							className='profilePlayer--info--icon'
							src={SurfaceIcon}
							alt='surface court'
						/>
						<div className='profilePlayer--info--level--text'>
							Sintetico
						</div>
					</div>
					<div className='container--profilePlayer--info--level'>
						<img
							className='profilePlayer--info--icon'
							src={WallIcon}
							alt='surface court'
						/>
						<div className='profilePlayer--info--level--text'>
							Blindex
						</div>
					</div>
					<div className='container--profilePlayer--info--level'>
						<img
							className='profilePlayer--info--icon'
							src={RoofIcon}
							alt='surface court'
						/>
						<div className='profilePlayer--info--level--text'>
							Techada
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
								availableTimes={[
									[
										false,
										false,
										true,
										true,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										true,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										true,
										false,
									],
									[
										true,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										true,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										true,
										false,
										false,
										false,
									],
									[
										false,
										false,
										true,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										false,
									],
									[
										false,
										false,
										false,
										false,
										false,
										false,
										true,
									],
								]}
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
								openInNewTab(`https://wa.me/123456789`)
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
		</div>
	);
};
