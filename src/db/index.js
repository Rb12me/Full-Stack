import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `mongoDb connection sucessful !! DB HOST: ${connectionInstance.Connection.host}`
    );
  } catch (error) {
    console.error("mongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
