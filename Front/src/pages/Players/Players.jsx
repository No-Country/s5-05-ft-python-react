import React from 'react'
import { PlayerList } from '../../components/PlayerList/PlayerList'

import classes from './Players.module.css';

export const Players = () => {
  return (
    <div className={classes.main}>
      <PlayerList />
      <div className={classes.match__container}>
        <div className={classes.field}>Arrastra jugadores para organizar partido</div>
        <button className={classes.btn}>Enviar notificación</button>
      </div>
    </div>
  )
}