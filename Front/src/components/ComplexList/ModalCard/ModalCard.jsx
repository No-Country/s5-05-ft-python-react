import classes from "./ModalCard.module.css";

const {
  card,
  data__container,
  data__container__info,
  data__map,
  data__map__container,
  img,
  btn,
  btn__container,
} = classes;

export const ModalCard = ({ imgUrl, setOpenModal, complex }) => {

  return (
    <div className={card}>
      <div>
        <div>
          <h2>{complex.nombre}</h2>
          <div className={data__container}>
            <div className={data__container__info}>
              <p>Ciudad: {complex.ciudad}</p>
              <p>Dirección: {complex.calle} {complex.altura}</p>
              <p>Teléfono: {complex.telefono}</p>
            </div>
            <div className={data__map__container}>
              <iframe
                className={data__map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458329.1641475647!2d-68.76695314656389!3d-32.169869786767286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2edbd93a039%3A0xb5e5c18389e6d9de!2sCanchas%20de%20p%C3%A1del%20%7C%20Direcci%C3%B3n%20de%20Deportes!5e0!3m2!1ses!2sar!4v1668988085937!5m2!1ses!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="location"
              ></iframe>
            </div>
          </div>
        </div>
        <img src={imgUrl} alt="complejo" className={img} />
      </div>
      <div className={btn__container}>
        <button onClick={() => setOpenModal(false)} className={btn}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
