import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import classes from '../PlayerList.module.css'

const {row__data} = classes

export const RowData = ({ player }) => {
  return (
    <Draggable draggableId={player.id} index={parseInt(player.id)} key={player.id} children={player}>
      {
        (draggableProvided) => (
          <div className={row__data} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
              <div>{player.name}</div>
              <div>{player.level}</div>
              <div>{player.position}</div>
              <div>{player.time}</div>
              <div>{player.phone}</div>
              <div>{player.gender}</div>
          </div>
        )
      }
    </Draggable>
  )
}
