import React from 'react'

import classes from '../PlayerList.module.css'

export const RowData = ({ player }) => {
  return (
    <div className={classes.row__data}>
        <div>{player.name}</div>
        <div>{player.level}</div>
        <div>{player.time}</div>
        <div>{player.court}</div>
        <div>{player.phone}</div>
        <div>{player.gender}</div>
    </div>
  )
}
