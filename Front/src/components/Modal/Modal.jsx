import React from 'react'

import classes from './Modal.module.css';

const { modal__container } = classes;

export const Modal = ({children}) => {
  return (
    <div className={modal__container} id='modal' >
        {children}
    </div>
  )
}
