import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ToastContainer, toast } from 'react-toastify';

import { PlayerList } from "../../components/PlayerList/PlayerList";

import data from '../../components/PlayerList/data.json';

import 'react-toastify/dist/ReactToastify.css';
import classes from "./Players.module.css";

const {
  main,
  title__container,
  title,
  match__container,
  field,
  match,
  player__pos,
  btn__delete,
  btn,
} = classes;

export const Players = () => {
  const [playersMatch, setPlayersMatch] = useState([]);

  const [playersTotal, setPlayersTotal] = useState(data);

  const handleDragEnd = (result) => {
    if (
      playersMatch.length <= 3 &&
      !playersMatch.find((player) => parseInt(player.id) === result.source.index) && result.destination
    ) {
      const player = playersTotal.find((player) => parseInt(player.id) === result.source.index);
      setPlayersMatch([
        ...playersMatch,
        player,
      ]);
      toast.success('Jugador agregado');
    } else if (playersMatch.length > 3) {
      toast.warning('Máximo 4 jugadores')
    } else if (!result.destination) {
      return
    } else {
      toast.error('Jugador repetido')
    }
  };

  const handleDeletePlayer = (id) => {
    const players = playersMatch.filter(player=>player.id !== id)
    setPlayersMatch(players);
  }

  const handleDeletePlayers = () => {
    setPlayersMatch([]);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={main}>
        <div className={title__container}>
          <h1 className={title}>Jugadores</h1>
        </div>

        <PlayerList/>

        <Droppable droppableId="playersMatch">
          {(droppableProvided) => (
            <>
              <div
                className={match__container}
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                <div
                  className={`${playersMatch.length ? `${field}` : `${match}`}`}
                >
                  {playersMatch.length
                    ? playersMatch.map((player) => (
                        <div key={player.id} className={player__pos}>
                          <p>{player.name}</p>
                          <p>Nivel: {player.level}</p>
                          <p>Posición: {player.position}</p>
                          <p>Género: {player.gender}</p>
                          <button onClick={()=>handleDeletePlayer(player.id)} className={btn__delete}>X</button>
                        </div>
                      ))
                    : "Arrastra jugadores para organizar partido"}
                </div>
                {droppableProvided.placeholder}
                <button className={btn}>Enviar notificación</button>
                <button className={btn} onClick={handleDeletePlayers}>Borrar</button>
              </div>
            </>
          )}
        </Droppable>
      </div>
      <ToastContainer autoClose={1500}/>
    </DragDropContext>
  );
};
