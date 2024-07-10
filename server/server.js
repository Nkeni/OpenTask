import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import createError from "http-errors";
import connectDB from "./lib/db.js";
import PlayeRouter from "./route/playeRouter.js";
import DetailRouter from "./route/detailRouter.js";


// Defining server
const server = express();

// Making env readable
dotenv.config();

// Defining the port
const port = process.env.PORT || 3600;

//Connecting to DB
connectDB();

// Middleware
server.use(express.json());
server.use(logger("dev"));
server.use(express.urlencoded({ extended: false }));
// REMOVE BEFORE DEPLOY!!
server.use(cors());

// Routes
server.use("/addplayer", PlayeRouter);
server.use("/detail", DetailRouter);




// Page not found middleware
server.use("*", (req, res, next) => {
  next(createError(404, "Page not found"));
});

// Global error handler
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message || "Sorry, something went wrong" });
});

// Starting the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});