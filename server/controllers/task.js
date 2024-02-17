import Task from "../Models/Task.js";
import User from "../Models/User.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
        cardId: req.params.id,
        });
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: "Internal Server Error",
        });
    }
}

export const createTask = async (req, res) => {
    try {
        const { task, xp, cardId } = req.body;
        const newTask = new Task({ task, xp, cardId, done: {} });
        await newTask.save();
        res.status(200).json({ message: "Task created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const markTask = async (req, res) => {
    try {
        
        const task = await Task.findById(req.params.id);
        const isDone = task.done.get(req.body.userId);
        if (!isDone) {
        task.done.set(req.body.userId, true);
        await User.findById(req.body.userId).then((user) => {
            user.xp += task.xp;
            user.save();
        });
        }

        await task.save();
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
    }
}

export const getUserTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        const userTasks = tasks.filter((task) => {
        const isDone = task.done.get(req.params.id);
        return isDone;
        });
        res.status(200).json(userTasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: "Internal Server Error",
        });
    }
}