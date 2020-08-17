import fetchTasks from './fetchTasks.interactor';
import fetchTaskById from './fetchTaskById.interactor';
import TaskDataSource from '../../dataSources/task.datasource';
import TasksRepository from '../repositories/tasksRepository';

const taskDataSource: TasksRepository = new TaskDataSource();

export default {
    fetchTasks: fetchTasks(taskDataSource),
    fetchTaskById: fetchTaskById(taskDataSource)
}