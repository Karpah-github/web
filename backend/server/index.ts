import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import redis from "redis";

import { keys } from "../config/keys";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const start = async () => {
  try {
    await mongoose.connect(keys.mongoURI);
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

app.listen(3000, () => {
  console.log("listening on port 3000");
});
