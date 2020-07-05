import { removeProj } from './removeItems';
import { selectProject, clickEvent } from './newProject';
import { formatDistanceToNow, parseISO, format, parse } from 'date-fns';

const projInStorage = () => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const projectSelection = document.getElementById('projects');

    if (projects.length > 0) {
        for (let i = 0; i < projects.length; i++) {
            const myList = document.getElementById('my-lists');
            const myListUl = myList.querySelector('ul');

            const newLi = document.createElement('li');

            newLi.className = 'task-list';

            newLi.setAttribute('data-filter', projects[i].split(' ').join('-').toLowerCase());
            newLi.textContent = projects[i];

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-btn';
            delBtn.onclick = removeProj;

            const icon = document.createElement('i');
            icon.className = 'fa fa-trash-o';

            myListUl.appendChild(newLi);
            newLi.appendChild(delBtn);
            delBtn.appendChild(icon);

            //Add tasksWindow Project selection
            const addProjToSelection = document.createElement('option');
            addProjToSelection.textContent = projects[i];
            addProjToSelection.value = projects[i];

            projectSelection.appendChild(addProjToSelection);
            clickEvent();
        }
    }
};

const tasksInStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const getTable = document.getElementById('table');
    if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
            const newTr = document.createElement('tr');

            if (tasks[i]['active'] == false) {
                newTr.style.display = 'none';
            }

            for (let j = 0; j < 3; j++) {
                const newTd = document.createElement('td');

                if (j == 0) {
                    newTd.textContent = tasks[i]['title'];
                    newTd.style.minWidth = '15rem';
                } else if (j == 1) {
                    if (tasks[i]['dueDate'] !== '') {
                        const showDate = formatDistanceToNow(parse(tasks[i]['dueDate'], 'yyyy-MM-dd', new Date()));
                        newTd.textContent = showDate;
                    } else {
                        newTd.textContent = '';
                    }
                } else if (j == 2) {
                    newTd.className = tasks[i]['priority'].split(' ').join('-').toLowerCase();
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';

                    newTd.appendChild(checkbox);
                }

                newTr.appendChild(newTd);
            }
            newTr.className = tasks[i]['project'].split(' ').join('-').toLowerCase();

            getTable.appendChild(newTr);
        }
    }
};

const myStorage = () => {
    projInStorage();
    tasksInStorage();
    //     const storage = window.localStorage;
    //     storage.setItem('projects', JSON.stringify([]));
    //     storage.setItem('tasks', JSON.stringify([]));
    //     return storage;
};
export { myStorage, projInStorage, tasksInStorage };
