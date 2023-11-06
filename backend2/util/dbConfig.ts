import mongoose from "mongoose";
const URL: string = "mongodb://127.0.0.1:27017/task";

export const mainConnection = async () => {
  try {
    await mongoose.connect(URL).then(() => {
      console.log("Database is now connected..🙌!");
    });
  } catch (error) {
    console.log(error);
  }
};
