import express from "express";
import Detail from "../model/details.js";
import Player from "../model/players.js";

// define teacher router
const DetailRouter = express.Router();

DetailRouter
  // Adding a player details endpoint
  .post('/', async (req, res) => {
    const { playername, age, games, position } = req.body;

    // All inputs must be filled
    if (!playername || !age || !games || !position ) {
      return res.status(400).json({ error: 'Fill in all details please!' });
    }
  
    try {

        // Check if a player already exists, then dont save name
        const existingPlayer = await Detail.findOne({ playername });
        if (existingPlayer) {
            return res.status(400).json({ error: 'Player exists already, next!' });
          } 
        // Add player details if they dont exist in the database
          else {
      const newInputData = new Detail({playername, age, games, position});
      await newInputData.save();
      res.status(201).json(newInputData); // Respond with the newly created input data object
          }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
})
  // get a player details
    .get('/:name', async (req, res) => {
        const { name } = req.params;
      
        try {
          const details = await Detail.findOne({ playername:name});
          console.log(details)
          if (!details) {
            return res.status(404).json({ message: 'Details not found' });
          }
      
          res.json({details });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }

  })

  .get('/', async (req, res) => {
    try {
      const playerDetails = await Detail.find({});
      return res.status(200).send(playerDetails);
    } catch (error) {
      return res.status(500).send({ message: 'Server error', error: error.message });
    }
})


  export default DetailRouter;