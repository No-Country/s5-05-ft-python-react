import React from 'react'

import classes from './Modal.module.css';

export const Modal = ({children}) => {
  return (
    <div className={classes.modal__container} id='modal' >
        {children}
    </div>
  )
}
