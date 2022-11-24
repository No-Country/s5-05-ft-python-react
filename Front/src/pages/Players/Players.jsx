import React from 'react'
import { PlayerList } from '../../components/PlayerList/PlayerList'

import classes from './Players.module.css';

const {main, title__container, title, match__container, field, btn} = classes;

export const Players = () => {
  return (
    <div className={main}>
      <div className={title__container}>
        <h1 className={title}>Jugadores</h1>
      </div>
      <PlayerList />
      <div className={match__container}>
        <div className={field}>Arrastra jugadores para organizar partido</div>
        <button className={btn}>Enviar notificación</button>
      </div>
    </div>
  )
}