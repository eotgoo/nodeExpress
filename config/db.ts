import mongoose from "mongoose";

const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log("err", err);
  }
};

export default connectDB;
