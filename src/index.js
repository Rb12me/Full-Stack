import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "../.env"
});

console.log("URI FROM ENV:", process.env.MONGODB_URI);

connectDB();






/* import mongoose from "mongoose";
import { DB_Name } from "./constants.js";

import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_Name}`);
    app.on("error", (error) => {
      console.log(
        "Error: Database connection successful but app failed to start",
        error
      );
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: database connection failed", error);
    throw error;
  }
})();
*/
