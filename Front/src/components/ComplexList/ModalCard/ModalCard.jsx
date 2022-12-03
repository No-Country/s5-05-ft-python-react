import classes from "./ModalCard.module.css";

const {
  card,
  data__container,
  data__options__container,
  data__options,
  data__map,
  data__map__container,
  img,
  btn,
  btn__container,
} = classes;

export const ModalCard = ({ imgUrl, setOpenModal, sub = false }) => {

  const handleAcceptCancelSub = () => {
    //TODO: fetch post data
  };

  return (
    <div className={card}>
      <div>
        <div>
          <h2>Complejo</h2>
          <div className={data__container}>
            <div className={data__options__container}>
              <p>Información: </p>
              <p>Horarios: </p>
              <div>
                <p>Cobertura: </p>
                <div className={data__options}>
                  <p>
                    Techada{" "}
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 69.447 69.447"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="tennis_ball"
                        data-name="tennis ball"
                        transform="translate(-1271.769 -1574.648)"
                      >
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M1341.208,1609.372a34.719,34.719,0,1,1-34.72-34.724A34.724,34.724,0,0,1,1341.208,1609.372Z"
                          fill="#b9d613"
                        />
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M1311.144,1574.993a35.139,35.139,0,0,0-4.61-.344,41.069,41.069,0,0,1-34.369,29.735,34.3,34.3,0,0,0-.381,4.635l.183-.026a45.921,45.921,0,0,0,39.149-33.881Zm29.721,34.692a45.487,45.487,0,0,0-33.488,34.054l-.071.313a34.54,34.54,0,0,0,4.818-.455,41.218,41.218,0,0,1,28.686-29.194,36.059,36.059,0,0,0,.388-4.8Z"
                          fill="#f7f7f7"
                        />
                      </g>
                    </svg>
                  </p>
                  <p>Aire Libre</p>
                </div>
              </div>
              <div>
                <p>Superficie: </p>
                <div className={data__options}>
                  <p>
                    Cemento{" "}
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 69.447 69.447"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="tennis_ball"
                        data-name="tennis ball"
                        transform="translate(-1271.769 -1574.648)"
                      >
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M1341.208,1609.372a34.719,34.719,0,1,1-34.72-34.724A34.724,34.724,0,0,1,1341.208,1609.372Z"
                          fill="#b9d613"
                        />
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M1311.144,1574.993a35.139,35.139,0,0,0-4.61-.344,41.069,41.069,0,0,1-34.369,29.735,34.3,34.3,0,0,0-.381,4.635l.183-.026a45.921,45.921,0,0,0,39.149-33.881Zm29.721,34.692a45.487,45.487,0,0,0-33.488,34.054l-.071.313a34.54,34.54,0,0,0,4.818-.455,41.218,41.218,0,0,1,28.686-29.194,36.059,36.059,0,0,0,.388-4.8Z"
                          fill="#f7f7f7"
                        />
                      </g>
                    </svg>
                  </p>
                  <p>Sintético</p>
                </div>
              </div>
              <div>
                <p>Tipo de Pared: </p>
                <div className={data__options}>
                  <p>Cemento</p>
                  <p>
                    Blindex{" "}
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 69.447 69.447"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="tennis_ball"
                        data-name="tennis ball"
                        transform="translate(-1271.769 -1574.648)"
                      >
                        <path
                          id="Path_85"
                          data-name="Path 85"
                          d="M1341.208,1609.372a34.719,34.719,0,1,1-34.72-34.724A34.724,34.724,0,0,1,1341.208,1609.372Z"
                          fill="#b9d613"
                        />
                        <path
                          id="Path_86"
                          data-name="Path 86"
                          d="M1311.144,1574.993a35.139,35.139,0,0,0-4.61-.344,41.069,41.069,0,0,1-34.369,29.735,34.3,34.3,0,0,0-.381,4.635l.183-.026a45.921,45.921,0,0,0,39.149-33.881Zm29.721,34.692a45.487,45.487,0,0,0-33.488,34.054l-.071.313a34.54,34.54,0,0,0,4.818-.455,41.218,41.218,0,0,1,28.686-29.194,36.059,36.059,0,0,0,.388-4.8Z"
                          fill="#f7f7f7"
                        />
                      </g>
                    </svg>
                  </p>
                </div>
              </div>
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
          Cancelar
        </button>
        <button onClick={handleAcceptCancelSub} className={btn}>
          {sub ? "Anular inscripción" : "Enviar inscripción"}
        </button>
      </div>
    </div>
  );
};
