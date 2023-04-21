/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
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
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Storage */ "./src/modules/Storage.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






//Full app functionability 
document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage);

//Default Content
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Inbox'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Workout'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Upgrade this project', 'Learn Firebase', 'High', '2023-03-25'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Inbox', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Clear my room', 'Clothes+Dust', 'Low', '2023-03-20'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Workout', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('30 min Cardio', 'Indoor Bike', 'High', '2023-03-20'));
_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask('Workout', new _modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"]('Stretching', '15 min stretching', 'Low', '2023-03-25'));

//todoapp-ab18a
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDRSxtRUFBa0IsQ0FBQyxJQUFJRiw4REFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDRSxnRUFBZSxDQUFDLE9BQU8sRUFBQyxJQUFJRCwyREFBSSxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNqR0MsZ0VBQWUsQ0FBQyxPQUFPLEVBQUMsSUFBSUQsMkRBQUksQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2RkMsZ0VBQWUsQ0FBQyxTQUFTLEVBQUMsSUFBSUQsMkRBQUksQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN6RkMsZ0VBQWUsQ0FBQyxTQUFTLEVBQUMsSUFBSUQsMkRBQUksQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDOztBQUUzRixlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBuZXcgVG9kb0xpc3QoKSxcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSlcbiAgICAgIClcbiAgXG4gICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgICApXG4gIFxuICAgICAgdG9kb0xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICApXG4gICAgICApXG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKHRhc2spXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmRlbGV0ZVRhc2sodGFza05hbWUpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG59ICAiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XG4gICAgc3RhdGljIGxvYWRIb21lcGFnZSgpe1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKS8vTG9hZCBhbGwgcHJvamVjdHMgZnJvbSBTdG9yYWdlLlxuICAgICAgICBVSS5vcGVuUHJvamVjdCgnSW5ib3gnKS8vQWx3YXlzIG9wZW4gJ0luYm94JyAoRGVmYXVsdCkgb24gcGFnZS1sb2FkLlxuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKXtcbiAgICAgICAgU3RvcmFnZS5nZXRUb2RvTGlzdCgpLy9GZXRjaCB0aGUgTGlzdCBmcm9tIFN0b3JhZ2UuXG4gICAgICAgIC5nZXRQcm9qZWN0cygpIC8vR2V0IGFsbCB0aGUgUHJvamVjdHMgZnJvbSBMaXN0LlxuICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT4geyAvL09uIEVhY2ggUHJvamVjdCxcbiAgICAgICAgICAgIGlmKHByb2plY3QudGl0bGUgIT09ICdJbmJveCcgJiZcbiAgICAgICAgICAgIHByb2plY3QudGl0bGUgIT09ICdXb3Jrb3V0Jyl7IC8vRXhjZXB0IHRoZSBEZWZhdWx0LFxuICAgICAgICAgICAgICAgIFVJLmNyZWF0ZVByb2plY3QocHJvamVjdC50aXRsZSkgLy9DcmVhdGUgSFRNTCBjb250ZW50LlxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICAgICAgVUkuaGFuZGxlTWFpblByb2pCdG5zKCkgLy9Jbml0aWFsaXplIHRoZSBQcm9qZWN0IEJ1dHRvbnMuXG4gICAgfVxuXG4gICBzdGF0aWMgbG9hZFRhc2tzKHByb2plY3ROYW1lKXsgLy9MT0FEUyBUQVNLUyBGUk9NIFNUT1JBR0VcbiAgICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgICAgVUkuY2xlYXJUYXNrcygpXG4gICAgIGxldCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICBsZXQgY3VycmVudFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVxuICAgICBjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4gVUkuY3JlYXRlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlKSlcbiAgICB9XG4gICAgLy9BREQgTkVXIENPTlRFTlQgVE8gU1RPUkFHRVxuICAgc3RhdGljIGFkZFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgaWYocHJvamVjdE5hbWUgPT09ICcnICl7XG4gICAgICAgICByZXR1cm5cbiAgICB9IFxuICAgIGlmKFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5jb250YWlucyhwcm9qZWN0TmFtZSkpe1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKSlcbiAgICBVSS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgVUkubG9hZFByb2plY3RzKCk7XG4gICB9ICAgICBcblxuICAgc3RhdGljIGFkZFRhc2soKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7IFxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSkpO1xuICAgIFVJLmNyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSlcbiAgIH1cblxuICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKXsgLy8gT1BFTiBUSEUgQ0xJQ0tFRCBQUk9KRUNUXG4gICAgY29uc3QgcHJvamVjdFRpdGxlRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlRE9NLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbn1cblxuXG4gICAvL0RFTEVURSBDT05URU5UIEZST00gU1RPUkFHRVxuXG4gICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSl7XG4gICAgU3RvcmFnZS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgIH1cblxuICAgc3RhdGljIGRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHRhc2tUb0RlbGV0ZSl7IFxuICAgIFN0b3JhZ2UuZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCx0YXNrVG9EZWxldGUpO1xuICAgfVxuICAgLy9DTEVBUiBIVE1MIENPTlRFTlQgXG5cbiAgIHN0YXRpYyBjbGVhclByb2plY3RzKCl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUw9XCJcIjtcbiAgIH1cblxuICAgc3RhdGljIGNsZWFyVGFza3MoKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAvLyBCVVRUT05TIFBST0pFQ1QrVEFTS1xuICAgc3RhdGljIGhhbmRsZU1haW5Qcm9qQnRucygpe1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXByb2plY3QnKTsgLy9TZWxlY3QgRGVmYXVsdCBQcm9qZWN0KGFscmVhZHkgaW4gSFRNTCkuXG4gICAgY29uc3Qgd29ya291dFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ya291dC1wcm9qZWN0Jyk7XG4gICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTsgLy9TZWxlY3QgT3BlbiBNb2RhbCBCdXR0b25cbiAgICBjb25zdCBjbG9zZVByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJyk7IC8vU2VsZWN0IENsb3NlIE1vZGFsIEJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTsgLy9TZWxlY3QgQWRkIFByb2plY3QgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QnKTsgLy9TZWxlY3QgRGVsZXRlIFByb2plY3QgQnV0dG9uXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvai1uYW1lJyk7IC8vU2VsZWN0IFByb2plY3QgLSBvbi1jbGljayBFdmVudCBcblxuICAgIG9wZW5Qcm9qTW9kYWwub25jbGljayA9IFVJLm9wZW5Qcm9qZWN0TW9kYWw7XG4gICAgY2xvc2VQcm9qTW9kYWwub25jbGljayA9IFVJLmNsb3NlUHJvamVjdE1vZGFsO1xuXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vQXZvaWQgRm9ybSdzIGRlZmF1bHQgYmVoYXZpb3VyLlxuICAgICAgICBVSS5hZGRQcm9qZWN0KCk7IC8vQ2FsbHMgRnVuY3Rpb24gLT4gQWRkIFByb2plY3QuXG4gICAgICAgIFVJLmNsb3NlUHJvamVjdE1vZGFsKCk7IC8vQ2xvc2VzIEZvcm0uXG4gICAgfSlcblxuICAgIGRlbGV0ZVByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4gLy9TZWxlY3QgQWxsIEJ1dHRvbnMuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vRmluZCBjbGlja2VkIEJ1dHRvbi5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MOyAvL0ZpbmQgU2VsZWN0ZWQgUHJvamVjdFxuICAgICAgICBVSS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTsgLy9EZWxldGUgUHJvamVjdC5cbiAgICAgICAgVUkuY2xlYXJQcm9qZWN0cygpOyAvL0NsZWFyIFNpZGViYXIuXG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpOyAvL1JlbG9hZCBleGlzdGluZyBQcm9qZWN0cyBmcm9tIFN0b3JhZ2UuXG4gICAgfSkpXG5cbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9GaW5kIGNsaWNrZWQgUHJvamVjdC5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50OyAvL1NlbGVjdCBQcm9qZWN0LlxuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0TmFtZSk7IC8vT3BlbiBQcm9qZWN0J3MgVGFza3MuXG4gICAgfSkpXG4gICAgLy9EZWZhdWx0IHByb2plY3QgZnVuY3Rpb24gKFdpdGhvdXQgdGhpcywgaXQgc2VlbXMgdGhhdCBteSBmdW5jdGlvbnMgYXJlIHJlcGVhdGluZyB0d2ljZSlcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdJbmJveCcpXG4gICAgfSlcbiAgICB3b3Jrb3V0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnV29ya291dCcpXG4gICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlTWFpblRhc2tCdG5zKCl7XG4gICAgICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tb2RhbCcpLy9vcGVuIGFkZCB0YXNrIG1vZGFsIFxuICAgICAgICBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpLy9jbG9zZSBhZGQgdGFzayBtb2RhbCBcbiAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpLy9hZGQgYSBuZXcgdGFza1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdGFzaycpLy9kZWxldGUgYW4gZXhpc3RpbmcgdGFza1xuXG4gICAgICAgIG9wZW5UYXNrTW9kYWwub25jbGljayA9IFVJLm9wZW5UYXNrTW9kYWw7XG4gICAgICAgIGNsb3NlVGFza01vZGFsLm9uY2xpY2sgPSBVSS5jbG9zZVRhc2tNb2RhbDtcbiBcbiAgICAgICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIFVJLmFkZFRhc2soKVxuICAgICAgICAgICAgVUkuY2xvc2VUYXNrTW9kYWwoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRlbGV0ZVRhc2tCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RvRGVsZXRlID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza1RvRGVsZXRlKVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgICAgIFVJLmRlbGV0ZVRhc2soY3VycmVudFByb2plY3QsIHRhc2tUb0RlbGV0ZSlcbiAgICAgICAgICAgICAgICBVSS5jbGVhclRhc2tzKClcbiAgICAgICAgICAgICAgICBVSS5sb2FkVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICB9XG4gICAgLy8gQ1JFQVRFIEhUTUwgQ09OVEVOVCAtIFBST0pFQ1QgKyBUQVNLXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3QodGl0bGUpe1xuICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXN0cycpOyAvL1NlbGVjdCBTaWRlYmFyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2pcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicHJvai1uYW1lIHByb2otdGl0bGVcIj4ke3RpdGxlfTwvbGk+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGVsZXRlLXByb2plY3RcIj48L2k+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH0gXG5cbiAgIHN0YXRpYyBjcmVhdGVUYXNrKG5hbWUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSl7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXItb25lXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGFzay1uYW1lXCI+JHtuYW1lfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlci10d29cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcmlvcml0eS0ke3ByaW9yaXR5fVwiPiR7cHJpb3JpdHl9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImR1ZS1kYXRlXCI+JHtkdWVEYXRlfTwvcD5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS14bWFyayBkZWxldGUtdGFza1wiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgIH1cblxuICAgIC8vTU9EQUwgT1BFTi9DTE9TRSAtIFBST0pFQ1QgKyBUQVNLXG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0TW9kYWwoKXtcbiAgICAgICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIG9wZW5Qcm9qTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgc3RhdGljIGNsb3NlUHJvamVjdE1vZGFsKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSA9IFwiXCJcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICAgICAgb3BlblByb2pNb2RhbC5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICB9XG5cbiAgIHN0YXRpYyBvcGVuVGFza01vZGFsKCl7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgIH1cblxuICAgc3RhdGljIGNsb3NlVGFza01vZGFsKCl7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSBcIlwiXG4gICAgICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICAgICAgb3BlblRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICB9XG59XG5cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ1dvcmtvdXQnKSlcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKVxuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmV3UHJvamVjdC50aXRsZSkpXG4gICAgICByZXR1cm5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlXG4gICAgKVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuICBcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICBcbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrKHRhc2t0aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrdGl0bGUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2sudGl0bGUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza3RpdGxlKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHsgXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIH1cbiAgICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktd2hpdGU6ICNFRUVFRUU7IC8qIGNvbnRlbnQgYmFja2dyb3VuZCxoZWFkZXIgdGV4dCxzaWRlYmFyIHRleHQqL1xcbiAgICAtLXByaW1hcnktcHVycGxlOiAjMTgxMjJCOyAvKiBoZWFkZXIgYmFja2dyb3VuZCAqL1xcbiAgICAtLXB1cnBsZS1iYWNrZ3JvdW5kOiAjMzkzMDUzO1xcbiAgICAtLXByaW1hcnktZ3JlZW46ICM1MTg5NEQ7IC8qIGFkZCBidXR0b25zICovXFxuICAgIC0tcHJpbWFyeS1yZWQ6ICNFQjQ1NUY7IC8qIHJlbW92ZS9jYW5jZWwgYnV0dG9ucyAqL1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmNvbnRhY3QtbGluayxcXG4uZm9vdGVyLWxpbmt7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG4uZm9vdGVyLWxpbmt7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRhY3QtbGluazpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktd2hpdGUpO1xcbn1cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuLyogU0lERUJBUiAmIFBST0pFQ1RTICovXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbn1cXG4ucHJlZGVmaW5lZC1saXN0c3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubGlzdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgIFxcbn1cXG5cXG4ucHJvajpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9qLXRpdGxlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm9wZW4tcHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuLXByb2plY3QtbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNQQUNFIEZPUiBUTyBETydTICovXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbi8qIENBUkQgU1RZTElORyovXFxuLmNhcmQge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcHVycGxlKTsgICAgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0NTQ1MjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5jYXJkLXdyYXBwZXItb25lIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuLnByaW9yaXR5LUhpZ2h7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcmVkKTtcXG59XFxuLnByaW9yaXR5LUxvd3tcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcbmkge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5pOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMICYgTU9EQUwgQ09OVEVOVCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyYjJiMmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ucHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLm9wZW4tbW9kYWx7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuLm9wZW4tbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxuLmFkZC10YXNrLFxcbi5jbG9zZS1tb2RhbCxcXG4uYWRkLXByb2plY3QsXFxuLmNsb3NlLXByb2plY3QtbW9kYWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjEzLCAyMTcsIDIxNywgLjUpIDAgMnB4IDVweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMGYxMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG59XFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIH1cXG5cXG4vKmZvb3RlciAqL1xcbi5mb290ZXJ7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogZ2xvYmFsIHNldHRpbmdzICovXFxuYSxcXG5hOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1h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SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7Ozs7RUFJRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSwyQkFBMkI7QUFDN0I7QUFDQTs7SUFFSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0VBQzVCOztBQUVGLFVBQVU7QUFDVjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7O0lBRUkscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktd2hpdGU6ICNFRUVFRUU7IC8qIGNvbnRlbnQgYmFja2dyb3VuZCxoZWFkZXIgdGV4dCxzaWRlYmFyIHRleHQqL1xcbiAgICAtLXByaW1hcnktcHVycGxlOiAjMTgxMjJCOyAvKiBoZWFkZXIgYmFja2dyb3VuZCAqL1xcbiAgICAtLXB1cnBsZS1iYWNrZ3JvdW5kOiAjMzkzMDUzO1xcbiAgICAtLXByaW1hcnktZ3JlZW46ICM1MTg5NEQ7IC8qIGFkZCBidXR0b25zICovXFxuICAgIC0tcHJpbWFyeS1yZWQ6ICNFQjQ1NUY7IC8qIHJlbW92ZS9jYW5jZWwgYnV0dG9ucyAqL1xcbn1cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI0JSkgMHB4IDNweCA4cHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmNvbnRhY3QtbGluayxcXG4uZm9vdGVyLWxpbmt7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbn1cXG4uZm9vdGVyLWxpbmt7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmNvbnRhY3QtbGluazpob3ZlcntcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktd2hpdGUpO1xcbn1cXG4vKiBNQUlOIENPTlRFTlQgKi9cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuLyogU0lERUJBUiAmIFBST0pFQ1RTICovXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xcbn1cXG4ucHJlZGVmaW5lZC1saXN0c3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLnByb2oge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubGlzdHMtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyAgIFxcbn1cXG5cXG4ucHJvajpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5wcm9qLXRpdGxlOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLm9wZW4tcHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpibG9jaztcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuLXByb2plY3QtbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNQQUNFIEZPUiBUTyBETydTICovXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxufVxcblxcbi8qIENBUkQgU1RZTElORyovXFxuLmNhcmQge1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDEwcHggNSUgMTBweCA1JTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuLnRhc2stbmFtZXtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcHVycGxlKTsgICAgXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmNhcmQtd3JhcHBlci10d297XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5jYXJkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk0NTQ1MjU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5jYXJkLXdyYXBwZXItb25lIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuLnByaW9yaXR5LUhpZ2h7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktcmVkKTtcXG59XFxuLnByaW9yaXR5LUxvd3tcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1ncmVlbik7XFxufVxcbmkge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5pOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1PREFMICYgTU9EQUwgQ09OVEVOVCAqL1xcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyYjJiMmQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ucHJvamVjdC1tb2RhbHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG59XFxuLm9wZW4tbW9kYWx7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA1JTtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuLm9wZW4tbW9kYWw6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLmFkZC1wcm9qZWN0e1xcbiAgICBtYXJnaW4tcmlnaHQ6MjBweDtcXG59XFxuLmFkZC10YXNrLFxcbi5jbG9zZS1tb2RhbCxcXG4uYWRkLXByb2plY3QsXFxuLmNsb3NlLXByb2plY3QtbW9kYWx7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDlkOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjEzLCAyMTcsIDIxNywgLjUpIDAgMnB4IDVweCAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMGYxMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIsXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTg5NGQ5MDtcXG59XFxuLmNsb3NlLW1vZGFsOmhvdmVyLFxcbi5jbG9zZS1wcm9qZWN0LW1vZGFsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1yZWQpO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gIH1cXG5cXG4vKmZvb3RlciAqL1xcbi5mb290ZXJ7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogZ2xvYmFsIHNldHRpbmdzICovXFxuYSxcXG5hOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL1N0b3JhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9GdWxsIGFwcCBmdW5jdGlvbmFiaWxpdHkgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKVxuXG4vL0RlZmF1bHQgQ29udGVudFxuU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdJbmJveCcpKVxuU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdXb3Jrb3V0JykpXG5TdG9yYWdlLmFkZFRhc2soJ0luYm94JyxuZXcgVGFzaygnVXBncmFkZSB0aGlzIHByb2plY3QnLCAnTGVhcm4gRmlyZWJhc2UnLCAnSGlnaCcsICcyMDIzLTAzLTI1JykpXG5TdG9yYWdlLmFkZFRhc2soJ0luYm94JyxuZXcgVGFzaygnQ2xlYXIgbXkgcm9vbScsICdDbG90aGVzK0R1c3QnLCAnTG93JywgJzIwMjMtMDMtMjAnKSlcblN0b3JhZ2UuYWRkVGFzaygnV29ya291dCcsbmV3IFRhc2soJzMwIG1pbiBDYXJkaW8nLCAnSW5kb29yIEJpa2UnLCAnSGlnaCcsICcyMDIzLTAzLTIwJykpXG5TdG9yYWdlLmFkZFRhc2soJ1dvcmtvdXQnLG5ldyBUYXNrKCdTdHJldGNoaW5nJywgJzE1IG1pbiBzdHJldGNoaW5nJywgJ0xvdycsICcyMDIzLTAzLTI1JykpXG5cbi8vdG9kb2FwcC1hYjE4YSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJUb2RvTGlzdCIsIlByb2plY3QiLCJUYXNrIiwiU3RvcmFnZSIsInNhdmVUb2RvTGlzdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUb2RvTGlzdCIsInRvZG9MaXN0IiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0UHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsInByb2plY3QiLCJmb3JFYWNoIiwic2V0VGFza3MiLCJnZXRUYXNrcyIsInRhc2siLCJhZGRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInByb2plY3ROYW1lIiwiYWRkVGFzayIsImdldFByb2plY3QiLCJkZWxldGVUYXNrIiwidGFza05hbWUiLCJVSSIsImxvYWRIb21lcGFnZSIsImxvYWRQcm9qZWN0cyIsIm9wZW5Qcm9qZWN0IiwidGl0bGUiLCJjcmVhdGVQcm9qZWN0IiwiaGFuZGxlTWFpblByb2pCdG5zIiwibG9hZFRhc2tzIiwiaGFuZGxlTWFpblRhc2tCdG5zIiwiY2xlYXJUYXNrcyIsImN1cnJlbnRQcm9qZWN0IiwiY3VycmVudFRhc2tzIiwiY3JlYXRlVGFzayIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkdWVEYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY29udGFpbnMiLCJjbGVhclByb2plY3RzIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiZGF0ZSIsInByb2plY3RUaXRsZURPTSIsInRhc2tUb0RlbGV0ZSIsInByb2plY3RzQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwidGFza0NvbnRhaW5lciIsImRlZmF1bHRQcm9qZWN0Iiwid29ya291dFByb2plY3QiLCJvcGVuUHJvak1vZGFsIiwiY2xvc2VQcm9qTW9kYWwiLCJhZGRQcm9qQnRuIiwiZGVsZXRlUHJvamVjdEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWxsUHJvamVjdHMiLCJvbmNsaWNrIiwib3BlblByb2plY3RNb2RhbCIsImNsb3NlUHJvamVjdE1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJvcGVuVGFza01vZGFsIiwiY2xvc2VUYXNrTW9kYWwiLCJhZGRUYXNrQnRuIiwiZGVsZXRlVGFza0J0bnMiLCJpbm5lclRleHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInByb2plY3RNb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsInRhc2tNb2RhbCIsImNvbnN0cnVjdG9yIiwicHJvamVjdHMiLCJwcm9qZWN0VGl0bGUiLCJmaW5kIiwiZ2V0VGl0bGUiLCJzb21lIiwibmV3UHJvamVjdCIsInByb2plY3RUb0RlbGV0ZSIsInNwbGljZSIsImluZGV4T2YiLCJ0YXNrcyIsInNldFRpdGxlIiwiZ2V0VGFzayIsInRhc2t0aXRsZSIsIm5ld1Rhc2siLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9