import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Player Schema
const playerSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
     });

  // Player Model
const Player = model("SoccerTeam", playerSchema);

export default Player;