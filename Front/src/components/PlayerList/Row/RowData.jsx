import React from 'react'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'

import classes from '../PlayerList.module.css'

const {row__data, profile__link} = classes

export const RowData = ({ player }) => {

  const getSpecs = (charCode) => {
    switch (charCode) {
      case "T":
        return "Techada-";
      case "AL":
          return "Aire Libre-"
      case "SC":
          return "Superficie Cemento-"
      case "SS":
        return "Superficie Sintética-"
      case "PC":
        return "Pared Cemento-"
      case "PB":
        return "Pared Blindex-"
      default:
        break;
    }
  }

  return (
    <Draggable draggableId={`${player.usuario}`} index={parseInt(player.usuario)} key={player.usuario}>
      {
        (draggableProvided) => (
          <div className={row__data} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
              <Link to={`/profile/player/${player.usuario}`} className={profile__link}>{player.nombre} {player.apellido}</Link>
              <div>{player.nivel}</div>
              <div>{player.rol}</div>
              <div>{player.cancha_specs.map((cancha, index)=>{
                if(player.cancha_specs.length - 1 !== index) {
                  return getSpecs(cancha)
                } else {
                  let str = getSpecs(cancha);
                  str = str.slice(0,-1);
                  return str;
                }
                })}</div>
              <div>{player.telefono}</div>
              <div>{player.sexo}</div>
          </div>
        )
      }
    </Draggable>
  )
}
