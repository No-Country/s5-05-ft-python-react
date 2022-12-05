import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ToastContainer, toast } from 'react-toastify';

import { PlayerList } from "../../components/PlayerList/PlayerList";

import 'react-toastify/dist/ReactToastify.css';
import classes from "./Players.module.css";
import { useEffect } from "react";

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

  const [playersTotal, setPlayersTotal] = useState([]);

  const handleDragEnd = (result) => {
    if (
      playersMatch.length <= 3 &&
      !playersMatch.find((player) => parseInt(player.usuario) === result.source.index) && result.destination
    ) {
      const player = playersTotal.find((player) => parseInt(player.usuario) === result.source.index);
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
    const players = playersMatch.filter(player=>player.usuario !== id)
    setPlayersMatch(players);
  }

  const handleDeletePlayers = () => {
    setPlayersMatch([]);
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/jugador').then(res=>res.json()).then(data=>setPlayersTotal(data))
  }, [])
  

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
                        <div key={player.usuario} className={player__pos}>
                          <p>{player.nombre} {player.apellido}</p>
                          <p>Nivel: {player.nivel}</p>
                          <p>Posición: {player.rol}</p>
                          <p>Género: {player.sexo}</p>
                          <button onClick={()=>handleDeletePlayer(player.usuario)} className={btn__delete}>X</button>
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
