import { Task } from '../entities';

export default interface TasksRepository {
    fetchAll(): Promise<Task[]>;
    fetchById(id: Number): Promise<Task>;
}