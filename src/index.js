import { addProject } from './newProject';
import { newTask, addTaskWindow, selectTask, completeTask } from './tasks';
import { myStorage } from './myStorage';

if (localStorage.getItem('projects') == null) {
    localStorage.setItem('projects', JSON.stringify([]));
}

if (localStorage.getItem('tasks') == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
}

addTaskWindow();
myStorage();
addProject();
newTask();
selectTask();
completeTask();
