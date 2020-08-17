import TasksRepository from '../repositories/tasksRepository';
import { Task } from '../entities';

const fetchTasks = (tasksRepository: TasksRepository) => async (): Promise<Task[]> => {
    // Fetch all tasks from db
    return tasksRepository.fetchAll();
};

export default fetchTasks;