import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import redis from "redis";

import { keys } from "../config/keys";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const databaseURI = keys.mongoURI.replace("<password>", keys.mongoPassword);

const start = async () => {
  try {
    await mongoose.connect(databaseURI);
    console.log("connecting to database");
  } catch (err) {
    console.log(err);
  }
};

const connectRedis = async () => {
  try {
    const redisClient = redis.createClient();
    redisClient.on("error", (err) => console.log("Redis Client Error", err));
    await redisClient.connect();
  } catch {
    console.log();
  }
};

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
