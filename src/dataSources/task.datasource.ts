import TasksRepository from "../core/repositories/tasksRepository";
import { Task } from "../core/entities";
import tasks from '../db/tasks';

export default class TaskDataSource implements TasksRepository {
    fetchAll(): Promise<Task[]> {
        return Promise.resolve(tasks);
    }
    fetchById(id: Number): Promise<Task> {
        const task: Task = <Task>tasks.find(task => task.id === id);

        return Promise.resolve(task);
    }
    
} 