import React from 'react'
import { ComplexList } from '../../components/ComplexList/ComplexList'

import classes from './Complex.module.css';

export const Complex = () => {
  return (
    <div className={classes.main}>
      <ComplexList />
    </div>
  )
}
