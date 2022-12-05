import { useState, useEffect } from 'react'

import classes from './PlayerList.module.css'
import { RowData } from './Row/RowData';

import { FilterForm } from './FilterForm/FilterForm';
import { Droppable } from 'react-beautiful-dnd';

const { container, bar__container, container__btn, filter__btn, search__input, form__container, open, table, row} = classes;

export const PlayerList = () => {

  const [openFilter, setOpenFilter] = useState(false);

  const [search, setSearch] = useState("");

  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/jugador').then(res=>res.json()).then(data=>setPlayersList(data))
  }, [])
  

  return (
    <Droppable droppableId="players" isDropDisabled={true}>
    {(droppableProvided) => (
        <>
          <div className={container} {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}>
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
                <div>Preferencias</div>
                <div>Teléfono</div>
                <div>Género</div>
              </div>
              {
                playersList.length ? playersList.map(player => <RowData key={player.usuario} player={player}/>) : <div className={row}><p>No hay jugadores</p></div>
              }
            </div>
          </div>
          {droppableProvided.placeholder}
        </>
      )}
    </Droppable>
  )
};