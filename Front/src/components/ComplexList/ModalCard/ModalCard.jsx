import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';

import { capitalize } from "../../../helper/capitalize";

import classes from "./ModalCard.module.css";

const {
  card,
  link__profile,
  data__container,
  data__container__info,
  data__map,
  data__map__container,
  error__map,
  img,
  btn,
  btn__container,
} = classes;

export const ModalCard = ({ imgUrl, setOpenModal, complex }) => {

  const [longLat, setLongLat] = useState([0,0])

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

const requestOptions = {
  method: 'GET',
};

const getQuery = (name, country, city, address, num) => {
  return `${name}, ${num}, ${address}, ${city}, ${country}`
}

const getMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2ZjaGF6YTA5IiwiYSI6ImNsNjQ4MzdsZjBqeHEzY2x2ZmVldGp6aGoifQ.0zXgFuC8Hw_sYkjayVWPzw';
  const map = new mapboxgl.Map({
  container: `map`, // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: longLat, // starting position [lng, lat]
  zoom: 15, // starting zoom
});
}

useEffect(() => {
  setLoading(true);
  fetch("https://api.geoapify.com/v1/geocode/search?text="+getQuery(complex.nombre, complex.pais, complex.ciudad, complex.calle, complex.altura)+"&apiKey=cc7216e09e16417fa15ca39e43073773", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setError("");
    setLongLat([result.features[0].properties.lon, result.features[0].properties.lat])
    setLoading(false);
  })
  .catch(error => {
    setLongLat([0,0]);
    setLoading(false);
    setError("No se encontró ubicación");
  }); 
}, [])

  return (
    <div className={card}>
      <div>
        <div>
          <Link to={`/profile/complex/${complex.usuario}`} className={link__profile}>
            <h2>{capitalize(complex.nombre)}</h2>
          </Link>
          <div className={data__container}>
            <div className={data__container__info}>
              <p>Ciudad: {capitalize(complex.ciudad)}</p>
              <p>Dirección: {capitalize(complex.calle)} {complex.altura}</p>
              <p>Teléfono: {complex.telefono}</p>
            </div>
            <div className={data__map__container}>
              {
                error === "" && <div id={`map`} className={data__map}></div>
              }
              {
                error !== "" && <div className={error__map}>{error}</div>
              }
              {
                error === "" && document.getElementById(`map`) && getMap()
              }
            </div>
          </div>
        </div>
        <img src={imgUrl} alt="complejo" className={img} />
      </div>
      <div className={btn__container}>
        <button onClick={() => {
          setOpenModal(false);
          setLongLat([0,0]);  
        }} className={btn}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
