import { Request, Response } from "express";
// import { iTask } from "../util/interfaces";
import doModel from "../model/todoModel";
import { taskNum } from "../util/statusCode";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { task, time } = req.body;
    let todo = await doModel.create({ task });

    const mainTime = Date.parse(time[1]) - Date.parse(time[0]);
    setTimeout(() => {
      doModel.findByIdAndUpdate(
        { _id: todo._id },
        { Achieved: true },
        { new: true }
      );
    }, mainTime);
    res.status(200).json({
      message: "Data Created",
      data: todo,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      message: "Error",
    });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    let task1 = await doModel.find();
    res.status(200).json({
      message: "Data gotten",
      data: task1,
    });
  } catch {
    res.status(404).json({
      message: "Error",
    });
  }
};

export const UpdateTask = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;

    const find: any = await doModel.findById(todoId);

    if (find?.done === taskNum.START) {
      const MODEL = await doModel.findByIdAndUpdate(
        { _id: todoId },
        { done: taskNum.ONGOING },
        { new: true }
      );

      res.status(200).json({
        message: "Data gotten",
        data: MODEL,
      });
    } else if (find?.done === taskNum.ONGOING) {
      await doModel.findByIdAndUpdate(
        { _id: todoId },
        { done: taskNum.DONE },
        { new: true }
      );

      res.status(200).json({
        message: "Data gotten",
        data: find,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Error",
    });
  }
};
