import { updateTasksList } from './removeItems';

const title = document.getElementById('title');
const projectsList = document.getElementById('projects');
const description = document.getElementById('description');
const priority = document.getElementById('priority');
const dueDate = document.getElementById('due-date');
const taskWindow = document.getElementById('add-task-window');
const editTaskBtn = document.getElementById('edit-task-btn');

class Task {
    constructor(title, description, dueDate, priority, project, active) {
        active = true;
        return { title, description, dueDate, priority, project, active };
    }
}

const clearTaskForm = () => {
    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.selectedIndex = 0;
    projectsList.selectedIndex = 0;
    return { clearTaskForm };
};

const addTaskWindow = () => {
    const newTaskWindow = document.getElementById('add-task-window');
    const addTaskBtn = document.getElementById('add-new-task');
    const close = document.getElementsByClassName('close')[0];

    addTaskBtn.onclick = () => {
        clearTaskForm();
        const addBtn = document.getElementById('add-task-btn');
        addBtn.style.display = 'block';

        const editTaskBtn = document.getElementById('edit-task-btn');
        editTaskBtn.style.display = 'none';

        newTaskWindow.style.display = 'flex';
    };

    close.onclick = () => {
        newTaskWindow.style.display = 'none';
    };
};

const selectTask = () => {
    const taskRow = document.querySelectorAll('tr');
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < taskRow.length; i++) {
        taskRow[i].firstChild.onmouseover = () => {
            taskRow[i].style.transform = 'scale(1.03)';
            taskRow[i].style.transition = '0.3s ease-in-out';
        };

        taskRow[i].firstChild.onmouseout = () => {
            taskRow[i].style.transform = 'scale(1.00)';
            taskRow[i].style.transition = '0.3s ease-in-out';
        };

        taskRow[i].firstChild.onclick = () => {
            taskWindow.style.display = 'flex';
            const addBtn = document.getElementById('add-task-btn');
            addBtn.style.display = 'none';

            editTaskBtn.style.display = 'block';

            title.value = tasks[i]['title'];
            projectsList.value = tasks[i]['project'];
            description.value = tasks[i]['description'];
            priority.value = tasks[i]['priority'];
            dueDate.value = tasks[i]['dueDate'];

            editTaskBtn.onclick = () => {
                tasks[i]['title'] = title.value;
                tasks[i]['project'] = projectsList.value;
                tasks[i]['description'] = description.value;
                tasks[i]['priority'] = priority.value;
                tasks[i]['dueDate'] = dueDate.value;

                localStorage.setItem('tasks', JSON.stringify(tasks));

                taskWindow.style.display = 'none';

                updateTasksList();
            };
        };
    }
};

const newTask = () => {
    const addBtn = document.getElementById('add-task-btn');
    const newTaskWindow = document.getElementById('add-task-window');

    addBtn.onclick = () => {
        if (title.value && priority.value) {
            const theTask = new Task(title.value, description.value, dueDate.value, priority.value, projectsList.value);
            const tasks = JSON.parse(localStorage.getItem('tasks'));

            tasks.push(theTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));

            updateTasksList();
            newTaskWindow.style.display = 'none';

            clearTaskForm();
            selectTask();
        }
    };
};

export { newTask, selectTask, addTaskWindow };
