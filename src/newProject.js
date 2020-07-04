import { updateProjList, updateTasksList } from './removeItems';

const selectProject = () => {
    const filterProjs = document.querySelectorAll('.task-list');

    filterProjs.forEach((filterProj) => {
        filterProj.addEventListener('click', () => {
            const filter = filterProj.getAttribute('data-filter');
            const tasks = JSON.parse(localStorage.getItem('tasks'));

            for (let j = 0; j < tasks.length; j++) {
                tasks[j]['active'] = false;
                if (filter == 'all-tasks') {
                    tasks[j]['active'] = true;
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    console.log('all tasks');
                    updateTasksList();
                    updateProjList();
                } else if (filter == tasks[j]['project']) {
                    tasks[j]['active'] = true;
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    updateTasksList();
                    updateProjList();

                    console.log('non task filter');
                } else {
                    tasks[j]['active'] = false;
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    console.log('kaboom');
                }
            }
        });
    });
};

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

export { addProject, selectProject };
