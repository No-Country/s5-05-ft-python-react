import { useState } from 'react'
import { Modal } from '../../Modal/Modal';
import { ModalCard } from '../ModalCard/ModalCard';

import classes from './Card.module.css';

const { card, img, text__container, text, btn } = classes;

export const Card = ({imgUrl}) => {

const [openModal, setOpenModal] = useState(false)

  return (
    <div className={card}>
      {
        openModal && <Modal children={<ModalCard setOpenModal={setOpenModal} imgUrl={imgUrl}/>}/>
      }
        <img src={imgUrl} alt="complejo" className={img}/>
        <div className={text__container}>
          <div className={text}>
              <h2>Complejo 1</h2>
              <p>Cantidad de canchas: 3</p>
              <p>Horarios: 8AM - 23PM</p>
          </div>
          <button className={btn} onClick={() => setOpenModal(true)}>Inscribirse</button>
        </div>
    </div>
  )
}