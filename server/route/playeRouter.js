import express from "express";
import Player from "../model/players.js";
import createError from "http-errors";

// define teacher router
const PlayeRouter = express.Router();

PlayeRouter
  // Adding a player endpoint
  .post("/", async (req, res, next) => {
    try {
        // Add a new player
        const newPlayer = await Player.create({ name: req.body.name });
        res.send(newPlayer)
    } catch (error) {
      next(createError(401, error.message));
    }
        // Check if a player already exists
        const player = await Player.findOne({ name: req.body.name });
        if (player) {
          console.log("already added");
          next(createError(409, "A player is already added"));
          return;
        }
    
    
  })

  export default PlayeRouter;