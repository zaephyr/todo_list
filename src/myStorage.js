import { removeProj } from './removeItems';

const projInStorage = () => {
    const projects = JSON.parse(localStorage['projects']);
    if (projects.length > 0) {
        for (let i = 0; i < projects.length; i++) {
            const myList = document.getElementById('my-lists');
            const myListUl = myList.querySelector('ul');

            const newLi = document.createElement('li');

            newLi.className = 'task-list';
            newLi.textContent = projects[i];

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-btn';
            delBtn.onclick = removeProj;

            const icon = document.createElement('i');
            icon.className = 'fa fa-trash-o';

            myListUl.appendChild(newLi);
            newLi.appendChild(delBtn);
            delBtn.appendChild(icon);
        }
    }
};

const myStorage = () => {
    projInStorage();
    //     const storage = window.localStorage;
    //     storage.setItem('projects', JSON.stringify([]));
    //     storage.setItem('tasks', JSON.stringify([]));
    //     return storage;
};
export { myStorage };
