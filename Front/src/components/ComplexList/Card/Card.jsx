import { useState } from 'react'
import { Link } from 'react-router-dom';

import { capitalize } from '../../../helper/capitalize';
import { Modal } from '../../Modal/Modal';
import { ModalCard } from '../ModalCard/ModalCard';

import classes from './Card.module.css';

const { card, img, text__container, text, link__profile, btn } = classes;

export const Card = ({complex}) => {

const [openModal, setOpenModal] = useState(false);

  return (
    <div className={card}>
      {
        openModal && <Modal children={<ModalCard setOpenModal={setOpenModal} imgUrl="https://i.pinimg.com/originals/e7/e0/c3/e7e0c3f67fae37d36c0e436c67488689.jpg" complex={complex}/>}/>
      }
        <img src="https://i.pinimg.com/originals/e7/e0/c3/e7e0c3f67fae37d36c0e436c67488689.jpg" alt="complejo" className={img}/>
        <div className={text__container}>
          <div className={text}>
              <Link to={`/profile/complex/${complex.usuario}`} className={link__profile}>
                <h2>{capitalize(complex?.nombre)}</h2>
              </Link>
              <p>Dirección: {capitalize(complex.calle)} {complex.altura}</p>
              <p>Cantidad de canchas: {complex?.cant_cancha}</p>
          </div>
            <button className={btn} onClick={()=>setOpenModal(true)}>Información</button>
        </div>
    </div>
  )
}