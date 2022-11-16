// import FemalePlayer from "../../assets/profile/female_player.png";
import AvailableIcon from "../../assets/profile/available_icon.png";
import GenreIcon from "../../assets/profile/genre_icon.png";
import LevelIcon from "../../assets/profile/level_icon.png";
import MalePlayer from "../../assets/profile/male_player.png";
import WtsIcon from "../../assets/profile/wts_icon.png";
import "./profilePlayer.css";

export const ProfilePlayer = () => {
	return (
		<div className='container--profilePlayer'>
			<div className='container--profilePlayer--avatar--name'>
				<img
					className='profilePlayer--avatar'
					src={MalePlayer}
					alt='avatar icon'
				/>
				{/* <img
					className='profilePlayer--avatar'
					src={FemalePlayer}
					alt='avatar icon'
				/> */}
				<div className='container--profilePlayer--name'>
					<div className='profilePlayer--lastName'>
						apellido{" "}
						<span className='profilePlayer--lastName--span'>,</span>
					</div>
					<div className='profilePlayer--name'>nombre</div>
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
						Nivel de Juego
					</div>
					<div className='profilePlayer--info--level--number'>7</div>
				</div>
				<div className='container--profilePlayer--info--available'>
					<img
						className='profilePlayer--info--icon'
						src={AvailableIcon}
						alt='player hours'
					/>
					<div className='profilePlayer--info--available--text'>
						Horarios Disponibles
					</div>
				</div>
				<div className='container--profilePlayer--info--contact'>
					<img
						className='profilePlayer--info--icon'
						src={WtsIcon}
						alt='player contact'
					/>
					<div className='profilePlayer--info--contact--number'>
						126 - 46456463
					</div>
				</div>
				<div className='container--profilePlayer--info--genre'>
					<img
						className='profilePlayer--info--icon'
						src={GenreIcon}
						alt='player genre'
					/>
					<div className='profilePlayer--info--genre--text'>
						Hombre
					</div>
				</div>
			</div>
		</div>
	);
};
