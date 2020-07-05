import { projInStorage, tasksInStorage } from './myStorage';
import { selectTask, completeTask } from './tasks';

const updateProjList = () => {
    const myList = document.getElementById('my-lists');
    const myListUl = myList.querySelector('ul');
    const projectSelection = document.getElementById('projects');

    while (myListUl.children.length > 1) {
        myListUl.removeChild(myListUl.lastChild);
    }

    //removes project selection
    while (projectSelection.children.length > 1) {
        projectSelection.removeChild(projectSelection.lastChild);
    }

    projInStorage();
};

const removeProj = (e) => {
    const liSelect = e.currentTarget.parentNode.textContent;

    const item = JSON.parse(localStorage.getItem('projects'));
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const index = item.indexOf(liSelect);

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]['project'] == liSelect) {
            console.log(tasks[i]['title']);
            tasks[i]['project'] = '';
        }
    }

    item.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('projects', JSON.stringify(item));

    updateProjList();
};

const updateTasksList = () => {
    const tasksList = document.getElementById('table');

    while (tasksList.children.length > 0) {
        tasksList.removeChild(tasksList.lastChild);
    }
    tasksInStorage();
    updateProjList();
    selectTask();
    completeTask();
};

export { removeProj, updateProjList, updateTasksList };
