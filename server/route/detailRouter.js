import express from "express";
import Detail from "../model/details.js";
import Player from "../model/players.js";

// define teacher router
const DetailRouter = express.Router();

DetailRouter
  // Adding a player details endpoint
  .post('/', async (req, res) => {
    const { playername, age, games, position } = req.body;
  
    try {
      const newInputData = new Detail({playername, age, games, position});
      await newInputData.save();
      res.status(201).json(newInputData); // Respond with the newly created input data object
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
})
  // get a player details if the name matches from name collection
    .get('/:name', async (req, res) => {
        const { name } = req.params;
      
        try {
          const player = await Player.findOne( {name} );
          console.log(player)
          if (!player) {
            return res.status(404).json({ message: 'player not found' });
          }
      
          const details = await Detail.findOne({ playername: player.name });
          console.log(details)
          if (!details) {
            return res.status(404).json({ message: 'Details not found' });
          }
      
          res.json({ player, details });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
  });


  export default DetailRouter;