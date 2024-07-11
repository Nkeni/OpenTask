import React from "react";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './main.scss'




function PlayersList() {
    const [player, setPlayer] = useState([]);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState(null);
    const [name, setName] = useState('');

// Get the names of players and display
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

            // Trial pop up window for players details
            const ShowDetails = () => {
            alert("Players details")
     } 

      // Trying to get players details
     const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:2000/detail/${name}`);
          setDetails(response.data);
          console.log(response)
          setError('');
        } catch (err) {
          setError(err.response ? err.response.data : 'Error fetching data');
          
        }
    }


    return (
        <div className="container">
          <h1>Soccer Players List</h1>
          <div>
            {player.map(players => (
             <button onClick={ShowDetails} key={players._id}>{players.name}</button>
             ))
            }
            </div>
            {details && (
          <div>
            <h3>Data:</h3>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>
          </div>
        )}
          </div>
        
      );
}


export default PlayersList