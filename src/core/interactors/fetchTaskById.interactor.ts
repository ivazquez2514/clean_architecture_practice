import TasksRepository from "../repositories/tasksRepository";
import { Task } from "../entities";


const fetchTaskById = (tasksRepository: TasksRepository) => async (id: Number): Promise<Task> => {
    // Fetch all tasks from db
    return tasksRepository.fetchById(id);
};

export default fetchTaskById;