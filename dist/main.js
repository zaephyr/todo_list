/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _myStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myStorage */ \"./src/myStorage.js\");\n/* harmony import */ var _removeItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeItems */ \"./src/removeItems.js\");\n\r\n\r\n\r\n\r\n\r\nif (localStorage.getItem('projects') == null) {\r\n    localStorage.setItem('projects', JSON.stringify([]));\r\n}\r\n\r\nif (localStorage.getItem('tasks') == null) {\r\n    localStorage.setItem('tasks', JSON.stringify([]));\r\n}\r\n\r\nObject(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"addTaskWindow\"])();\r\nObject(_myStorage__WEBPACK_IMPORTED_MODULE_2__[\"myStorage\"])();\r\nObject(_newProject__WEBPACK_IMPORTED_MODULE_0__[\"addProject\"])();\r\nObject(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"newTask\"])();\r\nObject(_newProject__WEBPACK_IMPORTED_MODULE_0__[\"selectProject\"])();\r\nObject(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"selectTask\"])();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/myStorage.js":
/*!**************************!*\
  !*** ./src/myStorage.js ***!
  \**************************/
/*! exports provided: myStorage, projInStorage, tasksInStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myStorage\", function() { return myStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projInStorage\", function() { return projInStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasksInStorage\", function() { return tasksInStorage; });\n/* harmony import */ var _removeItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeItems */ \"./src/removeItems.js\");\n/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ \"./src/newProject.js\");\n\r\n\r\n\r\nconst projInStorage = () => {\r\n    const projects = JSON.parse(localStorage.getItem('projects'));\r\n    const projectSelection = document.getElementById('projects');\r\n\r\n    if (projects.length > 0) {\r\n        for (let i = 0; i < projects.length; i++) {\r\n            const myList = document.getElementById('my-lists');\r\n            const myListUl = myList.querySelector('ul');\r\n\r\n            const newLi = document.createElement('li');\r\n\r\n            newLi.className = 'task-list';\r\n\r\n            newLi.setAttribute('data-filter', projects[i].split(' ').join('-').toLowerCase());\r\n            newLi.textContent = projects[i];\r\n\r\n            const delBtn = document.createElement('button');\r\n            delBtn.className = 'delete-btn';\r\n            delBtn.onclick = _removeItems__WEBPACK_IMPORTED_MODULE_0__[\"removeProj\"];\r\n\r\n            const icon = document.createElement('i');\r\n            icon.className = 'fa fa-trash-o';\r\n\r\n            myListUl.appendChild(newLi);\r\n            newLi.appendChild(delBtn);\r\n            delBtn.appendChild(icon);\r\n\r\n            //Add tasksWindow Project selection\r\n            const addProjToSelection = document.createElement('option');\r\n            addProjToSelection.textContent = projects[i];\r\n            addProjToSelection.value = projects[i];\r\n\r\n            projectSelection.appendChild(addProjToSelection);\r\n        }\r\n    }\r\n};\r\n\r\nconst tasksInStorage = () => {\r\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\r\n    const getTable = document.getElementById('table');\r\n    if (tasks.length > 0) {\r\n        for (let i = 0; i < tasks.length; i++) {\r\n            const newTr = document.createElement('tr');\r\n\r\n            if (tasks[i]['active'] == false) {\r\n                newTr.style.display = 'none';\r\n            }\r\n\r\n            for (let j = 0; j < 3; j++) {\r\n                const newTd = document.createElement('td');\r\n\r\n                if (j == 0) {\r\n                    newTd.textContent = tasks[i]['title'];\r\n                    newTd.style.minWidth = '15rem';\r\n                } else if (j == 1) {\r\n                    newTd.textContent = tasks[i]['dueDate'];\r\n                } else if (j == 2) {\r\n                    newTd.className = tasks[i]['priority'].split(' ').join('-').toLowerCase();\r\n                    const checkbox = document.createElement('input');\r\n                    checkbox.type = 'checkbox';\r\n\r\n                    newTd.appendChild(checkbox);\r\n                }\r\n\r\n                newTr.appendChild(newTd);\r\n            }\r\n            newTr.className = tasks[i]['project'].split(' ').join('-').toLowerCase();\r\n\r\n            getTable.appendChild(newTr);\r\n        }\r\n    }\r\n};\r\n\r\nconst myStorage = () => {\r\n    projInStorage();\r\n    tasksInStorage();\r\n    //     const storage = window.localStorage;\r\n    //     storage.setItem('projects', JSON.stringify([]));\r\n    //     storage.setItem('tasks', JSON.stringify([]));\r\n    //     return storage;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/myStorage.js?");

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/*! exports provided: addProject, selectProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectProject\", function() { return selectProject; });\n/* harmony import */ var _removeItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeItems */ \"./src/removeItems.js\");\n\r\n\r\nconst selectProject = () => {\r\n    const filterProjs = document.querySelectorAll('.task-list');\r\n\r\n    filterProjs.forEach((filterProj) => {\r\n        filterProj.addEventListener('click', () => {\r\n            const filter = filterProj.getAttribute('data-filter');\r\n            const tasks = JSON.parse(localStorage.getItem('tasks'));\r\n\r\n            for (let j = 0; j < tasks.length; j++) {\r\n                tasks[j]['active'] = false;\r\n                if (filter == 'all-tasks') {\r\n                    tasks[j]['active'] = true;\r\n                    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n                    console.log('all tasks');\r\n                    Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateTasksList\"])();\r\n                    Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateProjList\"])();\r\n                } else if (filter == tasks[j]['project']) {\r\n                    tasks[j]['active'] = true;\r\n                    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n                    Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateTasksList\"])();\r\n                    Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateProjList\"])();\r\n\r\n                    console.log('non task filter');\r\n                } else {\r\n                    tasks[j]['active'] = false;\r\n                    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n                    console.log('kaboom');\r\n                }\r\n            }\r\n        });\r\n    });\r\n};\r\n\r\nconst addProject = () => {\r\n    const ok = document.getElementById('ok');\r\n\r\n    ok.onclick = () => {\r\n        const projName = document.getElementById('project-name');\r\n        let project = JSON.parse(localStorage.getItem('projects'));\r\n\r\n        const nameTaken = (name) => {\r\n            return name == projName.value;\r\n        };\r\n\r\n        if (project.some(nameTaken)) {\r\n            alert('Project name already taken');\r\n            projName.value = '';\r\n        } else if (projName.value == '') {\r\n        }\r\n\r\n        project.push(projName.value);\r\n        localStorage.setItem('projects', JSON.stringify(project));\r\n\r\n        projName.value = '';\r\n        Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateProjList\"])();\r\n    };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/newProject.js?");

