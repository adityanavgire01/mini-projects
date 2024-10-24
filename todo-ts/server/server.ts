import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks: string[] = [];

// Endpoint to get all tasks
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

// Endpoint to add a new task
app.post("/tasks", (req: Request, res: Response) => {
    const { task } = req.body;
    tasks.push(task);
    res.json({ message: "Task added!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
