import { addProject, selectProject } from './newProject';
import { newTask, addTaskWindow, selectTask } from './tasks';
import { myStorage } from './myStorage';
import { removeItems } from './removeItems';

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
selectProject();
selectTask();
