import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Player Schema
const playerSchema = new Schema(
  {
    name: { type: String, required: true},
     });

  // Player Model
const Player = model("TeamPlayers", playerSchema);

export default Player;