import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import auth from './routes/auth.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname, ".env") }); 

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000; 
const server = app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
  
});

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use('/api/v1/auth', auth);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

