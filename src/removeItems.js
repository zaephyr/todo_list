import { myStorage } from './myStorage';
const removeItems = () => {
    const delBtn = document.querySelectorAll('.delete-btn');
};

const updateProjList = () => {
    const myList = document.getElementById('my-lists');
    const myListUl = myList.querySelector('ul');

    while (myListUl.children.length > 1) {
        myListUl.removeChild(myListUl.lastChild);
    }

    myStorage();
};

const removeProj = (e) => {
    const liSelect = e.currentTarget.parentNode.textContent;

    const item = JSON.parse(localStorage['projects']);
    const index = item.indexOf(liSelect);

    item.splice(index, 1);

    localStorage.setItem('projects', JSON.stringify(item));

    updateProjList();
};

export { removeItems, removeProj, updateProjList };
