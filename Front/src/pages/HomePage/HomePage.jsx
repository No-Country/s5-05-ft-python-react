import classes from "./home.module.css";
import images from "../../assets/HomePage/imagesHomePage";
import { Navbar } from "../../components/HomePage/Navbar/Navbar";
import { Footer } from "../../components/HomePage/Footer/Footer";
import { HomeButton } from "../../components/HomePage/HomeButton/HomeButton";
import { HomeCard } from "../../components/HomePage/HomeCard/HomeCard";
import { Subtitle } from "../../components/HomePage/Subtitle/Subtitle";

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
    featured__courts,
    functionality__container__cards,
    card__functionality,
    info__functionality,
    location,
    location__container,
    location__img,
  } = classes;

  return (
    <>
      <Navbar />
      <header className={header}>
        <div className={`${header__container} ${container}`}>
          <div className={header__img__container}>
            <h1 className={header__title}>PADEL TITLE</h1>
            <picture className={header__img}>
              <img src={images.HeaderBg} alt="Header Img" />
            </picture>
          </div>
          <div className={header__info__container}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              corporis autem numquam, repellat, neque, praesentium eius natus
            </p>
            <HomeButton name={"Registrate ahora"} />
          </div>
        </div>
      </header>
      <section className={about_us}>
        <div className={container}>
          <Subtitle name={"Sobre Nosotros"} />
          <h3>UBICADO EN ...</h3>
          <p className={paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            veniam, nisi aliquid dolorum iure dicta rerum
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
          <HomeButton
            name={"Mira nuestras canchas destacadas"}
            color="#3282c3"
            w="19px"
          />
        </div>
      </section>
      <section className={services}>
        <div className={services__container}>
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
      </section>
      <section className={motivation}>
        <div className={motivation__container}>
          <img src={images.MotivateImage} alt="Padel 5" />
          <div className={motivation__info}>
            <Subtitle name={"Sube tu motivacion"} />
            <p className={paragraph}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              exercitationem ducimus minus accusantium quos corporis! Numquam{" "}
            </p>
          </div>
        </div>
      </section>
      <section className={featured__courts}>
        <Subtitle name={"Canchas destacadas"} />
      </section>
      <section className="functionality">
        <div className={container}>
          <Subtitle name={"¿Como funciona?"} />
          <p className={paragraph}>
            Te ayudamos a encontrar la cancha perfecta para que puedas
            reservarla fácilmente.
          </p>
          <div className={functionality__container__cards}>
            <div className={card__functionality}>
              <h4>Reserva tu cancha</h4>
              <dl className={info__functionality}>
                <dt>
                  <i className="bx bxs-tennis-ball"></i>{" "}
                  <h5>1. Escoge tu cancha</h5>
                </dt>
                <dd>
                  Busca tu cancha por ubicación, tipo de suelo, medidas, etc.
                </dd>
                <dt>
                  <i className="bx bxs-calendar"></i>{" "}
                  <h5>2. Registra tu reserva</h5>
                </dt>
                <dd>Escoge fecha y horario en la que quieres rentarla.</dd>
                <dt>
                  <i className="bx bx-dollar"></i> <h5>3. Cotización y pago</h5>
                </dt>
                <dd>Un pago rapido y seguro</dd>
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
                <dd>
                  Nos pondremos en contacto contigo para verificar la
                  información y activar tu cancha
                </dd>
                <dt>
                  <i className="bx bx-dollar"></i> <h5>3. Recibe y gana</h5>
                </dt>
                <dd>
                  Nos encargaremos de que mas personas conozcan tu cancha.
                </dd>
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
              que puedas reservarla fácilmente.
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
