import React from 'react'
import { PlayerList } from '../../components/PlayerList/PlayerList'

import classes from './Players.module.css';

export const Players = () => {
  return (
    <div className={classes.main}>
      <PlayerList />
    </div>
  )
}