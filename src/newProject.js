import { updateProjList } from './removeItems';

const newProject = () => {
    const newProjectWindow = document.getElementById('new-project');
    const addBtn = document.getElementById('add-project');
    const span = document.getElementsByClassName('close')[0];

    addBtn.onclick = () => {
        newProjectWindow.style.display = 'block';
    };

    span.onclick = () => {
        newProjectWindow.style.display = 'none';
    };

    window.onclick = (e) => {
        if (e.target == newProjectWindow) {
            newProjectWindow.style.display = 'none';
        }
    };
};

const addProject = () => {
    const ok = document.getElementById('ok');
    const newProjectWindow = document.getElementById('new-project');
    let project;

    ok.onclick = () => {
        project = JSON.parse(localStorage.getItem('projects'));
        const projName = document.getElementById('project-name');

        const nameTaken = (name) => {
            return name == projName.value;
        };

        if (project.some(nameTaken)) {
            alert('Project name already taken');
            projName.value = '';
            return;
        }

        project.push(projName.value);
        localStorage.setItem('projects', JSON.stringify(project));

        newProjectWindow.style.display = 'none';
        projName.value = '';
        updateProjList();
    };
};

export { newProject, addProject };
