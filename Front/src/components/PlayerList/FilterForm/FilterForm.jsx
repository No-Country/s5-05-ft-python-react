import { useEffect, useState } from 'react'

import classes from './FilterForm.module.css'

import data from '../data.json';

export const FilterForm = ({openFilter, setPlayers}) => {

    const initialValues = {
        level: "",
        time: "",
        court: "",
        gender: "",
    }

    const [filter, setFilter] = useState(initialValues);

    const handleResetValues = (e) => {
        e.preventDefault()
        setFilter(initialValues);
        setPlayers(data);
    }

    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    useEffect(() => {
        if (filter.level === "") {
            setPlayers(data);
        } else {
            setPlayers(data.filter(player => player.level === filter.level));
        }
    }, [filter])
    

  return (
    <form className={`${classes.form} ${openFilter ? classes.open : ""}`}>
        <select name="level" id="level" value={filter.level} className={classes.select} onChange={handleChange}>
            <option value="">Nivel</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <select name="time" id="time" value={filter.time} className={classes.select} onChange={handleChange}>
            <option value="">Horario</option>
            <option value="morning">Mañana</option>
            <option value="afternoon">Tarde</option>
            <option value="night">Noche</option>
        </select>
        <select name="court" id="court" value={filter.court} className={classes.select} onChange={handleChange}>
            <option value="">Cancha</option>
            <option value="Cancha 1">Cancha 1</option>
            <option value="Cancha 2">Cancha 2</option>
            <option value="Cancha 3">Cancha 3</option>
            <option value="Cancha 4">Cancha 4</option>
        </select>
        <select name="gender" id="gender" value={filter.gender} className={classes.select} onChange={handleChange}> 
            <option value="">Género</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
        </select>
        <button className={classes.reset__btn} onClick={handleResetValues}>Restablecer filtros</button>
    </form>
  )
}