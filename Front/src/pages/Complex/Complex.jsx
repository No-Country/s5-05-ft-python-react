import React from 'react'
import { ComplexList } from '../../components/ComplexList/ComplexList'

import classes from './Complex.module.css';

const {main, title__container, title} = classes;

export const Complex = () => {
  return (
    <div className={main}>
      <div className={title__container}>
        <h1 className={title}>Complejos</h1>
      </div>
      <ComplexList />
    </div>
  )
}
