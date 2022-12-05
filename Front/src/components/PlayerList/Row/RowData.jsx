import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import classes from '../PlayerList.module.css'

const {row__data} = classes

export const RowData = ({ player }) => {

  const getSpecs = (charCode) => {
    switch (charCode) {
      case "T":
        return "Techada";
      case "AL":
          return "Aire Libre"
      case "SC":
          return "Superficie Cemento"
      case "SS":
        return "Superficie Sintética"
      case "PC":
        return "Pared Cemento"
      case "PB":
        return "Pared Blindex"
      default:
        break;
    }
  }

  return (
    <Draggable draggableId={`${player.usuario}`} index={parseInt(player.usuario)} key={player.usuario}>
      {
        (draggableProvided) => (
          <div className={row__data} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
              <div>{player.nombre} {player.apellido}</div>
              <div>{player.nivel}</div>
              <div>{player.rol}</div>
              <div>{player.cancha_specs.map(cancha=>getSpecs(cancha))}</div>
              <div>{player.telefono}</div>
              <div>{player.sexo}</div>
          </div>
        )
      }
    </Draggable>
  )
}
