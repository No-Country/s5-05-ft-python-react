import { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";

import { instance } from "../../axios/axiosConfig";

import { RowData } from "./Row/RowData";
import { FilterForm } from "./FilterForm/FilterForm";

import classes from "./PlayerList.module.css";
import { Loading } from "../Loading/Loading";

const {
  container,
  bar__container,
  container__btn,
  filter__btn,
  search__input,
  form__container,
  open,
  table,
  row,
  row__loading,
} = classes;

export const PlayerList = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const [search, setSearch] = useState("");

  const [playersList, setPlayersList] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    instance.get("jugador/").then((res) => {
      setPlayersList(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Droppable droppableId="players" isDropDisabled={true}>
      {(droppableProvided) => (
        <>
          <div
            className={container}
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            <div className={bar__container}>
              <div className={container__btn}>
                <button
                  onClick={() => setOpenFilter(!openFilter)}
                  className={filter__btn}
                >
                  Filtros
                </button>
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  className={search__input}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className={`${form__container} ${openFilter ? open : ""}`}>
                <FilterForm
                  setPlayers={setPlayersList}
                  setLoading={setLoading}
                  openFilter={openFilter}
                  search={search}
                />
              </div>
            </div>

            <div className={table}>
              <div className={row}>
                <div>Nombre</div>
                <div>Nivel</div>
                <div>Posici??n</div>
                <div>Preferencias</div>
                <div>Tel??fono</div>
                <div>G??nero</div>
              </div>
              {!loading ? (
                playersList.length ? (
                  playersList.map(
                    (player) =>
                      player.nombre !== "" && (
                        <RowData key={player.usuario} player={player} />
                      )
                  )
                ) : (
                  <div className={row}>
                    <p>No hay jugadores que coincidan</p>
                  </div>
                )
              ) : (
                <div className={row__loading}>
                  <Loading />
                </div>
              )}
            </div>
          </div>
          {droppableProvided.placeholder}
        </>
      )}
    </Droppable>
  );
};
