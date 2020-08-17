import express, { Router, Request, Response } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import interactors from './core/interactors';
import { Task } from './core/entities';

const router = Router();

const app: express.Application = express();

const PORT = process.env.PORT || 3000;

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());

app.get('/', async function (req: Request, res: Response) {
    const tasks: Task[] = await interactors.fetchTasks();

    return res.json({ tasks: tasks });
});

app.get('/:id', async function (req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    const task: Task = await interactors.fetchTaskById(Number(id));

    return res.json({ task });
});

app.listen(PORT, () => console.log(`Server listening on: ${ PORT }`));