import React from 'react'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'

import { capitalize } from '../../../helper/capitalize'
import { getCanchaSpecs } from '../../../helper/getCanchaSpecs'

import classes from '../PlayerList.module.css'

const {row__data, profile__link} = classes

export const RowData = ({ player }) => {

  return (
    <Draggable draggableId={`${player.usuario}`} index={parseInt(player.usuario)} key={player.usuario}>
      {
        (draggableProvided) => (
          <div className={row__data} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
              <Link to={`/profile/player/${player.usuario}`} className={profile__link}>{capitalize(player.nombre)} {capitalize(player.apellido)}</Link>
              <div>{player.nivel}</div>
              <div>{player.rol}</div>
              <div>{player.cancha_specs.map((cancha, index)=>{
                if(player.cancha_specs.length - 1 !== index) {
                  return getCanchaSpecs(cancha)
                } else {
                  let str = getCanchaSpecs(cancha);
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
