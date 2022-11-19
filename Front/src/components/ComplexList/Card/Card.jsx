import { useState } from 'react'
import { Modal } from '../../Modal/Modal';
import { ModalCard } from '../ModalCard/ModalCard';

import classes from './Card.module.css';

export const Card = ({imgUrl}) => {

const [openModal, setOpenModal] = useState(false)

  return (
    <div className={classes.card}>
      {
        openModal && <Modal children={<ModalCard setOpenModal={setOpenModal} imgUrl={imgUrl}/>}/>
      }
        <img src={imgUrl} alt="complejo" className={classes.img}/>
        <div className={classes.text}>
            <h2>Complejo 1</h2>
            <p>Calificación</p>
            <p>Ubicación</p>
            <p>Cantidad de canchas</p>
            <p>Turnos</p>
            <button className={classes.btn} onClick={() => setOpenModal(true)}>Inscribirse</button>
        </div>
    </div>
  )
}