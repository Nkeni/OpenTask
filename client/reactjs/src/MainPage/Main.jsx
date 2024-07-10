import React from "react";
import {useEffect, useState } from "react";
import './main.scss'




function PlayersList() {
    const [player, setPlayer] = useState([]);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState(null);


   useEffect(() => {
        const PlayerList = async () => {
                try {
                  const response = await fetch('http://localhost:2000/addplayer');
                  const data = await response.json();
                  setPlayer(data);
                } catch (error) {
                  console.error('Error fetching players:', error);
                }
              };
          
              PlayerList();
            }, []);


    return (
        <div className="container">
          <h1>Soccer Players List</h1>
          <div>
            {player.map(players => (
             <button key={players._id}>{players.name}</button>
            ))
            }
            </div>
          </div>
        
      );
}


export default PlayersList