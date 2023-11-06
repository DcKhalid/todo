import { Router } from "express";
import { createTask, getTask, UpdateTask } from "../controller/todoController";

const router: Router = Router();

router.route("/create-task").post(createTask);
router.route("/update-task/:todoId").patch(UpdateTask);
router.route("/get-task").get(getTask);

export default router;
