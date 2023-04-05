import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import router from "./routes/movieRoute";
const MONGO_URI = process.env.URI || "";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/movies", router);
app.get("/", (req: Request, res: Response) => {
  res.send("hello express-TS");
});

connectDB(MONGO_URI);
app.listen(8000, () => {
  console.log("server is running");
});
