import React from 'react'

import classes from './ModalCard.module.css';

export const ModalCard = ({imgUrl, setOpenModal}) => {

    const handleAcceptSub = () => {
        //TODO: fetch post data
    }

  return (
    <div className={classes.card}>
        <div>
            <div>
                <h2>Complejo</h2>
                <p>Descripció: tipos de canchas</p>
                <p>Califica el complejo</p>
            </div>
            <img src={imgUrl} alt="complejo"/>
        </div>
        <button onClick={()=>setOpenModal(false)}>Cancelar</button>
        <button onClick={handleAcceptSub}>Aceptar inscripción</button>
    </div>
  )
}
