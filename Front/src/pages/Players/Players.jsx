import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { PlayerList } from "../../components/PlayerList/PlayerList";

import classes from "./Players.module.css";

const {
  main,
  title__container,
  title,
  match__container,
  field,
  match,
  player__pos,
  btn,
} = classes;

export const Players = () => {
  const [playersMatch, setPlayersMatch] = useState([]);

  const handleDragEnd = (result) => {
    if (
      playersMatch.length <= 3 &&
      !playersMatch.find((player) => player.playerId === result.source.index) && result.destination
    ) {
      setPlayersMatch([
        ...playersMatch,
        {
          playerId: result.source.index,
        },
      ]);
    }
  };

  const handleDeletePlayer = (id) => {
    const players = playersMatch.filter(player=>player.playerId !== id)
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
                        <div key={player.playerId} className={player__pos}>
                          {player.playerId}
                          <button onClick={()=>handleDeletePlayer(player.playerId)}>X</button>
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
    </DragDropContext>
  );
};
