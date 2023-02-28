/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");



class UI {
  static loadHomepage() {
    UI.loadProjects(); //Load all projects from Storage.
    UI.openProject('Inbox'); //Always open 'Inbox' (Default) on page-load.
  }

  static loadProjects() {
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList() //Fetch the List from Storage.
    .getProjects() //Get all the Projects from List.
    .forEach(project => {
      //On Each Project,
      if (project.title !== 'Inbox' && project.title !== 'Workout') {
        //Except the Default,
        UI.createProject(project.title); //Create HTML content.
      }
    });

    UI.handleMainProjBtns(); //Initialize the Project Buttons.
  }

  static loadTasks(projectName) {
    //LOADS TASKS FROM STORAGE
    UI.handleMainTaskBtns();
    UI.clearTasks();
    let currentProject = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList().getProject(projectName);
    let currentTasks = currentProject.getTasks();
    currentTasks.forEach(task => UI.createTask(task.title, task.description, task.priority, task.dueDate));
  }
  //ADD NEW CONTENT TO STORAGE
  static addProject() {
    const projectName = document.getElementById('project').value;
    if (projectName === '') {
      return;
    }
    if (_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList().contains(projectName)) {
      return;
    }
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"](projectName));
    UI.createProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
  }
  static addTask() {
    const projectName = document.querySelector('.title').textContent;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value;
    if (title === '' || date === '') {
      return;
    }
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(projectName, new _createTask__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, priority, date));
    UI.createTask(title, description, priority, date);
  }
  static openProject(projectName) {
    // OPEN THE CLICKED PROJECT
    const projectTitleDOM = document.querySelector('.title');
    projectTitleDOM.textContent = projectName;
    UI.loadTasks(projectName);
  }

  //DELETE CONTENT FROM STORAGE

  static deleteProject(projectName) {
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(projectName);
  }
  static deleteTask(currentProject, taskToDelete) {
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(currentProject, taskToDelete);
  }
  //CLEAR HTML CONTENT 

  static clearProjects() {
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML = "";
  }
  static clearTasks() {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';
  }

  // BUTTONS PROJECT+TASK
  static handleMainProjBtns() {
    const defaultProject = document.querySelector('.inbox-project'); //Select Default Project(already in HTML).
    const workoutProject = document.querySelector('.workout-project');
    const openProjModal = document.querySelector('.open-project-modal'); //Select Open Modal Button
    const closeProjModal = document.querySelector('.close-project-modal'); //Select Close Modal Button
    const addProjBtn = document.querySelector('.add-project'); //Select Add Project Button
    const deleteProjectBtns = document.querySelectorAll('.delete-project'); //Select Delete Project Button
    const allProjects = document.querySelectorAll('.proj-name'); //Select Project - on-click Event 

    openProjModal.onclick = UI.openProjectModal;
    closeProjModal.onclick = UI.closeProjectModal;
    addProjBtn.addEventListener('click', e => {
      e.preventDefault(); //Avoid Form's default behaviour.
      UI.addProject(); //Calls Function -> Add Project.
      UI.closeProjectModal(); //Closes Form.
    });

    deleteProjectBtns.forEach(button =>
    //Select All Buttons.
    button.addEventListener('click', e => {
      //Find clicked Button.
      let projectName = e.currentTarget.parentElement.firstElementChild.innerHTML; //Find Selected Project
      UI.deleteProject(projectName); //Delete Project.
      UI.clearProjects(); //Clear Sidebar.
      UI.loadProjects(); //Reload existing Projects from Storage.
    }));

    allProjects.forEach(project => project.addEventListener('click', e => {
      //Find clicked Project.
      let projectName = e.currentTarget.textContent; //Select Project.
      UI.openProject(projectName); //Open Project's Tasks.
    }));
    //Default project function (Without this, it seems that my functions are repeating twice)
    defaultProject.addEventListener('click', () => {
      UI.openProject('Inbox');
    });
    workoutProject.addEventListener('click', () => {
      UI.openProject('Workout');
    });
  }
  static handleMainTaskBtns() {
    const openTaskModal = document.querySelector('.open-modal'); //open add task modal 
    const closeTaskModal = document.querySelector('.close-modal'); //close add task modal 
    const addTaskBtn = document.querySelector('.add-task'); //add a new task
    const deleteTaskBtns = document.querySelectorAll('.delete-task'); //delete an existing task

    openTaskModal.onclick = UI.openTaskModal;
    closeTaskModal.onclick = UI.closeTaskModal;
    addTaskBtn.addEventListener('click', e => {
      e.preventDefault();
      UI.addTask();
      UI.closeTaskModal();
    });
    deleteTaskBtns.forEach(button => {
      button.addEventListener('click', e => {
        let taskToDelete = e.currentTarget.parentElement.parentElement.firstElementChild.innerText;
        console.log(taskToDelete);
        let currentProject = document.querySelector('.title').innerText;
        console.log(currentProject);
        UI.deleteTask(currentProject, taskToDelete);
        UI.clearTasks();
        UI.loadTasks(currentProject);
      });
    });
  }
  // CREATE HTML CONTENT - PROJECT + TASK
  static createProject(title) {
    const projectsContainer = document.querySelector('.js-lists'); //Select Sidebar
    projectsContainer.innerHTML += `<div class="proj">
        <li class="proj-name proj-title">${title}</li>
        <i class="fa-regular fa-circle-xmark delete-project"></i>
        </div>`;
  }
  static createTask(name, description, priority, dueDate) {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML += `
    <div class="card">
    <div class="card-wrapper-one">
        <p class="task-name">${name}</p>
    </div>
    <p class="description">${description}</p>
    <div class="card-wrapper-two">
        <p class="priority-${priority}">${priority}</p>
        <p class="due-date">${dueDate}</p>
        <i class="fa-regular fa-circle-xmark delete-task"></i>
    </div>
    </div>
    `;
    UI.handleMainTaskBtns();
  }

  //MODAL OPEN/CLOSE - PROJECT + TASK
  static openProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
    projectModal.style.display = "block";
    openProjModal.style.display = "none";
  }
  static closeProjectModal() {
    document.getElementById('project').value = "";
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
    projectModal.style.display = "none";
    openProjModal.style.display = "block";
  }
  static openTaskModal() {
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal');
    taskModal.style.display = "block";
    openTaskModal.style.display = 'none';
  }
  static closeTaskModal() {
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal');
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    taskModal.style.display = "none";
    openTaskModal.style.display = "block";
  }
}

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createList */ "./src/modules/createList.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/modules/createTask.js");



