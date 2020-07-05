import { updateProjList, updateTasksList } from './removeItems';

const clickEvent = () => {
    const filterProjs = document.querySelectorAll('.task-list');

    for (let i = 0; i < filterProjs.length; i++) {
        filterProjs[i].onclick = function () {
            const atribute = filterProjs[i].getAttribute('data-filter');
            filterProjects(atribute);
        };
    }
};

const filterProjects = (filter) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    filter;
    for (let j = 0; j < tasks.length; j++) {
        tasks[j]['active'] = false;

        if (filter == tasks[j]['project']) {
            tasks[j]['active'] = true;
        } else if (filter == 'all-tasks') {
            tasks[j]['active'] = true;
        } else if (filter !== tasks[j]['project']) {
            tasks[j]['active'] = false;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    updateTasksList();
    updateProjList;
};

const selectProject = () => {};

const addProject = () => {
    const ok = document.getElementById('ok');

    ok.onclick = () => {
        const projName = document.getElementById('project-name');
        let project = JSON.parse(localStorage.getItem('projects'));

        const nameTaken = (name) => {
            return name == projName.value;
        };

        if (project.some(nameTaken)) {
            alert('Project name already taken');
            projName.value = '';
        } else if (projName.value == '') {
        }

        project.push(projName.value);
        localStorage.setItem('projects', JSON.stringify(project));

        projName.value = '';
        updateProjList();
    };
};

export { addProject, clickEvent };
