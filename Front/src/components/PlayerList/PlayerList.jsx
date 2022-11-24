import { useState } from 'react'

import classes from './PlayerList.module.css'
import { RowData } from './Row/RowData';

import data from './data.json';
import { FilterForm } from './FilterForm/FilterForm';

const { container, bar__container, container__btn, filter__btn, search__input, form__container, open, table, row} = classes;

export const PlayerList = () => {

  const [openFilter, setOpenFilter] = useState(false);

  const [search, setSearch] = useState("");

  const [playersList, setPlayersList] = useState(data);

  return (
    <div className={container}>
      <div className={bar__container}>
        <div className={container__btn}>
          <button onClick={()=>setOpenFilter(!openFilter)} className={filter__btn}>Filtros</button>
          <input type="text" placeholder="Buscar por nombre..." className={search__input} value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className={`${form__container} ${openFilter ? open : ""}`}>
          <FilterForm setPlayers={setPlayersList} openFilter={openFilter} search={search}/>
        </div>
      </div>

      <div className={table}>
        <div className={row}>
          <div>Nombre</div>
          <div>Nivel</div>
          <div>Posición</div>
          <div>Horario</div>
          <div>Teléfono</div>
          <div>Género</div>
        </div>
        {
          playersList.length ? playersList.map(player => <RowData key={player.id} player={player}/>) : <div className={row}><p>No hay jugadores</p></div>
        }
      </div>
    </div>
  )
};