import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Player detail Schema
const detailSchema = new Schema(
  {
    playername:{ 
        type: String,
         required: true,
         ref: 'Player'},
    age: { type: Number, required: true},
    games: { type: Number, required: true},
    position: { type: Number, required: true},
     });

  // Player detail Model
const Detail = model("PlayerDetails", detailSchema);

export default Detail;