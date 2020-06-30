import { newProject, addProject } from './newProject';
import { newTask } from './tasks';
import { myStorage } from './myStorage';
import { removeItems } from './removeItems';

if (localStorage.getItem('projects') == null) {
    localStorage.setItem('projects', JSON.stringify([]));
}

if (localStorage.getItem('tasks') == null) {
    localStorage.setItem('tasks', JSON.stringify([]));
}

myStorage();

newProject();
addProject();
newTask();
