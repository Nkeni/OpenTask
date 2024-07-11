import React from "react";
import {useEffect, useState } from "react";
import './main.scss'




function PlayersList() {
    const [player, setPlayer] = useState([]);
    const [selectedName, setSelectedName] = useState(null);

// Get the names of players from the database and display
   useEffect(() => {
        const PlayerList = async () => {
                try {
                  const response = await fetch('http://localhost:2000/detail');
                  const data = await response.json();
                  setPlayer(data);
                } catch (error) {
                  console.error('Error fetching players:', error);
                }
              };
          
              PlayerList();
            }, []);


      // get players details
      const handleButtonClick = (players) => {
        setSelectedName(players);
      };


    return (
        <div className="container">
          <h1>Soccer Players List</h1>
          <div>
            {player.map(players => (
             <button onClick={() => handleButtonClick(players)} key={players._id}>{players.playername}</button>
             ))
            }
            {selectedName&& (
        <div className="detail-box">
          <h2>Details</h2>
          <p>Name: {selectedName.playername}</p>
          <p>Age: {selectedName.age}</p>
          <p>Games: {selectedName.games}</p>
          <p>Position: {selectedName.position}</p>
        </div>
      )}
       
            </div>
          </div>
        
      );
}


export default PlayersList