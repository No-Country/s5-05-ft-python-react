import classes from "./home.module.css";
import images from "../../assets/HomePage/imagesHomePage";
import { Footer } from "../../components/HomePage/Footer/Footer";
import { HomeButton } from "../../components/HomePage/HomeButton/HomeButton";
import { HomeCard } from "../../components/HomePage/HomeCard/HomeCard";
import { Subtitle } from "../../components/HomePage/Subtitle/Subtitle";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export const Homepage = () => {
  const {
    header,
    header__container,
    header__img__container,
    header__img,
    header__title,
    header__info__container,
    container,
    about_us,
    paragraph,
    abaut__us__img__container,
    flex__center,
    services,
    services__container,
    motivation,
    motivation__container,
    motivation__info,
    functionality__container__cards,
    card__functionality,
    info__functionality,
    location,
    location__container,
    location__img,
  } = classes;

  const { userCredentials } = useContext(UserContext);

  return (
    <>
      <header className={header}>
        <div className={`${header__container} ${container}`}>
          <div className={header__img__container}>
            <h1 className={header__title}>PADDLE BALL</h1>
            <picture className={header__img}>
              <img src={images.HeaderBg} alt="Header Img" />
            </picture>
          </div>
          <div className={header__info__container}>
            <p>
              Ofrecemos una gran cantidad de canchas de padel, en las cuales
              podrás pasar un buen tiempo con compañeros, amigos, familiares o
              conocer personas nuevas.
            </p>
            {userCredentials.id !== "" ? null : (
              <HomeButton name={"Registrate ahora"} to="/register" />
            )}
          </div>
        </div>
      </header>
      <section className={about_us}>
        <div className={container}>
          <Subtitle name={"Sobre Nosotros"} />
          <h3>BUSCAMOS FACILITAR TU EVENTO</h3>
          <p className={paragraph}>
            Nuestra intencion es ahorrarte tiempo y que te olvides lo tedioso
            que puede ser organizar un evento de padel.
          </p>
          <div className={abaut__us__img__container}>
            <div className={flex__center}>
              <img src={images.DescriptionImage1} alt="Cancha 1" />
            </div>
            <div className={flex__center}>
              <img src={images.DescriptionImage2} alt="Cancha 2" />
            </div>
            <div className={flex__center}>
              <img src={images.DescriptionImage3} alt="Cancha 3" />
            </div>
          </div>
          {userCredentials.id !== "" ? (
            userCredentials.is_jugador ? (
              <HomeButton
                name={"Explora canchas"}
                color="#3282c3"
                to="/complex"
                w="19px"
              />
            ) : (
              <HomeButton
                name={"Explora usuarios"}
                color="#3282c3"
                to="/players"
                w="19px"
              />
            )
          ) : null}
        </div>
      </section>
      <section className={services}>
        <div className={services__container}>
          <HomeCard
            name="DONDE SEA"
            description="Con nuestro sencillo servicio puedes organizar encuentros desde la comodidad de tu casa. Se acabo lo de tener que ir a hablar con x persona para hacer una reserva."
            icon="HomeIcon"
          />
          <HomeCard
            name="HORARIOS"
            description="Contamos con numerosas fechas disponibles, cada cancha tiene horarios disponibles. Podras elegir la que más se adapte a tu disponibilidad horaria."
            icon="LevelIcon"
          />
          <HomeCard
            name="NIVEL"
            description="Incrementa tu reputacion como jugador. Haste respetar con los demas jugadores y genera un nombre en la cancha."
            icon="CalendarIcon"
          />
        </div>
      </section>
      <section className={motivation}>
        <div className={motivation__container}>
          <img src={images.MotivateImage} alt="Padel 5" />
          <div className={motivation__info}>
            <Subtitle name={"Sube tu motivacion"} />
            <p className={paragraph}>
              Nunca pares, nunca te conformes, hasta que lo bueno sea mejor y lo
              mejor exelente.
            </p>
          </div>
        </div>
      </section>
      {/* <section className={featured__courts}>
        <Subtitle name={"Canchas destacadas"} />
      </section> */}
      <section className="functionality">
        <div className={container}>
          <Subtitle name={"¿Como funciona?"} />
          <p className={paragraph}>
            Te ayudamos a publicar y encontrar la cancha perfecta, para que
            puedas organizar eventos de paddle facilmente.
          </p>
          <div className={functionality__container__cards}>
            <div className={card__functionality}>
              <h4>Inscribete en un evento</h4>
              <dl className={info__functionality}>
                <dt>
                  <i className="bx bxs-tennis-ball"></i>{" "}
                  <h5>1. Escoge tu cancha</h5>
                </dt>
                <dd>
                  Busca tu cancha por ubicación, tipo de suelo, medidas, etc.
                </dd>
                <dt>
                  <i className="bx bxs-calendar"></i> <h5>2. Inscribete</h5>
                </dt>
                <dd>Encuentra el evento que se adapte a ti.</dd>
                <dt>
                  <i className="bx bx-dollar"></i> <h5>3. Disfruta</h5>
                </dt>
                <dd>Un juego justo y seguro.</dd>
              </dl>
            </div>
            <div className={card__functionality}>
              <h4>¿Tienes un espacio deportivo?</h4>
              <dl className={info__functionality}>
                <dt>
                  <i className="bx bx-clipboard"></i>{" "}
                  <h5>1. Solicita tu registro</h5>
                </dt>
                <dd>
                  Registra fácilmente tu cancha en nuestro portal. Inicia aquí
                </dd>
                <dt>
                  <i className="bx bxs-user-check"></i> <h5>2. Verificación</h5>
                </dt>
                <dd>Verificaremos que los datos sean correctos.</dd>
                <dt>
                  <i className="bx bx-dollar"></i> <h5>3. Busca gente</h5>
                </dt>
                <dd>Organiza tus grupos y que empieze el juego.</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className={location}>
        <div className={location__container}>
          <div>
            <p className={paragraph}>
              Queremos ayudarte a encontrar la cancha perfecta en tu ciudad para
              que puedas jugar fácilmente.
            </p>
            <ul>
              <li>
                <img src={images.MapIcon} alt="Icono Ubicacion" /> Sitio 1
              </li>
              <li>
                <img src={images.MapIcon} alt="Icono Ubicacion" /> Sitio 2
              </li>
              <li>
                <img src={images.MapIcon} alt="Icono Ubicacion" /> Sitio 3
              </li>
              <li>
                <img src={images.MapIcon} alt="Icono Ubicacion" /> Sitio 4
              </li>
              <li>
                <img src={images.MapIcon} alt="Icono Ubicacion" /> Sitio 5
              </li>
              <li>
                <img src={images.MapIcon} alt="Icono Ubicacion" /> Sitio 6
              </li>
            </ul>
          </div>
          <img
            className={location__img}
            src={images.WorldMap}
            alt="location img"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};
