import mongoose, { Document, Schema } from "mongoose";
import { iTask } from "../util/interfaces";

interface iTaskData extends iTask, Document {}

const doModel = new Schema<iTaskData>({
  task: {
    type: String,
  },
  deadline: {
    type: String,
  },
  Achieved: {
    type: Boolean,
  },
  done: {
    type: String,
    default: "start",
  },
});

export default mongoose.model<iTask>("task", doModel);
