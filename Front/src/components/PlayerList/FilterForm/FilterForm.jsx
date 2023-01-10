import { useEffect, useState } from 'react'

import { instance } from "../../../axios/axiosConfig";

import classes from './FilterForm.module.css'

const { form, open, select, reset__btn } = classes;

export const FilterForm = ({openFilter, setPlayers, setLoading, search}) => {

    const initialValues = {
        level: "",
        position: "",
        specs: "",
        gender: "",
    }

    const [playersTotal, setPlayersTotal] = useState([])

    const [filter, setFilter] = useState(initialValues);

    const filterLevel = (arr) => {
        if (filter.level === "") {
            return arr;
        } else {
            return arr.filter(player => player.nivel === parseInt(filter.level));
        }
    }

    const filterPosition = (arr) => {
        if (filter.position === "") {
            return arr;
        } else {
            return arr.filter(player => player.rol === filter.position)
        }
    }

    const filterSpecs = (arr) => {
        if (filter.specs === "") {
            return arr;
        } else {
            return arr.filter(player => player.cancha_specs.includes(filter.specs))
        }
    }

    const filterGender = (arr) => {
        if (filter.gender === "") {
            return arr;
        } else {
            return arr.filter(player => player.sexo === filter.gender);
        }
    }

    const filterSearch = (arr) => {
        if (search === "") {
            return arr;
        } else {
            return arr.filter(player => player.nombre.toUpperCase().includes(search.toUpperCase()) || player.apellido.toUpperCase().includes(search.toUpperCase()))
        }
    }

    const handleResetValues = (e) => {
        e.preventDefault()
        setFilter(initialValues);
        setPlayers(playersTotal);
    }

    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    useEffect(() => {
        setLoading(true);
        if (filter.level === "" && filter.position === "" && filter.specs === "" && filter.gender === "" && search === "") {
            setPlayers(playersTotal);
        } else {
            let result = playersTotal;
            result = filterLevel(result)
            result = filterPosition(result)
            result = filterSpecs(result)
            result = filterGender(result)
            result = filterSearch(result)
            setPlayers(result);
        }
        setLoading(false);
    }, [filter, search])
    
    useEffect(() => {
        instance.get('jugador').then(res=>setPlayersTotal(res.data))
    }, [])
    

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
            <option value="Revés">Revés</option>
            <option value="Drive">Drive</option>
            <option value="Ambos">Ambos</option>
        </select>
        <select name="specs" id="specs" value={filter.specs} className={select} onChange={handleChange}>
            <option value="">Preferencias</option>
            <option value="T">Techada</option>
            <option value="AL">Aire Libre</option>
            <option value="SC">Superficie Cemento</option>
            <option value="SS">Superficie Sintética</option>
            <option value="PC">Pared Cemento</option>
            <option value="PB">Pared Blindex</option>
        </select>
        <select name="gender" id="gender" value={filter.gender} className={select} onChange={handleChange}> 
            <option value="">Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
        <button className={reset__btn} onClick={handleResetValues}>Restablecer filtros</button>
    </form>
  )
}