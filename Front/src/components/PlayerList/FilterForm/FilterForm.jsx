import { useEffect, useState } from 'react'

import classes from './FilterForm.module.css'

import data from '../data.json';

const { form, open, select, reset__btn } = classes;

export const FilterForm = ({openFilter, setPlayers, search}) => {

    const initialValues = {
        level: "",
        position: "",
        time: "",
        gender: "",
    }

    const [filter, setFilter] = useState(initialValues);

    const filterLevel = (arr) => {
        if (filter.level === "") {
            return arr;
        } else {
            return arr.filter(player => player.level === filter.level);
        }
    }

    const filterPosition = (arr) => {
        if (filter.position === "") {
            return arr;
        } else {
            return arr.filter(player => player.position === filter.position)
        }
    }

    const filterTime = (arr) => {
        if (filter.time === "") {
            return arr;
        } else {
            return arr.filter(player => player.time === filter.time)
        }
    }

    const filterGender = (arr) => {
        if (filter.gender === "") {
            return arr;
        } else {
            return arr.filter(player => player.gender === filter.gender);
        }
    }

    const filterSearch = (arr) => {
        if (search === "") {
            return arr;
        } else {
            return arr.filter(player => player.name.includes(search))
        }
    }

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
        if (filter.level === "" && filter.position === "" && filter.time === "" && filter.gender === "" && search === "") {
            setPlayers(data);
        } else {
            let result = data;
            result = filterLevel(result)
            result = filterPosition(result)
            result = filterTime(result)
            result = filterGender(result)
            result = filterSearch(result)
            setPlayers(result);
        }
    }, [filter, search])
    

  return (
    <form className={`${form} ${openFilter ? open : ""}`}>
        <select name="level" id="level" value={filter.level} className={select} onChange={handleChange}>
            <option value="">Nivel</option>
            <option value="1">Nivel 1</option>
            <option value="2">Nivel 2</option>
            <option value="3">Nivel 3</option>
            <option value="4">Nivel 4</option>
            <option value="5">Nivel 5</option>
        </select>
        <select name="position" id="position" value={filter.position} className={select} onChange={handleChange}>
            <option value="">Posición</option>
            <option value="reves">Revés</option>
            <option value="derecha">Derecha</option>
            <option value="ambas">Ambas</option>
        </select>
        {/* Cambiar court por time */}
        <select name="time" id="time" value={filter.time} className={select} onChange={handleChange}>
            <option value="">Horario</option>
            <option value="Horario 1">Horario 1</option>
            <option value="Horario 2">Horario 2</option>
            <option value="Horario 3">Horario 3</option>
            <option value="Horario 4">Horario 4</option>
        </select>
        <select name="gender" id="gender" value={filter.gender} className={select} onChange={handleChange}> 
            <option value="">Género</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
        </select>
        <button className={reset__btn} onClick={handleResetValues}>Restablecer filtros</button>
    </form>
  )
}