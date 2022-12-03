import React from 'react'
import { Card } from './Card/Card';

import classes from './ComplexList.module.css';

const { container, card__container } = classes;

export const ComplexList = () => {
  return (
    <div className={container}>
        <div className={card__container}>
            <Card imgUrl="https://infodeportes.com.ar/wp-content/uploads/2022/01/Stylo-padel-club-abre-sus-puertas-en-ciudad-Perico.png"/>
            <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSBV8iIUOx6gsqmhgMJ17FKDbPazCvaa-nw&usqp=CAU"/>
            <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6lyF2txDSccaT8B1_7cetenghQp4cWCw3A&usqp=CAU"/>
            <Card imgUrl="https://infodeportes.com.ar/wp-content/uploads/2022/01/Stylo-padel-club-abre-sus-puertas-en-ciudad-Perico.png"/>
            <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSBV8iIUOx6gsqmhgMJ17FKDbPazCvaa-nw&usqp=CAU"/>
            <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6lyF2txDSccaT8B1_7cetenghQp4cWCw3A&usqp=CAU"/>
            <Card imgUrl="https://infodeportes.com.ar/wp-content/uploads/2022/01/Stylo-padel-club-abre-sus-puertas-en-ciudad-Perico.png"/>
            <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSBV8iIUOx6gsqmhgMJ17FKDbPazCvaa-nw&usqp=CAU"/>
            <Card imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6lyF2txDSccaT8B1_7cetenghQp4cWCw3A&usqp=CAU"/>
        </div>
      
    </div>
  )
}