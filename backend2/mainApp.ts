import { Application, Response, Request } from "express";
import todo from "./router/todoRouter";

export const mainApp = (app: Application) => {
  app.use("/api/v1", todo);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Welcome to the our Book API",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });
};
