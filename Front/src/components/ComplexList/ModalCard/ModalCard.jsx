import { useEffect, useState } from 'react'

import classes from './ModalCard.module.css';

export const ModalCard = ({imgUrl, setOpenModal}) => {

    const [rating, setRating] = useState(0);

    const handleAcceptSub = () => {
        //TODO: fetch post data
    }

    const handleRating = (e) => {
        if (e.target.id) {
            const ratingNumber = parseInt(e.target.id.replace(/[^0-9]+/g, ""));
            setRating(ratingNumber)
        }

    }

  return (
    <div className={classes.card}>
        <div>
            <div>
                <h2>Complejo</h2>
                <div className={classes.data__container}>
                    <div className={classes.data__options__container}>
                        <p>Información: </p>
                        <div >
                            <p>Cobertura: </p>
                            <div className={classes.data__options}>
                                <p>Techada <span>🎾</span></p>
                                <p>Aire Libre</p>
                            </div>
                        </div>
                        <div>
                            <p>Superficie: </p>
                            <div className={classes.data__options}>
                                <p>Cemento <span>🎾</span></p>
                                <p>Sintético</p>
                            </div>
                        </div>
                        <div>
                            <p>Tipo de Pared: </p>
                            <div className={classes.data__options}>
                                <p>Cemento</p>
                                <p>Blindex <span>🎾</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.data__map__container}>
                        <iframe className={classes.data__map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458329.1641475647!2d-68.76695314656389!3d-32.169869786767286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2edbd93a039%3A0xb5e5c18389e6d9de!2sCanchas%20de%20p%C3%A1del%20%7C%20Direcci%C3%B3n%20de%20Deportes!5e0!3m2!1ses!2sar!4v1668988085937!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='location'></iframe>
                    </div>
                </div>
                <div className={classes.rating__container}>
                    <p>Califica el complejo: </p>
                    <div>
                        <img className={`${classes.img__rating} ${rating >= 1 && classes.img__rating__active}`} src="https://i.pinimg.com/originals/63/d1/72/63d172ba49155883a33c77e4d8ce64c8.jpg" alt="ball" id="rate1" onClick={handleRating}/>
                        <img className={`${classes.img__rating} ${rating >= 2 && classes.img__rating__active}`} src="https://i.pinimg.com/originals/63/d1/72/63d172ba49155883a33c77e4d8ce64c8.jpg" alt="ball" id="rate2" onClick={handleRating}/>
                        <img className={`${classes.img__rating} ${rating >= 3 && classes.img__rating__active}`} src="https://i.pinimg.com/originals/63/d1/72/63d172ba49155883a33c77e4d8ce64c8.jpg" alt="ball" id="rate3" onClick={handleRating}/>
                        <img className={`${classes.img__rating} ${rating >= 4 && classes.img__rating__active}`} src="https://i.pinimg.com/originals/63/d1/72/63d172ba49155883a33c77e4d8ce64c8.jpg" alt="ball" id="rate4" onClick={handleRating}/>
                        <img className={`${classes.img__rating} ${rating >= 5 && classes.img__rating__active}`} src="https://i.pinimg.com/originals/63/d1/72/63d172ba49155883a33c77e4d8ce64c8.jpg" alt="ball" id="rate5" onClick={handleRating}/>
                    </div>
                    <button className={classes.btn}>Enviar calificación</button>
                </div>
            </div>
            <img src={imgUrl} alt="complejo" className={classes.img}/>
        </div>
        <div className={classes.btn__container}>
            <button onClick={()=>setOpenModal(false)} className={classes.btn}>Cancelar</button>
            <button onClick={handleAcceptSub} className={classes.btn}>Enviar inscripción</button>
        </div>
    </div>
  )
}
