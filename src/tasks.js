class Task {
    constructor(title, description, dueDate, priority) {
        return { title, description, dueDate, priority };
    }
}

const newTask = () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const priority = document.getElementById('priority');
    const dueDate = document.getElementById('due-date');

    const addBtn = document.getElementById('add-task-btn');

    addBtn.onclick = () => {
        if (title.value && priority.value) {
            const newTr = document.createElement('tr');
            const table = document.getElementById('table');

            const theTask = new Task(title.value, description.value, dueDate.value, priority.value);
            console.log(theTask);
            for (let key in theTask) {
                const newTd = document.createElement('td');
                newTd.textContent = theTask[key];
                newTr.appendChild(newTd);
            }

            table.appendChild(newTr);
        }
    };
};

export { newTask };