/***/ }),

/***/ "./src/removeItems.js":
/*!****************************!*\
  !*** ./src/removeItems.js ***!
  \****************************/
/*! exports provided: removeProj, updateProjList, updateTasksList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProj\", function() { return removeProj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjList\", function() { return updateProjList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTasksList\", function() { return updateTasksList; });\n/* harmony import */ var _myStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myStorage */ \"./src/myStorage.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst updateProjList = () => {\r\n    const myList = document.getElementById('my-lists');\r\n    const myListUl = myList.querySelector('ul');\r\n    const projectSelection = document.getElementById('projects');\r\n\r\n    while (myListUl.children.length > 1) {\r\n        myListUl.removeChild(myListUl.lastChild);\r\n    }\r\n\r\n    //removes project selection\r\n    while (projectSelection.children.length > 1) {\r\n        projectSelection.removeChild(projectSelection.lastChild);\r\n    }\r\n\r\n    Object(_myStorage__WEBPACK_IMPORTED_MODULE_0__[\"projInStorage\"])();\r\n};\r\n\r\nconst removeProj = (e) => {\r\n    const liSelect = e.currentTarget.parentNode.textContent;\r\n\r\n    const item = JSON.parse(localStorage.getItem('projects'));\r\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\r\n    const index = item.indexOf(liSelect);\r\n\r\n    for (let i = 0; i < tasks.length; i++) {\r\n        if (tasks[i]['project'] == liSelect) {\r\n            console.log(tasks[i]['title']);\r\n            tasks[i]['project'] = '';\r\n        }\r\n    }\r\n\r\n    item.splice(index, 1);\r\n\r\n    localStorage.setItem('tasks', JSON.stringify(tasks));\r\n    localStorage.setItem('projects', JSON.stringify(item));\r\n\r\n    updateProjList();\r\n};\r\n\r\nconst updateTasksList = () => {\r\n    const tasksList = document.getElementById('table');\r\n\r\n    while (tasksList.children.length > 0) {\r\n        tasksList.removeChild(tasksList.lastChild);\r\n    }\r\n    Object(_myStorage__WEBPACK_IMPORTED_MODULE_0__[\"tasksInStorage\"])();\r\n    Object(_tasks__WEBPACK_IMPORTED_MODULE_1__[\"selectTask\"])();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/removeItems.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! exports provided: newTask, selectTask, addTaskWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newTask\", function() { return newTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectTask\", function() { return selectTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTaskWindow\", function() { return addTaskWindow; });\n/* harmony import */ var _removeItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeItems */ \"./src/removeItems.js\");\n\r\n\r\nconst title = document.getElementById('title');\r\nconst projectsList = document.getElementById('projects');\r\nconst description = document.getElementById('description');\r\nconst priority = document.getElementById('priority');\r\nconst dueDate = document.getElementById('due-date');\r\nconst taskWindow = document.getElementById('add-task-window');\r\nconst editTaskBtn = document.getElementById('edit-task-btn');\r\n\r\nclass Task {\r\n    constructor(title, description, dueDate, priority, project, active) {\r\n        active = true;\r\n        return { title, description, dueDate, priority, project, active };\r\n    }\r\n}\r\n\r\nconst clearTaskForm = () => {\r\n    title.value = '';\r\n    description.value = '';\r\n    dueDate.value = '';\r\n    priority.selectedIndex = 0;\r\n    projectsList.selectedIndex = 0;\r\n    return { clearTaskForm };\r\n};\r\n\r\nconst addTaskWindow = () => {\r\n    const newTaskWindow = document.getElementById('add-task-window');\r\n    const addTaskBtn = document.getElementById('add-new-task');\r\n    const close = document.getElementsByClassName('close')[0];\r\n\r\n    addTaskBtn.onclick = () => {\r\n        clearTaskForm();\r\n        const addBtn = document.getElementById('add-task-btn');\r\n        addBtn.style.display = 'block';\r\n\r\n        const editTaskBtn = document.getElementById('edit-task-btn');\r\n        editTaskBtn.style.display = 'none';\r\n\r\n        newTaskWindow.style.display = 'flex';\r\n    };\r\n\r\n    close.onclick = () => {\r\n        newTaskWindow.style.display = 'none';\r\n    };\r\n};\r\n\r\nconst selectTask = () => {\r\n    const taskRow = document.querySelectorAll('tr');\r\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\r\n\r\n    for (let i = 0; i < taskRow.length; i++) {\r\n        taskRow[i].firstChild.onmouseover = () => {\r\n            taskRow[i].style.transform = 'scale(1.03)';\r\n            taskRow[i].style.transition = '0.3s ease-in-out';\r\n        };\r\n\r\n        taskRow[i].firstChild.onmouseout = () => {\r\n            taskRow[i].style.transform = 'scale(1.00)';\r\n            taskRow[i].style.transition = '0.3s ease-in-out';\r\n        };\r\n\r\n        taskRow[i].firstChild.onclick = () => {\r\n            taskWindow.style.display = 'flex';\r\n            const addBtn = document.getElementById('add-task-btn');\r\n            addBtn.style.display = 'none';\r\n\r\n            editTaskBtn.style.display = 'block';\r\n\r\n            title.value = tasks[i]['title'];\r\n            projectsList.value = tasks[i]['project'];\r\n            description.value = tasks[i]['description'];\r\n            priority.value = tasks[i]['priority'];\r\n            dueDate.value = tasks[i]['dueDate'];\r\n\r\n            editTaskBtn.onclick = () => {\r\n                tasks[i]['title'] = title.value;\r\n                tasks[i]['project'] = projectsList.value;\r\n                tasks[i]['description'] = description.value;\r\n                tasks[i]['priority'] = priority.value;\r\n                tasks[i]['dueDate'] = dueDate.value;\r\n\r\n                localStorage.setItem('tasks', JSON.stringify(tasks));\r\n\r\n                taskWindow.style.display = 'none';\r\n\r\n                Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateTasksList\"])();\r\n            };\r\n        };\r\n    }\r\n};\r\n\r\nconst newTask = () => {\r\n    const addBtn = document.getElementById('add-task-btn');\r\n    const newTaskWindow = document.getElementById('add-task-window');\r\n\r\n    addBtn.onclick = () => {\r\n        if (title.value && priority.value) {\r\n            const theTask = new Task(title.value, description.value, dueDate.value, priority.value, projectsList.value);\r\n            const tasks = JSON.parse(localStorage.getItem('tasks'));\r\n\r\n            tasks.push(theTask);\r\n            localStorage.setItem('tasks', JSON.stringify(tasks));\r\n\r\n            Object(_removeItems__WEBPACK_IMPORTED_MODULE_0__[\"updateTasksList\"])();\r\n            newTaskWindow.style.display = 'none';\r\n\r\n            clearTaskForm();\r\n            selectTask();\r\n        }\r\n    };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ })

/******/ });