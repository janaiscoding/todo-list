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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLENBQUM7O0FBRTlEO0FBQ0FGLG1FQUFrQixDQUFDLElBQUlELDhEQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeENDLG1FQUFrQixDQUFDLElBQUlELDhEQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUNDLGdFQUFlLENBQUMsT0FBTyxFQUFDLElBQUlDLDJEQUFJLENBQUMsYUFBYSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNoR0QsZ0VBQWUsQ0FBQyxPQUFPLEVBQUMsSUFBSUMsMkRBQUksQ0FBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2RkQsZ0VBQWUsQ0FBQyxTQUFTLEVBQUMsSUFBSUMsMkRBQUksQ0FBQyxlQUFlLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3JHRCxnRUFBZSxDQUFDLFNBQVMsRUFBQyxJQUFJQywyREFBSSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2VcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCl7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpLy9Mb2FkIGFsbCBwcm9qZWN0cyBmcm9tIFN0b3JhZ2UuXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdJbmJveCcpLy9BbHdheXMgb3BlbiAnSW5ib3gnIChEZWZhdWx0KSBvbiBwYWdlLWxvYWQuXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0cygpe1xuICAgICAgICBTdG9yYWdlLmdldFRvZG9MaXN0KCkvL0ZldGNoIHRoZSBMaXN0IGZyb20gU3RvcmFnZS5cbiAgICAgICAgLmdldFByb2plY3RzKCkgLy9HZXQgYWxsIHRoZSBQcm9qZWN0cyBmcm9tIExpc3QuXG4gICAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7IC8vT24gRWFjaCBQcm9qZWN0LFxuICAgICAgICAgICAgaWYocHJvamVjdC50aXRsZSAhPT0gJ0luYm94JyAmJlxuICAgICAgICAgICAgcHJvamVjdC50aXRsZSAhPT0gJ1dvcmtvdXQnKXsgLy9FeGNlcHQgdGhlIERlZmF1bHQsXG4gICAgICAgICAgICAgICAgVUkuY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKSAvL0NyZWF0ZSBIVE1MIGNvbnRlbnQuXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgICAgICBVSS5oYW5kbGVNYWluUHJvakJ0bnMoKSAvL0luaXRpYWxpemUgdGhlIFByb2plY3QgQnV0dG9ucy5cbiAgICB9XG5cbiAgIHN0YXRpYyBsb2FkVGFza3MocHJvamVjdE5hbWUpeyAvL0xPQURTIFRBU0tTIEZST00gU1RPUkFHRVxuICAgICBVSS5oYW5kbGVNYWluVGFza0J0bnMoKVxuICAgICBVSS5jbGVhclRhc2tzKClcbiAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgIGxldCBjdXJyZW50VGFza3MgPSBjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpXG4gICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBVSS5jcmVhdGVUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sdGFzay5wcmlvcml0eSx0YXNrLmR1ZURhdGUpKVxuICAgIH1cbiAgICAvL0FERCBORVcgQ09OVEVOVCBUTyBTVE9SQUdFXG4gICBzdGF0aWMgYWRkUHJvamVjdCgpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICBpZihwcm9qZWN0TmFtZSA9PT0gJycgKXtcbiAgICAgICAgIHJldHVyblxuICAgIH0gXG4gICAgaWYoU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmNvbnRhaW5zKHByb2plY3ROYW1lKSl7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUpKVxuICAgIFVJLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIFVJLmNsZWFyUHJvamVjdHMoKTtcbiAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgIH0gICAgIFxuXG4gICBzdGF0aWMgYWRkVGFzaygpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTsgXG4gICAgaWYgKHRpdGxlID09PSAnJyB8fCBkYXRlID09PSAnJykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgU3RvcmFnZS5hZGRUYXNrKHByb2plY3ROYW1lLCBuZXcgVGFzayh0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkYXRlKSk7XG4gICAgVUkuY3JlYXRlVGFzayh0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkYXRlKVxuICAgfVxuXG4gICBzdGF0aWMgb3BlblByb2plY3QocHJvamVjdE5hbWUpeyAvLyBPUEVOIFRIRSBDTElDS0VEIFBST0pFQ1RcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGVET00udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBVSS5sb2FkVGFza3MocHJvamVjdE5hbWUpO1xufVxuXG5cbiAgIC8vREVMRVRFIENPTlRFTlQgRlJPTSBTVE9SQUdFXG5cbiAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgfVxuXG4gICBzdGF0aWMgZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCwgdGFza1RvRGVsZXRlKXsgXG4gICAgU3RvcmFnZS5kZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LHRhc2tUb0RlbGV0ZSk7XG4gICB9XG4gICAvL0NMRUFSIEhUTUwgQ09OVEVOVCBcblxuICAgc3RhdGljIGNsZWFyUHJvamVjdHMoKXtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1saXN0cycpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTD1cIlwiO1xuICAgfVxuXG4gICBzdGF0aWMgY2xlYXJUYXNrcygpe1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKVxuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgIC8vIEJVVFRPTlMgUFJPSkVDVCtUQVNLXG4gICBzdGF0aWMgaGFuZGxlTWFpblByb2pCdG5zKCl7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtcHJvamVjdCcpOyAvL1NlbGVjdCBEZWZhdWx0IFByb2plY3QoYWxyZWFkeSBpbiBIVE1MKS5cbiAgICBjb25zdCB3b3Jrb3V0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3Jrb3V0LXByb2plY3QnKTtcbiAgICBjb25zdCBvcGVuUHJvak1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcHJvamVjdC1tb2RhbCcpOyAvL1NlbGVjdCBPcGVuIE1vZGFsIEJ1dHRvblxuICAgIGNvbnN0IGNsb3NlUHJvak1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXByb2plY3QtbW9kYWwnKTsgLy9TZWxlY3QgQ2xvc2UgTW9kYWwgQnV0dG9uXG4gICAgY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpOyAvL1NlbGVjdCBBZGQgUHJvamVjdCBCdXR0b25cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtcHJvamVjdCcpOyAvL1NlbGVjdCBEZWxldGUgUHJvamVjdCBCdXR0b25cbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLW5hbWUnKTsgLy9TZWxlY3QgUHJvamVjdCAtIG9uLWNsaWNrIEV2ZW50IFxuXG4gICAgb3BlblByb2pNb2RhbC5vbmNsaWNrID0gVUkub3BlblByb2plY3RNb2RhbDtcbiAgICBjbG9zZVByb2pNb2RhbC5vbmNsaWNrID0gVUkuY2xvc2VQcm9qZWN0TW9kYWw7XG5cbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9Bdm9pZCBGb3JtJ3MgZGVmYXVsdCBiZWhhdmlvdXIuXG4gICAgICAgIFVJLmFkZFByb2plY3QoKTsgLy9DYWxscyBGdW5jdGlvbiAtPiBBZGQgUHJvamVjdC5cbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0TW9kYWwoKTsgLy9DbG9zZXMgRm9ybS5cbiAgICB9KVxuXG4gICAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiAvL1NlbGVjdCBBbGwgQnV0dG9ucy5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9GaW5kIGNsaWNrZWQgQnV0dG9uLlxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7IC8vRmluZCBTZWxlY3RlZCBQcm9qZWN0XG4gICAgICAgIFVJLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpOyAvL0RlbGV0ZSBQcm9qZWN0LlxuICAgICAgICBVSS5jbGVhclByb2plY3RzKCk7IC8vQ2xlYXIgU2lkZWJhci5cbiAgICAgICAgVUkubG9hZFByb2plY3RzKCk7IC8vUmVsb2FkIGV4aXN0aW5nIFByb2plY3RzIGZyb20gU3RvcmFnZS5cbiAgICB9KSlcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IFxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAvL0ZpbmQgY2xpY2tlZCBQcm9qZWN0LlxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7IC8vU2VsZWN0IFByb2plY3QuXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKTsgLy9PcGVuIFByb2plY3QncyBUYXNrcy5cbiAgICB9KSlcbiAgICAvL0RlZmF1bHQgcHJvamVjdCBmdW5jdGlvbiAoV2l0aG91dCB0aGlzLCBpdCBzZWVtcyB0aGF0IG15IGZ1bmN0aW9ucyBhcmUgcmVwZWF0aW5nIHR3aWNlKVxuICAgIGRlZmF1bHRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgVUkub3BlblByb2plY3QoJ0luYm94JylcbiAgICB9KVxuICAgIHdvcmtvdXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdXb3Jrb3V0JylcbiAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVNYWluVGFza0J0bnMoKXtcbiAgICAgICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJykvL29wZW4gYWRkIHRhc2sgbW9kYWwgXG4gICAgICAgIGNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsJykvL2Nsb3NlIGFkZCB0YXNrIG1vZGFsIFxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJykvL2FkZCBhIG5ldyB0YXNrXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10YXNrJykvL2RlbGV0ZSBhbiBleGlzdGluZyB0YXNrXG5cbiAgICAgICAgb3BlblRhc2tNb2RhbC5vbmNsaWNrID0gVUkub3BlblRhc2tNb2RhbDtcbiAgICAgICAgY2xvc2VUYXNrTW9kYWwub25jbGljayA9IFVJLmNsb3NlVGFza01vZGFsO1xuIFxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgVUkuYWRkVGFzaygpXG4gICAgICAgICAgICBVSS5jbG9zZVRhc2tNb2RhbCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZGVsZXRlVGFza0J0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrVG9EZWxldGUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrVG9EZWxldGUpXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICAgICAgVUkuZGVsZXRlVGFzayhjdXJyZW50UHJvamVjdCwgdGFza1RvRGVsZXRlKVxuICAgICAgICAgICAgICAgIFVJLmNsZWFyVGFza3MoKVxuICAgICAgICAgICAgICAgIFVJLmxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgIH1cbiAgICAvLyBDUkVBVEUgSFRNTCBDT05URU5UIC0gUFJPSkVDVCArIFRBU0tcbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdCh0aXRsZSl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxpc3RzJyk7IC8vU2VsZWN0IFNpZGViYXJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwicHJvalwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJwcm9qLW5hbWUgcHJvai10aXRsZVwiPiR7dGl0bGV9PC9saT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNpcmNsZS14bWFyayBkZWxldGUtcHJvamVjdFwiPjwvaT5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfSBcblxuICAgc3RhdGljIGNyZWF0ZVRhc2sobmFtZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlci1vbmVcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke25hbWV9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyLXR3b1wiPlxuICAgICAgICA8cCBjbGFzcz1cInByaW9yaXR5LSR7cHJpb3JpdHl9XCI+JHtwcmlvcml0eX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZHVlLWRhdGVcIj4ke2R1ZURhdGV9PC9wPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY2lyY2xlLXhtYXJrIGRlbGV0ZS10YXNrXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBVSS5oYW5kbGVNYWluVGFza0J0bnMoKVxuICAgfVxuXG4gICAgLy9NT0RBTCBPUEVOL0NMT1NFIC0gUFJPSkVDVCArIFRBU0tcbiAgICBzdGF0aWMgb3BlblByb2plY3RNb2RhbCgpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgICAgICBjb25zdCBvcGVuUHJvak1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcHJvamVjdC1tb2RhbCcpO1xuICAgICAgICBwcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgb3BlblByb2pNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICBzdGF0aWMgY2xvc2VQcm9qZWN0TW9kYWwoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlID0gXCJcIlxuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTtcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgICAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbiAgIH1cblxuICAgc3RhdGljIG9wZW5UYXNrTW9kYWwoKXtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBvcGVuVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwnKVxuICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgb3BlblRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgfVxuXG4gICBzdGF0aWMgY2xvc2VUYXNrTW9kYWwoKXtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBvcGVuVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwnKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgICAgICBvcGVuVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbiAgIH1cbn1cblxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL2NyZWF0ZUxpc3RcIlxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIHNhdmVUb2RvTGlzdChkYXRhKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBnZXRUb2RvTGlzdCgpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgbmV3IFRvZG9MaXN0KCksXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpXG4gICAgICApXG4gIFxuICAgICAgdG9kb0xpc3Quc2V0UHJvamVjdHMoXG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgKVxuICBcbiAgICAgIHRvZG9MaXN0XG4gICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3Quc2V0VGFza3MoXG4gICAgICAgICAgcHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgcmV0dXJuIHRvZG9MaXN0XG4gICAgfVxuICBcbiAgICBzdGF0aWMgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpXG4gICAgfVxuICBcbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBhZGRUYXNrKHByb2plY3ROYW1lLCB0YXNrKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuYWRkVGFzayh0YXNrKVxuICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpXG4gICAgfVxuICBcbiAgICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5kZWxldGVUYXNrKHRhc2tOYW1lKVxuICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpXG4gICAgfVxufSAgIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdJbmJveCcpKVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnV29ya291dCcpKVxuICB9XG5cbiAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNcbiAgfVxuXG4gIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKVxuICB9XG5cbiAgY29udGFpbnMocHJvamVjdFRpdGxlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VGl0bGUpXG4gIH1cblxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBuZXdQcm9qZWN0LnRpdGxlKSlcbiAgICAgIHJldHVyblxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICB9XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VGl0bGVcbiAgICApXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICB0aGlzLnRhc2tzID0gW11cbiAgICB9XG4gIFxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gIFxuICAgIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG4gIFxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGFza3NcbiAgICB9XG4gIFxuICAgIGdldFRhc2tzKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3NcbiAgICB9XG4gIFxuICAgIGdldFRhc2sodGFza3RpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2t0aXRsZSlcbiAgICB9XG4gIFxuICAgIGNvbnRhaW5zKHRhc2t0aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrdGl0bGUpXG4gICAgfVxuICBcbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgIGlmICh0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gbmV3VGFzay50aXRsZSkpIHJldHVyblxuICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICBcbiAgICBkZWxldGVUYXNrKHRhc2t0aXRsZSkge1xuICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0YXNrdGl0bGUpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgeyBcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG5cbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuICAgIFxuICAgIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS13aGl0ZTogI0VFRUVFRTsgLyogY29udGVudCBiYWNrZ3JvdW5kLGhlYWRlciB0ZXh0LHNpZGViYXIgdGV4dCovXFxuICAgIC0tcHJpbWFyeS1wdXJwbGU6ICMxODEyMkI7IC8qIGhlYWRlciBiYWNrZ3JvdW5kICovXFxuICAgIC0tcHVycGxlLWJhY2tncm91bmQ6ICMzOTMwNTM7XFxuICAgIC0tcHJpbWFyeS1ncmVlbjogIzUxODk0RDsgLyogYWRkIGJ1dHRvbnMgKi9cXG4gICAgLS1wcmltYXJ5LXJlZDogI0VCNDU1RjsgLyogcmVtb3ZlL2NhbmNlbCBidXR0b25zICovXFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWJhY2tncm91bmQpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uY29udGFjdC1saW5rLFxcbi5mb290ZXItbGlua3tcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcbi5mb290ZXItbGlua3tcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGFjdC1saW5rOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxufVxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn1cXG5cXG4vKiBTSURFQkFSICYgUFJPSkVDVFMgKi9cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcbi5wcmVkZWZpbmVkLWxpc3Rze1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4ucHJvaiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5saXN0cy10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgXFxufVxcblxcbi5wcm9qOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2otdGl0bGU6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ub3Blbi1wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9wZW4tcHJvamVjdC1tb2RhbDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogU1BBQ0UgRk9SIFRPIERPJ1MgKi9cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcblxcbi50aXRsZXtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG59XFxuXFxuLyogQ0FSRCBTVFlMSU5HKi9cXG4uY2FyZCB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweCA1JSAxMHB4IDUlO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXG4gICAgcGFkZGluZzogMTBweCA1JSAxMHB4IDUlO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4udGFzay1uYW1le1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcbi5kZXNjcmlwdGlvbntcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1wdXJwbGUpOyAgICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTQ1NDUyNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmNhcmQtd3JhcHBlci1vbmUge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5jYXJkLXdyYXBwZXItdHdve1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG4ucHJpb3JpdHktSGlnaHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1yZWQpO1xcbn1cXG4ucHJpb3JpdHktTG93e1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuaSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbmk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTU9EQUwgJiBNT0RBTCBDT05URU5UICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJiMmIyZDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxufVxcbi5wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ub3Blbi1tb2RhbHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG4ub3Blbi1tb2RhbDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5pbnB1dC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4uYWRkLXByb2plY3R7XFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcbn1cXG4uYWRkLXRhc2ssXFxuLmNsb3NlLW1vZGFsLFxcbi5hZGQtcHJvamVjdCxcXG4uY2xvc2UtcHJvamVjdC1tb2RhbHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWQ5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgyMTMsIDIxNywgMjE3LCAuNSkgMCAycHggNXB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMwZjExMTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMjlweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlcixcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbn1cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLXByb2plY3QtbW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgfVxcblxcbi8qZm9vdGVyICovXFxuLmZvb3RlcnsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBnbG9iYWwgc2V0dGluZ3MgKi9cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6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Q0E7SUFDSSxlQUFlO0FBQ25COztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTs7OztFQUlFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLDJCQUEyQjtBQUM3QjtBQUNBOztJQUVJLG9DQUFvQztJQUNwQywwQkFBMEI7RUFDNUI7O0FBRUYsVUFBVTtBQUNWO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLG9CQUFvQjtBQUNwQjs7SUFFSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS13aGl0ZTogI0VFRUVFRTsgLyogY29udGVudCBiYWNrZ3JvdW5kLGhlYWRlciB0ZXh0LHNpZGViYXIgdGV4dCovXFxuICAgIC0tcHJpbWFyeS1wdXJwbGU6ICMxODEyMkI7IC8qIGhlYWRlciBiYWNrZ3JvdW5kICovXFxuICAgIC0tcHVycGxlLWJhY2tncm91bmQ6ICMzOTMwNTM7XFxuICAgIC0tcHJpbWFyeS1ncmVlbjogIzUxODk0RDsgLyogYWRkIGJ1dHRvbnMgKi9cXG4gICAgLS1wcmltYXJ5LXJlZDogI0VCNDU1RjsgLyogcmVtb3ZlL2NhbmNlbCBidXR0b25zICovXFxufVxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWJhY2tncm91bmQpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjQlKSAwcHggM3B4IDhweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXdoaXRlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uY29udGFjdC1saW5rLFxcbi5mb290ZXItbGlua3tcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxufVxcbi5mb290ZXItbGlua3tcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uY29udGFjdC1saW5rOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxufVxcbi8qIE1BSU4gQ09OVEVOVCAqL1xcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn1cXG5cXG4vKiBTSURFQkFSICYgUFJPSkVDVFMgKi9cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNCUpIDBweCAzcHggOHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxufVxcbi5wcmVkZWZpbmVkLWxpc3Rze1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcbn1cXG5cXG4ucHJvaiB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5saXN0cy10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wdXJwbGUpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7ICAgXFxufVxcblxcbi5wcm9qOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2otdGl0bGU6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4ub3Blbi1wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9wZW4tcHJvamVjdC1tb2RhbDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogU1BBQ0UgRk9SIFRPIERPJ1MgKi9cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcblxcbi50aXRsZXtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktcHVycGxlKTtcXG59XFxuLnRhc2stdGl0bGUge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG59XFxuXFxuLyogQ0FSRCBTVFlMSU5HKi9cXG4uY2FyZCB7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweCA1JSAxMHB4IDUlO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXG4gICAgcGFkZGluZzogMTBweCA1JSAxMHB4IDUlO1xcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcbn1cXG5cXG4udGFzay1uYW1le1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LXB1cnBsZSk7XFxufVxcbi5kZXNjcmlwdGlvbntcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1wdXJwbGUpOyAgICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uY2FyZC13cmFwcGVyLXR3b3tcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuLmNhcmQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTQ1NDUyNTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLmNhcmQtd3JhcHBlci1vbmUge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5jYXJkLXdyYXBwZXItdHdve1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG4ucHJpb3JpdHktSGlnaHtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1yZWQpO1xcbn1cXG4ucHJpb3JpdHktTG93e1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXG59XFxuaSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbmk6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTU9EQUwgJiBNT0RBTCBDT05URU5UICovXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTJiMmIyZDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggNSU7XFxufVxcbi5wcm9qZWN0LW1vZGFse1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbn1cXG4ub3Blbi1tb2RhbHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHVycGxlKTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDUlO1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG4ub3Blbi1tb2RhbDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4OTRkOTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5pbnB1dC1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4uYWRkLXByb2plY3R7XFxuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xcbn1cXG4uYWRkLXRhc2ssXFxuLmNsb3NlLW1vZGFsLFxcbi5hZGQtcHJvamVjdCxcXG4uY2xvc2UtcHJvamVjdC1tb2RhbHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVkOWQ5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgyMTMsIDIxNywgMjE3LCAuNSkgMCAycHggNXB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICMwZjExMTE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMjlweDtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlcixcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxODk0ZDkwO1xcbn1cXG4uY2xvc2UtbW9kYWw6aG92ZXIsXFxuLmNsb3NlLXByb2plY3QtbW9kYWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXJlZCk7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktd2hpdGUpO1xcbiAgfVxcblxcbi8qZm9vdGVyICovXFxuLmZvb3RlcnsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS13aGl0ZSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBnbG9iYWwgc2V0dGluZ3MgKi9cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvRE9NXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL1N0b3JhZ2VcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvY3JlYXRlUHJvamVjdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9GdWxsIGFwcCBmdW5jdGlvbmFiaWxpdHkgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKVxuXG4vL0RlZmF1bHQgQ29udGVudFxuU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdJbmJveCcpKVxuU3RvcmFnZS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCdXb3Jrb3V0JykpXG5TdG9yYWdlLmFkZFRhc2soJ0luYm94JyxuZXcgVGFzaygnV2VhdGhlciBBcHAnLCAnTGVhcm4gd29ya2luZyB3aXRoIEFQSScsICdIaWdoJywgJzIwMjMtMDMtMjUnKSlcblN0b3JhZ2UuYWRkVGFzaygnSW5ib3gnLG5ldyBUYXNrKCdDbGVhciBteSByb29tJywgJ0Nsb3RoZXMrRHVzdCcsICdMb3cnLCAnMjAyMy0wMy0yMCcpKVxuU3RvcmFnZS5hZGRUYXNrKCdXb3Jrb3V0JyxuZXcgVGFzaygnMzAgbWluIENhcmRpbycsICdSdW5uaW5nICsgSnVtcGluZyBKYWNrcycsICdIaWdoJywgJzIwMjMtMDMtMjAnKSlcblN0b3JhZ2UuYWRkVGFzaygnV29ya291dCcsbmV3IFRhc2soJ1N0cmV0Y2hpbmcnLCAnMTUgbWluIHN0cmV0Y2hpbmcnLCAnTG93JywgJzIwMjMtMDMtMjUnKSlcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJQcm9qZWN0IiwiU3RvcmFnZSIsIlRhc2siLCJVSSIsImxvYWRIb21lcGFnZSIsImxvYWRQcm9qZWN0cyIsIm9wZW5Qcm9qZWN0IiwiZ2V0VG9kb0xpc3QiLCJnZXRQcm9qZWN0cyIsImZvckVhY2giLCJwcm9qZWN0IiwidGl0bGUiLCJjcmVhdGVQcm9qZWN0IiwiaGFuZGxlTWFpblByb2pCdG5zIiwibG9hZFRhc2tzIiwicHJvamVjdE5hbWUiLCJoYW5kbGVNYWluVGFza0J0bnMiLCJjbGVhclRhc2tzIiwiY3VycmVudFByb2plY3QiLCJnZXRQcm9qZWN0IiwiY3VycmVudFRhc2tzIiwiZ2V0VGFza3MiLCJ0YXNrIiwiY3JlYXRlVGFzayIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkdWVEYXRlIiwiYWRkUHJvamVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNvbnRhaW5zIiwiY2xlYXJQcm9qZWN0cyIsImFkZFRhc2siLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJkYXRlIiwicHJvamVjdFRpdGxlRE9NIiwiZGVsZXRlUHJvamVjdCIsImRlbGV0ZVRhc2siLCJ0YXNrVG9EZWxldGUiLCJwcm9qZWN0c0NvbnRhaW5lciIsImlubmVySFRNTCIsInRhc2tDb250YWluZXIiLCJkZWZhdWx0UHJvamVjdCIsIndvcmtvdXRQcm9qZWN0Iiwib3BlblByb2pNb2RhbCIsImNsb3NlUHJvak1vZGFsIiwiYWRkUHJvakJ0biIsImRlbGV0ZVByb2plY3RCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFsbFByb2plY3RzIiwib25jbGljayIsIm9wZW5Qcm9qZWN0TW9kYWwiLCJjbG9zZVByb2plY3RNb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwib3BlblRhc2tNb2RhbCIsImNsb3NlVGFza01vZGFsIiwiYWRkVGFza0J0biIsImRlbGV0ZVRhc2tCdG5zIiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJwcm9qZWN0TW9kYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJ0YXNrTW9kYWwiLCJUb2RvTGlzdCIsInNhdmVUb2RvTGlzdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2RvTGlzdCIsIk9iamVjdCIsImFzc2lnbiIsInBhcnNlIiwiZ2V0SXRlbSIsInNldFByb2plY3RzIiwic2V0VGFza3MiLCJ0YXNrTmFtZSIsImNvbnN0cnVjdG9yIiwicHJvamVjdHMiLCJwcm9qZWN0VGl0bGUiLCJmaW5kIiwiZ2V0VGl0bGUiLCJzb21lIiwibmV3UHJvamVjdCIsInByb2plY3RUb0RlbGV0ZSIsInNwbGljZSIsImluZGV4T2YiLCJ0YXNrcyIsInNldFRpdGxlIiwiZ2V0VGFzayIsInRhc2t0aXRsZSIsIm5ld1Rhc2siLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9