import React from 'react'

import classes from '../PlayerList.module.css'

const {row__data} = classes

export const RowData = ({ player }) => {
  return (
    <div className={row__data}>
        <div>{player.name}</div>
        <div>{player.level}</div>
        <div>{player.position}</div>
        <div>{player.time}</div>
        <div>{player.phone}</div>
        <div>{player.gender}</div>
    </div>
  )
}