class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }
  static getTodoList() {
    const todoList = Object.assign(new _createList__WEBPACK_IMPORTED_MODULE_0__["default"](), JSON.parse(localStorage.getItem('todoList')));
    todoList.setProjects(todoList.getProjects().map(project => Object.assign(new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](), project)));
    todoList.getProjects().forEach(project => project.setTasks(project.getTasks().map(task => Object.assign(new _createTask__WEBPACK_IMPORTED_MODULE_2__["default"](), task))));
    return todoList;
  }
  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }
  static deleteProject(projectName) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }
  static addTask(projectName, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }
  static deleteTask(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }
}

/***/ }),

/***/ "./src/modules/createList.js":
/*!***********************************!*\
  !*** ./src/modules/createList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/modules/createProject.js");

class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'));
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Workout'));
  }
  setProjects(projects) {
    this.projects = projects;
  }
  getProjects() {
    return this.projects;
  }
  getProject(projectTitle) {
    return this.projects.find(project => project.getTitle() === projectTitle);
  }
  contains(projectTitle) {
    return this.projects.some(project => project.getTitle() === projectTitle);
  }
  addProject(newProject) {
    if (this.projects.find(project => project.title === newProject.title)) return;
    this.projects.push(newProject);
  }
  deleteProject(projectTitle) {
    const projectToDelete = this.projects.find(project => project.getTitle() === projectTitle);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
}

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  setTitle(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
  setTasks(tasks) {
    this.tasks = tasks;
  }
  getTasks() {
    return this.tasks;
  }
  getTask(tasktitle) {
    return this.tasks.find(task => task.getTitle() === tasktitle);
  }
  contains(tasktitle) {
    return this.tasks.some(task => task.getTitle() === tasktitle);
  }
  addTask(newTask) {
    if (this.tasks.find(task => task.getTitle() === newTask.title)) return;
    this.tasks.push(newTask);
  }
  deleteTask(tasktitle) {
    this.tasks = this.tasks.filter(task => task.title !== tasktitle);
  }
}

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
  setTitle(title) {
    this.title = title;
  }
  getTitle() {
    return this.title;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-white: #EEEEEE; /* content background,header text,sidebar text*/\n    --primary-purple: #18122B; /* header background */\n    --purple-background: #393053;\n    --primary-green: #51894D; /* add buttons */\n    --primary-red: #EB455F; /* remove/cancel buttons */\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\nbody {\n    background-color: var(--primary-white);\n    font-family: 'Roboto', sans-serif;\n    color: var(--primary-purple);\n    line-height: 1.6;\n    letter-spacing: 1px;\n}\n\n/* HEADER */\n.header-wrapper {\n    display:flex;\n    height: 10vh;\n    background-color: var(--purple-background);\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n\n.logo {\n    color:var(--primary-white);\n    font-weight: 700;\n    font-size: 2rem;\n}\n.contact-link,\n.footer-link{\n    color: var(--primary-white);\n    font-weight: 700;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin-right: 100px;\n}\n.footer-link{\n    font-weight: 500;\n    font-size: 1rem;\n}\n.contact-link:hover{\n    border-bottom: 2px solid var(--primary-white);\n}\n/* MAIN CONTENT */\n\n.main {\n    display:grid;\n    height: 85vh;\n    grid-template-columns: 300px 1fr;\n}\n\n/* SIDEBAR & PROJECTS */\n.sidebar{\n    grid-column: 1/2;\n    background-color: var(--primary-white);\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    padding: 30px 20px;\n}\n.predefined-lists{\n    margin-bottom: 25px;\n}\n\n.proj {\n    display:flex;\n    justify-content: space-between;\n    font-weight: 200;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.lists-title {\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: var(--primary-purple);\n    padding-left: 20px;   \n}\n\n.proj:hover{\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n.proj-title:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.open-project-modal{\n    display:block;\n    padding-left: 20px;\n    margin-top: 15px;\n    font-weight: 200;\n    color: var(--primary-purple);\n    border-radius: 5px;\n}\n\n.open-project-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n\n/* SPACE FOR TO DO'S */\n.content {\n    grid-column: 2/3;\n    padding: 30px 50px;\n}\n\n.title-wrapper{\n    display:flex;\n    justify-content: center;\n    color: var(--primary-purple);\n}\n\n.title{\n    padding: 0px 20px;\n    font-weight: 700;\n    font-size: 3rem;\n    border-bottom: 3px solid var(--primary-purple);\n}\n.task-title {\n    display:flex;\n    font-weight: 700;\n    font-size: 2rem;\n    color: var(--primary-purple);\n    padding-left: 5%;\n}\n\n/* CARD STYLING*/\n.card {\n    /* display: flex;\n    justify-content: space-between;\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n    align-items: center;\n    align-content: center; */\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n}\n\n.task-name{\n    font-weight: 600;\n    color:var(--primary-purple);\n}\n.description{\n    color:var(--primary-purple);    \n    font-style: italic;\n}\n.card-wrapper-two{\n    grid-column: 3/4;\n}\n.card:hover{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.card-wrapper-one {\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n}\n.card-wrapper-two{\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n    justify-content: flex-end;\n}\n.description {\n    padding: 0px 10px;\n}\n.priority-High{\n    color:var(--primary-red);\n}\n.priority-Low{\n    color:var(--primary-green);\n}\ni {\n    align-self: center;\n    justify-self: center;\n}\ni:hover{\n    cursor: pointer;\n}\n\n/* MODAL & MODAL CONTENT */\n.modal {\n    display:none;\n    position: relative;\n    z-index: 1;\n    background-color: #2e2b2b2d;\n    color: var(--primary-purple);\n    border-radius: 20px;\n    padding: 10px 20px 10px 5%;\n}\n.project-modal{\n    display:none;\n    padding: 10px 20px 10px 5%;\n}\n.open-modal{\n    font-weight: 200;\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    padding: 10px 20px 10px 5%;\n    display:block;\n}\n.open-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 20px;\n}\n\n.input-project {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n}\n.add-project{\n    margin-right:20px;\n}\n.add-task,\n.close-modal,\n.add-project,\n.close-project-modal{\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: 100px;\n}\n\n.add-task:hover,\n.add-project:hover {\n  background-color: #51894d90;\n}\n.close-modal:hover,\n.close-project-modal:hover {\n    background-color: var(--primary-red);\n    color:var(--primary-white);\n  }\n\n/*footer */\n.footer{ \n    display: flex;\n    width: 100%;\n    height: 5vh;\n    background-color: var(--purple-background);\n    color: var(--primary-white);\n    justify-content: center;\n    align-items: center;\n}\n\n/* global settings */\na,\na:visited {\n    text-decoration: none;\n}\nli {\n    list-style-type: none;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary-white: #EEEEEE; /* content background,header text,sidebar text*/\n    --primary-purple: #18122B; /* header background */\n    --purple-background: #393053;\n    --primary-green: #51894D; /* add buttons */\n    --primary-red: #EB455F; /* remove/cancel buttons */\n}\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\nbody {\n    background-color: var(--primary-white);\n    font-family: 'Roboto', sans-serif;\n    color: var(--primary-purple);\n    line-height: 1.6;\n    letter-spacing: 1px;\n}\n\n/* HEADER */\n.header-wrapper {\n    display:flex;\n    height: 10vh;\n    background-color: var(--purple-background);\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 40px;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n}\n\n.logo {\n    color:var(--primary-white);\n    font-weight: 700;\n    font-size: 2rem;\n}\n.contact-link,\n.footer-link{\n    color: var(--primary-white);\n    font-weight: 700;\n    font-size: 1.3rem;\n    cursor: pointer;\n    text-align: center;\n    margin-right: 100px;\n}\n.footer-link{\n    font-weight: 500;\n    font-size: 1rem;\n}\n.contact-link:hover{\n    border-bottom: 2px solid var(--primary-white);\n}\n/* MAIN CONTENT */\n\n.main {\n    display:grid;\n    height: 85vh;\n    grid-template-columns: 300px 1fr;\n}\n\n/* SIDEBAR & PROJECTS */\n.sidebar{\n    grid-column: 1/2;\n    background-color: var(--primary-white);\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;\n    padding: 30px 20px;\n}\n.predefined-lists{\n    margin-bottom: 25px;\n}\n\n.proj {\n    display:flex;\n    justify-content: space-between;\n    font-weight: 200;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.lists-title {\n    font-weight: 700;\n    font-size: 1.5rem;\n    color: var(--primary-purple);\n    padding-left: 20px;   \n}\n\n.proj:hover{\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n.proj-title:hover{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.open-project-modal{\n    display:block;\n    padding-left: 20px;\n    margin-top: 15px;\n    font-weight: 200;\n    color: var(--primary-purple);\n    border-radius: 5px;\n}\n\n.open-project-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 5px;\n}\n\n/* SPACE FOR TO DO'S */\n.content {\n    grid-column: 2/3;\n    padding: 30px 50px;\n}\n\n.title-wrapper{\n    display:flex;\n    justify-content: center;\n    color: var(--primary-purple);\n}\n\n.title{\n    padding: 0px 20px;\n    font-weight: 700;\n    font-size: 3rem;\n    border-bottom: 3px solid var(--primary-purple);\n}\n.task-title {\n    display:flex;\n    font-weight: 700;\n    font-size: 2rem;\n    color: var(--primary-purple);\n    padding-left: 5%;\n}\n\n/* CARD STYLING*/\n.card {\n    /* display: flex;\n    justify-content: space-between;\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n    align-items: center;\n    align-content: center; */\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 10px 5% 10px 5%;\n    margin: 10px 0px;\n}\n\n.task-name{\n    font-weight: 600;\n    color:var(--primary-purple);\n}\n.description{\n    color:var(--primary-purple);    \n    font-style: italic;\n}\n.card-wrapper-two{\n    grid-column: 3/4;\n}\n.card:hover{\n    background-color: #59454525;\n    border-radius: 20px;\n}\n.card-wrapper-one {\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n}\n.card-wrapper-two{\n    display:flex;\n    gap: 10px;\n    justify-items: center;\n    align-self: center;\n    justify-content: flex-end;\n}\n.description {\n    padding: 0px 10px;\n}\n.priority-High{\n    color:var(--primary-red);\n}\n.priority-Low{\n    color:var(--primary-green);\n}\ni {\n    align-self: center;\n    justify-self: center;\n}\ni:hover{\n    cursor: pointer;\n}\n\n/* MODAL & MODAL CONTENT */\n.modal {\n    display:none;\n    position: relative;\n    z-index: 1;\n    background-color: #2e2b2b2d;\n    color: var(--primary-purple);\n    border-radius: 20px;\n    padding: 10px 20px 10px 5%;\n}\n.project-modal{\n    display:none;\n    padding: 10px 20px 10px 5%;\n}\n.open-modal{\n    font-weight: 200;\n    color: var(--primary-purple);\n    font-size: 1.3rem;\n    padding: 10px 20px 10px 5%;\n    display:block;\n}\n.open-modal:hover{\n    cursor: pointer;\n    background-color: #51894d90;\n    border-radius: 20px;\n}\n\n.input-project {\n    width: 100%;\n    height: 40px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n}\n.add-project{\n    margin-right:20px;\n}\n.add-task,\n.close-modal,\n.add-project,\n.close-project-modal{\n  background-color: #fff;\n  border: 1px solid #d5d9d9;\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: #0f1111;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 29px;\n  padding: 0 10px 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: 100px;\n}\n\n.add-task:hover,\n.add-project:hover {\n  background-color: #51894d90;\n}\n.close-modal:hover,\n.close-project-modal:hover {\n    background-color: var(--primary-red);\n    color:var(--primary-white);\n  }\n\n/*footer */\n.footer{ \n    display: flex;\n    width: 100%;\n    height: 5vh;\n    background-color: var(--purple-background);\n    color: var(--primary-white);\n    justify-content: center;\n    align-items: center;\n}\n\n/* global settings */\na,\na:visited {\n    text-decoration: none;\n}\nli {\n    list-style-type: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//Full app functionability 
