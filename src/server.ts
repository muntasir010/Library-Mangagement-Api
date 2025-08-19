import express, { Request, Response } from "express";
import cors from "cors";
import config from "./config";
import mongoose from "mongoose";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Library management api is here.",
  });
});

app.listen(config.port, () => {
  console.log(`✅ Server Connect on Port ${5000}`);
});

async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log("✅ Connected to Database");
  } catch (error) {
    console.log(`Server error ${server}`);
  }
}

server();
