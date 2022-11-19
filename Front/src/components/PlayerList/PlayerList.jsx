import { useEffect, useState } from 'react'

import classes from './PlayerList.module.css'
import { RowData } from './Row/RowData';

import data from './data.json';
import { FilterForm } from './FilterForm/FilterForm';

export const PlayerList = () => {

  const [openFilter, setOpenFilter] = useState(false);

  const [search, setSearch] = useState("");

  const [playersList, setPlayersList] = useState(data);

  useEffect(() => {
    if (search === "") {
      setPlayersList(data);
    } else {
      setPlayersList(data.filter(player => player.name.includes(search)))
    }
  }, [search])
  

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Jugadores</h1>
      <div className={classes.bar__container}>
        <div className={classes.container__btn}>
          <button onClick={()=>setOpenFilter(!openFilter)} className={classes.filter__btn}>Filtros</button>
          <input type="text" placeholder="Buscar por nombre..." className={classes.search__input} value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className={`${classes.form__container} ${openFilter ? classes.open : ""}`}>
          <FilterForm setPlayers={setPlayersList} openFilter={openFilter}/>
        </div>
      </div>

      <div className={classes.table}>
        <div className={classes.row}>
          <div>Nombre</div>
          <div>Nivel</div>
          <div>Posición</div>
          <div>Horario</div>
          <div>Teléfono</div>
          <div>Género</div>
        </div>
        {
          playersList.length ? playersList.map(player => <RowData key={player.id} player={player}/>) : <div className={classes.row}><p>No hay jugadores</p></div>
        }
      </div>
    </div>
  )
};