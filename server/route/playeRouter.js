import express from "express";
import Player from "../model/players.js";

// define teacher router
const PlayeRouter = express.Router();

PlayeRouter
  // Adding a player endpoint
  .post("/", async (req, res) => {
    const { name } = req.body;
    // A name must be added
      if (!name) {
        return res.status(400).json({ error: 'name is required' });
      }
    try {
        // Check if a player already exists, then dont save name
        const existingPlayer = await Player.findOne({ name });
        if (existingPlayer) {
            return res.status(400).json({ error: 'Player is already added' });
          }
        // Add a new player
    
        else {
            const newPlayer = new Player({ name});
        await newPlayer.save()
        return res.status(201).json({ message: 'Player is added' });
    }
    
    } catch (error) {
        res.status(500).json({ error: 'Server error' })
    }
})
    // Get all players
    .get('/', async (req, res) => {
        try {
          const players = await Player.find({});
          return res.status(200).send(players);
        } catch (error) {
          return res.status(500).send({ message: 'Server error', error: error.message });
        }
    })


  export default PlayeRouter;