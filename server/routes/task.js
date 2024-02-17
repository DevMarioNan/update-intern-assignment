import Express from "express";
import {
    getTasks,
    createTask,
    markTask,
    getUserTasks
} from "../controllers/task.js";

import authenticateToken from '../middleware/authenticateToken.js';

const router = Express.Router();

router.get("/:id", authenticateToken, getTasks);

router.get("/tasks/:id", authenticateToken, getUserTasks);

router.patch("/claim/:id",authenticateToken, markTask);

router.post("/",authenticateToken, createTask);

export default router;