document.addEventListener('DOMContentLoaded', _modules_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

//Default Content
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Inbox'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Workout'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Weather App', 'Learn working with API', 'High', '2023-03-25'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Clear my room', 'Clothes+Dust', 'Low', '2023-03-20'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Workout', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('30 min Cardio', 'Running + Jumping Jacks', 'High', '2023-03-20'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Workout', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Stretching', '15 min stretching', 'Low', '2023-03-25'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sU0FBUyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxP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Q0MsZ0VBQWUsQ0FBQyxPQUFPLEVBQUMsSUFBSUMsMkRBQUksQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hHRCxnRUFBZSxDQUFDLE9BQU8sRUFBQyxJQUFJQywyREFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3ZGRCxnRUFBZSxDQUFDLFNBQVMsRUFBQyxJQUFJQywyREFBSSxDQUFDLGVBQWUsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDckdELGdFQUFlLENBQUMsU0FBUyxFQUFDLElBQUlDLDJEQUFJLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XG4gICAgc3RhdGljIGxvYWRIb21lcGFnZSgpe1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKS8vTG9hZCBhbGwgcHJvamVjdHMgZnJvbSBTdG9yYWdlLlxuICAgICAgICBVSS5vcGVuUHJvamVjdCgnSW5ib3gnKS8vQWx3YXlzIG9wZW4gJ0luYm94JyAoRGVmYXVsdCkgb24gcGFnZS1sb2FkLlxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKXtcbiAgICAgICAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpLy9GZXRjaCB0aGUgTGlzdCBmcm9tIFN0b3JhZ2UuXG4gICAgICAgIC5nZXRQcm9qZWN0cygpIC8vR2V0IGFsbCB0aGUgUHJvamVjdHMgZnJvbSBMaXN0LlxuICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT4geyAvL09uIEVhY2ggUHJvamVjdCxcbiAgICAgICAgICAgIGlmKHByb2plY3QudGl0bGUgIT09ICdJbmJveCcgJiZcbiAgICAgICAgICAgIHByb2plY3QudGl0bGUgIT09ICdXb3Jrb3V0Jyl7IC8vRXhjZXB0IHRoZSBEZWZhdWx0LFxuICAgICAgICAgICAgICAgIFVJLmNyZWF0ZVByb2plY3QocHJvamVjdC50aXRsZSkgLy9DcmVhdGUgSFRNTCBjb250ZW50LlxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICAgICAgVUkuaGFuZGxlTWFpblByb2pCdG5zKCkgLy9Jbml0aWFsaXplIHRoZSBQcm9qZWN0IEJ1dHRvbnMuXG4gICAgfVxuXG4gICBzdGF0aWMgbG9hZFRhc2tzKHByb2plY3ROYW1lKXsgLy9MT0FEUyBUQVNLUyBGUk9NIFNUT1JBR0VcbiAgICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgICAgVUkuY2xlYXJUYXNrcygpXG4gICAgIGxldCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICBsZXQgY3VycmVudFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVxuICAgICBjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4gVUkuY3JlYXRlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlKSlcbiAgICB9XG4gICAgLy9BREQgTkVXIENPTlRFTlQgVE8gU1RPUkFHRVxuICAgc3RhdGljIGFkZFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgaWYocHJvamVjdE5hbWUgPT09ICcnICl7XG4gICAgICAgICByZXR1cm5cbiAgICB9IFxuICAgIGlmKFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5jb250YWlucyhwcm9qZWN0TmFtZSkpe1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSlcbiAgICBVSS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgVUkubG9hZFByb2plY3RzKCk7XG4gICB9ICAgICBcblxuICAgc3RhdGljIGFkZFRhc2soKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7IFxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSkpO1xuICAgIFVJLmNyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSlcbiAgIH1cblxuICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKXsgLy8gT1BFTiBUSEUgQ0xJQ0tFRCBQUk9KRUNUXG4gICAgY29uc3QgcHJvamVjdFRpdGxlRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlRE9NLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbn1cblxuXG4gICAvL0RFTEVURSBDT05URU5UIEZST00gU1RPUkFHRVxuXG4gICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgIH1cblxuICAgc3RhdGljIGRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHRhc2tUb0RlbGV0ZSl7IFxuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCx0YXNrVG9EZWxldGUpO1xuICAgfVxuICAgLy9DTEVBUiBIVE1MIENPTlRFTlQgXG5cbiAgIHN0YXRpYyBjbGVhclByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUw9XCJcIjtcbiAgIH1cblxuICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAvLyBCVVRUT05TIFBST0pFQ1QrVEFTS1xuICAgc3RhdGljIGhhbmRsZU1haW5Qcm9qQnRucygpe1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXByb2plY3QnKTsgLy9TZWxlY3QgRGVmYXVsdCBQcm9qZWN0KGFscmVhZHkgaW4gSFRNTCkuXG4gICAgY29uc3Qgd29ya291dFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya291dC1wcm9qZWN0Jyk7XG4gICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTsgLy9TZWxlY3QgT3BlbiBNb2RhbCBCdXR0b25cbiAgICBjb25zdCBjbG9zZVByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJyk7IC8vU2VsZWN0IENsb3NlIE1vZGFsIEJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTsgLy9TZWxlY3QgQWRkIFByb2plY3QgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QnKTsgLy9TZWxlY3QgRGVsZXRlIFByb2plY3QgQnV0dG9uXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1uYW1lJyk7IC8vU2VsZWN0IFByb2plY3QgLSBvbi1jbGljayBFdmVudCBcblxuICAgIG9wZW5Qcm9qTW9kYWwub25jbGljayA9IFVJLm9wZW5Qcm9qZWN0TW9kYWw7XG4gICAgY2xvc2VQcm9qTW9kYWwub25jbGljayA9IFVJLmNsb3NlUHJvamVjdE1vZGFsO1xuXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vQXZvaWQgRm9ybSdzIGRlZmF1bHQgYmVoYXZpb3VyLlxuICAgICAgICBVSS5hZGRQcm9qZWN0KCk7IC8vQ2FsbHMgRnVuY3Rpb24gLT4gQWRkIFByb2plY3QuXG4gICAgICAgIFVJLmNsb3NlUHJvamVjdE1vZGFsKCk7IC8vQ2xvc2VzIEZvcm0uXG4gICAgfSlcblxuICAgIGRlbGV0ZVByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4gLy9TZWxlY3QgQWxsIEJ1dHRvbnMuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vRmluZCBjbGlja2VkIEJ1dHRvbi5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MOyAvL0ZpbmQgU2VsZWN0ZWQgUHJvamVjdFxuICAgICAgICBVSS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTsgLy9EZWxldGUgUHJvamVjdC5cbiAgICAgICAgVUkuY2xlYXJQcm9qZWN0cygpOyAvL0NsZWFyIFNpZGViYXIuXG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpOyAvL1JlbG9hZCBleGlzdGluZyBQcm9qZWN0cyBmcm9tIFN0b3JhZ2UuXG4gICAgfSkpXG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9GaW5kIGNsaWNrZWQgUHJvamVjdC5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50OyAvL1NlbGVjdCBQcm9qZWN0LlxuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0TmFtZSk7IC8vT3BlbiBQcm9qZWN0J3MgVGFza3MuXG4gICAgfSkpXG4gICAgLy9EZWZhdWx0IHByb2plY3QgZnVuY3Rpb24gKFdpdGhvdXQgdGhpcywgaXQgc2VlbXMgdGhhdCBteSBmdW5jdGlvbnMgYXJlIHJlcGVhdGluZyB0d2ljZSlcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdJbmJveCcpXG4gICAgfSlcbiAgICB3b3Jrb3V0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnV29ya291dCcpXG4gICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlTWFpblRhc2tCdG5zKCl7XG4gICAgICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tb2RhbCcpLy9vcGVuIGFkZCB0YXNrIG1vZGFsIFxuICAgICAgICBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpLy9jbG9zZSBhZGQgdGFzayBtb2RhbCBcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLy9hZGQgYSBuZXcgdGFza1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdGFzaycpLy9kZWxldGUgYW4gZXhpc3RpbmcgdGFza1xuXG4gICAgICAgIG9wZW5UYXNrTW9kYWwub25jbGljayA9IFVJLm9wZW5UYXNrTW9kYWw7XG4gICAgICAgIGNsb3NlVGFza01vZGFsLm9uY2xpY2sgPSBVSS5jbG9zZVRhc2tNb2RhbDtcbiBcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIFVJLmFkZFRhc2soKVxuICAgICAgICAgICAgVUkuY2xvc2VUYXNrTW9kYWwoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRlbGV0ZVRhc2tCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RvRGVsZXRlID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza1RvRGVsZXRlKVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgICAgIFVJLmRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHRhc2tUb0RlbGV0ZSlcbiAgICAgICAgICAgICAgICBVSS5jbGVhclRhc2tzKClcbiAgICAgICAgICAgICAgICBVSS5sb2FkVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICB9XG4gICAgLy8gQ1JFQVRFIEhUTUwgQ09OVEVOVCAtIFBST0pFQ1QgKyBUQVNLXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3QodGl0bGUpe1xuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXN0cycpOyAvL1NlbGVjdCBTaWRlYmFyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2pcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicHJvai1uYW1lIHByb2otdGl0bGVcIj4ke3RpdGxlfTwvbGk+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGVsZXRlLXByb2plY3RcIj48L2k+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH0gXG5cbiAgIHN0YXRpYyBjcmVhdGVUYXNrKG5hbWUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSl7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXItb25lXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGFzay1uYW1lXCI+JHtuYW1lfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlci10d29cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eS0ke3ByaW9yaXR5fVwiPiR7cHJpb3JpdHl9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImR1ZS1kYXRlXCI+JHtkdWVEYXRlfTwvcD5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS14bWFyayBkZWxldGUtdGFza1wiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgIH1cblxuICAgIC8vTU9EQUwgT1BFTi9DTE9TRSAtIFBST0pFQ1QgKyBUQVNLXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0TW9kYWwoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG9wZW5Qcm9qTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgc3RhdGljIGNsb3NlUHJvamVjdE1vZGFsKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSA9IFwiXCJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICAgICAgb3BlblByb2pNb2RhbC5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICB9XG5cbiAgIHN0YXRpYyBvcGVuVGFza01vZGFsKCl7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgIH1cblxuICAgc3RhdGljIGNsb3NlVGFza01vZGFsKCl7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSBcIlwiXG4gICAgICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICAgICAgb3BlblRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICB9XG59XG5cbiIsImltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBzYXZlVG9kb0xpc3QoZGF0YSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuICBcbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKVxuICAgICAgKVxuICBcbiAgICAgIHRvZG9MaXN0LnNldFByb2plY3RzKFxuICAgICAgICB0b2RvTGlzdFxuICAgICAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcbiAgICAgIClcbiAgXG4gICAgICB0b2RvTGlzdFxuICAgICAgLmdldFByb2plY3RzKClcbiAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PlxuICAgICAgICBwcm9qZWN0LnNldFRhc2tzKFxuICAgICAgICAgIHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIHJldHVybiB0b2RvTGlzdFxuICAgIH1cbiAgXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmFkZFByb2plY3QocHJvamVjdClcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpXG4gICAgfVxuICBcbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmFkZFRhc2sodGFzaylcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGRlbGV0ZVRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSlcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbn0gICIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1dvcmtvdXQnKSlcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKVxuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmV3UHJvamVjdC50aXRsZSkpXG4gICAgICByZXR1cm5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlXG4gICAgKVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuICBcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICBcbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrKHRhc2t0aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrdGl0bGUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2sudGl0bGUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza3RpdGxlKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHsgXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIH1cbiAgICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktd2hpdGU6ICNFRUVFRUU7IC8qIGNvbnRlbnQgYmFja2dyb3VuZCxoZWFkZXIgdGV4dCxzaWRlYmFyIHRleHQqL1xcbiAgICAtLXByaW1hcnktcHVycGxlOiAjMTgxMjJCOyAvKiBoZWFkZXIgYmFja2dyb3VuZCAqL1xcbiAgICAtLXB1cnBsZS1iYWNrZ3JvdW5kOiAjMzkzMDUzO1xcbiAgICAtLXByaW1hcnktZ3JlZW46ICM1MTg5NEQ7IC8qIGFkZCBidXR0b25zICovXFxuICAgIC0tcHJpbWFyeS1yZWQ6ICNFQjQ1NUY7IC8qIHJlbW92ZS9jYW5jZWwgYnV0dG9ucyAqL1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmNvbnRhY3QtbGluayxcXG4uZm9vdGVyLWxpbmt7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG4uZm9vdGVyLWxpbmt7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRhY3QtbGluazpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktd2hpdGUpO1xcbn1cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuLyogU0lERUJBUiAmIFBST0pFQ1RTICovXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbn1cXG4ucHJlZGVmaW5lZC1saXN0c3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubGlzdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgIFxcbn1cXG5cXG4ucHJvajpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9qLXRpdGxlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm9wZW4tcHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuLXByb2plY3QtbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNQQUNFIEZPUiBUTyBETydTICovXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbi8qIENBUkQgU1RZTElORyovXFxuLmNhcmQge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcHVycGxlKTsgICAgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0NTQ1MjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5jYXJkLXdyYXBwZXItb25lIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuLnByaW9yaXR5LUhpZ2h7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcmVkKTtcXG59XFxuLnByaW9yaXR5LUxvd3tcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcbmkge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5pOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMICYgTU9EQUwgQ09OVEVOVCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyYjJiMmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ucHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLm9wZW4tbW9kYWx7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuLm9wZW4tbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxuLmFkZC10YXNrLFxcbi5jbG9zZS1tb2RhbCxcXG4uYWRkLXByb2plY3QsXFxuLmNsb3NlLXByb2plY3QtbW9kYWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjEzLCAyMTcsIDIxNywgLjUpIDAgMnB4IDVweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMGYxMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG59XFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIH1cXG5cXG4vKmZvb3RlciAqL1xcbi5mb290ZXJ7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogZ2xvYmFsIHNldHRpbmdzICovXFxuYSxcXG5hOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCLEVBQUUsK0NBQStDO0lBQ3pFLHlCQUF5QixFQUFFLHNCQUFzQjtJQUNqRCw0QkFBNEI7SUFDNUIsd0JBQXdCLEVBQUUsZ0JBQWdCO0lBQzFDLHNCQUFzQixFQUFFLDBCQUEwQjtBQUN0RDtBQUNBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHdDQUF3QztBQUM1Qzs7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QiwrQ0FBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0VBQzVCOztBQUVGLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktd2hpdGU6ICNFRUVFRUU7IC8qIGNvbnRlbnQgYmFja2dyb3VuZCxoZWFkZXIgdGV4dCxzaWRlYmFyIHRleHQqL1xcbiAgICAtLXByaW1hcnktcHVycGxlOiAjMTgxMjJCOyAvKiBoZWFkZXIgYmFja2dyb3VuZCAqL1xcbiAgICAtLXB1cnBsZS1iYWNrZ3JvdW5kOiAjMzkzMDUzO1xcbiAgICAtLXByaW1hcnktZ3JlZW46ICM1MTg5NEQ7IC8qIGFkZCBidXR0b25zICovXFxuICAgIC0tcHJpbWFyeS1yZWQ6ICNFQjQ1NUY7IC8qIHJlbW92ZS9jYW5jZWwgYnV0dG9ucyAqL1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmNvbnRhY3QtbGluayxcXG4uZm9vdGVyLWxpbmt7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG4uZm9vdGVyLWxpbmt7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRhY3QtbGluazpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktd2hpdGUpO1xcbn1cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuLyogU0lERUJBUiAmIFBST0pFQ1RTICovXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbn1cXG4ucHJlZGVmaW5lZC1saXN0c3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubGlzdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgIFxcbn1cXG5cXG4ucHJvajpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9qLXRpdGxlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm9wZW4tcHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuLXByb2plY3QtbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNQQUNFIEZPUiBUTyBETydTICovXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbi8qIENBUkQgU1RZTElORyovXFxuLmNhcmQge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcHVycGxlKTsgICAgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0NTQ1MjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5jYXJkLXdyYXBwZXItb25lIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuLnByaW9yaXR5LUhpZ2h7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcmVkKTtcXG59XFxuLnByaW9yaXR5LUxvd3tcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcbmkge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5pOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMICYgTU9EQUwgQ09OVEVOVCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyYjJiMmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ucHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLm9wZW4tbW9kYWx7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuLm9wZW4tbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxuLmFkZC10YXNrLFxcbi5jbG9zZS1tb2RhbCxcXG4uYWRkLXByb2plY3QsXFxuLmNsb3NlLXByb2plY3QtbW9kYWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjEzLCAyMTcsIDIxNywgLjUpIDAgMnB4IDVweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMGYxMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG59XFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIH1cXG5cXG4vKmZvb3RlciAqL1xcbi5mb290ZXJ7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogZ2xvYmFsIHNldHRpbmdzICovXFxuYSxcXG5hOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL0Z1bGwgYXBwIGZ1bmN0aW9uYWJpbGl0eSBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZXBhZ2UpXG5cbi8vRGVmYXVsdCBDb250ZW50XG5TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ0luYm94JykpXG5TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ1dvcmtvdXQnKSlcblN0b3JhZ2UuYWRkVGFzaygnSW5ib3gnLG5ldyBUYXNrKCdXZWF0aGVyIEFwcCcsICdMZWFybiB3b3JraW5nIHdpdGggQVBJJywgJ0hpZ2gnLCAnMjAyMy0wMy0yNScpKVxuU3RvcmFnZS5hZGRUYXNrKCdJbmJveCcsbmV3IFRhc2soJ0NsZWFyIG15IHJvb20nLCAnQ2xvdGhlcytEdXN0JywgJ0xvdycsICcyMDIzLTAzLTIwJykpXG5TdG9yYWdlLmFkZFRhc2soJ1dvcmtvdXQnLG5ldyBUYXNrKCczMCBtaW4gQ2FyZGlvJywgJ1J1bm5pbmcgKyBKdW1waW5nIEphY2tzJywgJ0hpZ2gnLCAnMjAyMy0wMy0yMCcpKVxuU3RvcmFnZS5hZGRUYXNrKCdXb3Jrb3V0JyxuZXcgVGFzaygnU3RyZXRjaGluZycsICcxNSBtaW4gc3RyZXRjaGluZycsICdMb3cnLCAnMjAyMy0wMy0yNScpKVxuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJTdG9yYWdlIiwiVGFzayIsIlVJIiwibG9hZEhvbWVwYWdlIiwibG9hZFByb2plY3RzIiwib3BlblByb2plY3QiLCJnZXRUb2RvTGlzdCIsImdldFByb2plY3RzIiwiZm9yRWFjaCIsInByb2plY3QiLCJ0aXRsZSIsImNyZWF0ZVByb2plY3QiLCJoYW5kbGVNYWluUHJvakJ0bnMiLCJsb2FkVGFza3MiLCJwcm9qZWN0TmFtZSIsImhhbmRsZU1haW5UYXNrQnRucyIsImNsZWFyVGFza3MiLCJjdXJyZW50UHJvamVjdCIsImdldFByb2plY3QiLCJjdXJyZW50VGFza3MiLCJnZXRUYXNrcyIsInRhc2siLCJjcmVhdGVUYXNrIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsImR1ZURhdGUiLCJhZGRQcm9qZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhclByb2plY3RzIiwiYWRkVGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImRhdGUiLCJwcm9qZWN0VGl0bGVET00iLCJkZWxldGVQcm9qZWN0IiwiZGVsZXRlVGFzayIsInRhc2tUb0RlbGV0ZSIsInByb2plY3RzQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwidGFza0NvbnRhaW5lciIsImRlZmF1bHRQcm9qZWN0Iiwid29ya291dFByb2plY3QiLCJvcGVuUHJvak1vZGFsIiwiY2xvc2VQcm9qTW9kYWwiLCJhZGRQcm9qQnRuIiwiZGVsZXRlUHJvamVjdEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWxsUHJvamVjdHMiLCJvbmNsaWNrIiwib3BlblByb2plY3RNb2RhbCIsImNsb3NlUHJvamVjdE1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvcGVuVGFza01vZGFsIiwiY2xvc2VUYXNrTW9kYWwiLCJhZGRUYXNrQnRuIiwiZGVsZXRlVGFza0J0bnMiLCJpbm5lclRleHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInByb2plY3RNb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsInRhc2tNb2RhbCIsIlRvZG9MaXN0Iiwic2F2ZVRvZG9MaXN0IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwidG9kb0xpc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXRQcm9qZWN0cyIsIm1hcCIsInNldFRhc2tzIiwidGFza05hbWUiLCJjb25zdHJ1Y3RvciIsInByb2plY3RzIiwicHVzaCIsInByb2plY3RUaXRsZSIsImZpbmQiLCJnZXRUaXRsZSIsInNvbWUiLCJuZXdQcm9qZWN0IiwicHJvamVjdFRvRGVsZXRlIiwic3BsaWNlIiwiaW5kZXhPZiIsInRhc2tzIiwic2V0VGl0bGUiLCJnZXRUYXNrIiwidGFza3RpdGxlIiwibmV3VGFzayIsImZpbHRlciJdLCJzb3VyY2VSb290IjoiIn0=