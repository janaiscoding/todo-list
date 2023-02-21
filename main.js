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





class UI{
    static loadHomepage(){
        UI.loadProjects()
        UI.handleMainProjBtns()
        UI.openProject('Inbox')
    }
    // LOAD EVERY PROJECT IN THE SIDEBAR
    static loadProjects(){
        _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList()
        .getProjects()
        .forEach((project) => {
            if(project.title !== 'Inbox'){
                UI.createProject(project.title)
            } 
        })
        UI.handleMainProjBtns();
    }
   //LOAD TASKS FROM CURRENT PROJECT
   static loadTasks(projectName){
     UI.handleMainTaskBtns()
     UI.clearTasks()
     let currentProject = _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList().getProject(projectName)
     let currentTasks = currentProject.getTasks()
     currentTasks.forEach((task) => UI.createTask(task.title, task.description,task.priority,task.dueDate))
    }

    static clearTasks(){
        const taskContainer = document.querySelector('.task-container')
        taskContainer.innerHTML = ''
    }

    // HTML DOM SIDEBAR PROJECTS
    static createProject(title){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML += `
    <div class="proj">
    <li class="proj-name">${title}</li>
    <i class="fa-regular fa-circle-xmark delete-project"></i>
    </div>
    `;
    }
    //ADD A PROJECT TO THE STORAGE
   static addProject(){
    const projectName = document.getElementById('project').value;
    if(projectName === '' ){
         return
    } 
    if(_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList().contains(projectName)){
        return
    }
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"](projectName))
    UI.createProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
   }     

   //DELETE PROJECT FROM STORAGE
   static deleteProject(projectName){
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(projectName);
   }
   // REFRESH AND CLEAR SIDEBAR
   static clearProjects(){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML="";
   }

   // SWAP THE FOCUSED PROJECT
   static openProject(projectName){
    const projectTitleDOM = document.querySelector('.title');
    projectTitleDOM.innerHTML = projectName;
    UI.loadTasks(projectName);
}
    // OPEN/CLOSE/ADD/DELETE/HANDLE PROJECT
   static handleMainProjBtns(){
    const openProjModal = document.querySelector('.open-project-modal');
    const closeProjModal = document.querySelector('.close-project-modal');
    const addProjBtn = document.querySelector('.add-project');
    const deleteProjectBtns = document.querySelectorAll('.delete-project');
    const allProjects = document.querySelectorAll('.proj-name');

    openProjModal.onclick = UI.openProjectModal;
    closeProjModal.onclick = UI.closeProjectModal;

    addProjBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        UI.addProject();
        UI.closeProjectModal();
    })

    deleteProjectBtns.forEach((button) => 
        button.addEventListener('click', (e) => {
        let projectName = e.currentTarget.parentElement.firstElementChild.innerHTML;
        UI.deleteProject(projectName);
        UI.clearProjects();
        UI.loadProjects();
    }))

    allProjects.forEach((project) => 
    project.addEventListener('click', (e) => {
        let projectName = e.currentTarget.innerHTML;
        UI.openProject(projectName);
    }) )
    }

    // HANDLE OPEN MODAL - PROJECT
   static openProjectModal(){
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display = "block";
        openProjModal.style.display = "none";
   }
   // HANDLE CLOSE MODAL - PROJECT
   static closeProjectModal(){
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
    document.getElementById('project').value = "";
        projectModal.style.display ="none";
        openProjModal.style.display ="block";
   }

   //CREATE HTML DOM TASK CONTENT 
   static createTask(name,description,priority,dueDate){
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML += `
    <div class="card">
    <div class="card-wrapper-one">
        <p class="task-name">${name}</p>
    </div>
    <p class="description">${description}</p>
    <div class="card-wrapper-two">
        <p class="priority-high">${priority}</p>
        <p class="due-date">${dueDate}</p>
        <i class="fa-regular fa-circle-xmark delete-task"></i>
    </div>
    </div>
    `
    UI.handleMainTaskBtns()
   }

   //HANDLE MAIN TASKS BUTTONS 
   static handleMainTaskBtns(){
    //open add task modal 
    const openTaskModal = document.querySelector('.open-modal')
    openTaskModal.onclick = UI.openTaskModal;
    //close add task modal 
    const closeTaskModal = document.querySelector('.close-modal')
    closeTaskModal.onclick = UI.closeTaskModal;
    //add a new task 
    const addTaskBtn = document.querySelector('.add-task')
    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault()
        UI.addTask()
        UI.closeTaskModal()
    })

    //delete an existing task
    const deleteTaskBtns = document.querySelectorAll('.delete-task')
    deleteTaskBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            let taskToDelete = e.currentTarget.parentElement.parentElement.firstElementChild.innerText;
            let currentProject = document.querySelector('.title')
            UI.deleteTask(currentProject, taskToDelete)
        }) //AM RAMAS AICI!!!!!!!!!
    })
   }
   static openTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    taskModal.style.display = "block"
    openTaskModal.style.display = 'none';
   }
   // HANDLE CLOSE MODAL - TASK
   static closeTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    document.getElementById('title').value = "";
    document.getElementById('description').value = ""
        taskModal.style.display ="none";
        openTaskModal.style.display ="block";
   }

   static addTask(){
    const projectName = document.querySelector('.title').textContent;

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value; 
    if (title === '') {
        return
    }
    _Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(projectName, new _createTask__WEBPACK_IMPORTED_MODULE_2__["default"](title,description,priority,date));
    UI.createTask(title,description,priority,date)
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
      localStorage.setItem('todoList', JSON.stringify(data))
    }
  
    static getTodoList() {
      const todoList = Object.assign(
        new _createList__WEBPACK_IMPORTED_MODULE_0__["default"](),
        JSON.parse(localStorage.getItem('todoList'))
      )
  
      todoList.setProjects(
        todoList
          .getProjects()
          .map((project) => Object.assign(new _createProject__WEBPACK_IMPORTED_MODULE_1__["default"](), project))
      )
  
      todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new _createTask__WEBPACK_IMPORTED_MODULE_2__["default"](), task))
        )
      )
      return todoList
    }
  
    static addProject(project) {
      const todoList = Storage.getTodoList()
      todoList.addProject(project)
      Storage.saveTodoList(todoList)
    }
  
    static deleteProject(projectName) {
      const todoList = Storage.getTodoList()
      todoList.deleteProject(projectName)
      Storage.saveTodoList(todoList)
    }
  
    static addTask(projectName, task) {
      const todoList = Storage.getTodoList()
      todoList.getProject(projectName).addTask(task)
      Storage.saveTodoList(todoList)
    }
  
    static deleteTask(projectName, taskName) {
      const todoList = Storage.getTodoList()
      todoList.getProject(projectName).deleteTask(taskName)
      Storage.saveTodoList(todoList)
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
    this.projects = []
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'))
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Workout'))
  }

  setProjects(projects) {
    this.projects = projects
  }

  getProjects() {
    return this.projects
  }

  getProject(projectTitle) {
    return this.projects.find((project) => project.getTitle() === projectTitle)
  }

  contains(projectTitle) {
    return this.projects.some((project) => project.getTitle() === projectTitle)
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.title === newProject.title))
      return
    this.projects.push(newProject)
  }

  deleteProject(projectTitle) {
    const projectToDelete = this.projects.find(
      (project) => project.getTitle() === projectTitle
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
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
      this.title = title
      this.tasks = []
    }
  
    setTitle(title) {
      this.title = title
    }
  
    getTitle() {
      return this.title
    }
  
    setTasks(tasks) {
      this.tasks = tasks
    }
  
    getTasks() {
      return this.tasks
    }
  
    getTask(tasktitle) {
      return this.tasks.find((task) => task.getTitle() === tasktitle)
    }
  
    contains(tasktitle) {
      return this.tasks.some((task) => task.getTitle() === tasktitle)
    }
  
    addTask(newTask) {
      if (this.tasks.find((task) => task.getTitle() === newTask.title)) return
      this.tasks.push(newTask)
    }
  
    deleteTask(tasktitle) {
      this.tasks = this.tasks.filter((task) => task.title !== tasktitle)
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
    constructor(title,description,priority,dueDate) {
        this.title = title
        this.description = description
        this.priority = priority
        this.dueDate = dueDate
    }

    setTitle(title) {
      this.title = title
    }
    
    getTitle() {
      return this.title
    }
}

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
/******/ 			// no module.id needed
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

document.addEventListener('DOMContentLoaded', _modules_DOM__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomepage)
;

_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('Inbox'))
console.log(_modules_Storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList())

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUMvQiw4Q0FBOEMsaUVBQWU7QUFDN0QsQ0FBd0M7QUFDTTtBQUM5QyxtRUFBa0IsS0FBSyw4REFBTztBQUM5QixZQUFZLG9FQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XG4gICAgc3RhdGljIGxvYWRIb21lcGFnZSgpe1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKVxuICAgICAgICBVSS5oYW5kbGVNYWluUHJvakJ0bnMoKVxuICAgICAgICBVSS5vcGVuUHJvamVjdCgnSW5ib3gnKVxuICAgIH1cbiAgICAvLyBMT0FEIEVWRVJZIFBST0pFQ1QgSU4gVEhFIFNJREVCQVJcbiAgICBzdGF0aWMgbG9hZFByb2plY3RzKCl7XG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdC50aXRsZSAhPT0gJ0luYm94Jyl7XG4gICAgICAgICAgICAgICAgVUkuY3JlYXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICAgICAgVUkuaGFuZGxlTWFpblByb2pCdG5zKCk7XG4gICAgfVxuICAgLy9MT0FEIFRBU0tTIEZST00gQ1VSUkVOVCBQUk9KRUNUXG4gICBzdGF0aWMgbG9hZFRhc2tzKHByb2plY3ROYW1lKXtcbiAgICAgVUkuaGFuZGxlTWFpblRhc2tCdG5zKClcbiAgICAgVUkuY2xlYXJUYXNrcygpXG4gICAgIGxldCBjdXJyZW50UHJvamVjdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICBsZXQgY3VycmVudFRhc2tzID0gY3VycmVudFByb2plY3QuZ2V0VGFza3MoKVxuICAgICBjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4gVUkuY3JlYXRlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLHRhc2sucHJpb3JpdHksdGFzay5kdWVEYXRlKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJUYXNrcygpe1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJylcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIH1cblxuICAgIC8vIEhUTUwgRE9NIFNJREVCQVIgUFJPSkVDVFNcbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdCh0aXRsZSl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qXCI+XG4gICAgPGxpIGNsYXNzPVwicHJvai1uYW1lXCI+JHt0aXRsZX08L2xpPlxuICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGVsZXRlLXByb2plY3RcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICB9XG4gICAgLy9BREQgQSBQUk9KRUNUIFRPIFRIRSBTVE9SQUdFXG4gICBzdGF0aWMgYWRkUHJvamVjdCgpe1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICBpZihwcm9qZWN0TmFtZSA9PT0gJycgKXtcbiAgICAgICAgIHJldHVyblxuICAgIH0gXG4gICAgaWYoU3RvcmFnZS5nZXRUb2RvTGlzdCgpLmNvbnRhaW5zKHByb2plY3ROYW1lKSl7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUpKVxuICAgIFVJLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIFVJLmNsZWFyUHJvamVjdHMoKTtcbiAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgIH0gICAgIFxuXG4gICAvL0RFTEVURSBQUk9KRUNUIEZST00gU1RPUkFHRVxuICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpe1xuICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICB9XG4gICAvLyBSRUZSRVNIIEFORCBDTEVBUiBTSURFQkFSXG4gICBzdGF0aWMgY2xlYXJQcm9qZWN0cygpe1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxpc3RzJyk7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MPVwiXCI7XG4gICB9XG5cbiAgIC8vIFNXQVAgVEhFIEZPQ1VTRUQgUFJPSkVDVFxuICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3ROYW1lKXtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGVET00uaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG4gICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbn1cbiAgICAvLyBPUEVOL0NMT1NFL0FERC9ERUxFVEUvSEFORExFIFBST0pFQ1RcbiAgIHN0YXRpYyBoYW5kbGVNYWluUHJvakJ0bnMoKXtcbiAgICBjb25zdCBvcGVuUHJvak1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IGNsb3NlUHJvak1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXByb2plY3QtbW9kYWwnKTtcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QnKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qLW5hbWUnKTtcblxuICAgIG9wZW5Qcm9qTW9kYWwub25jbGljayA9IFVJLm9wZW5Qcm9qZWN0TW9kYWw7XG4gICAgY2xvc2VQcm9qTW9kYWwub25jbGljayA9IFVJLmNsb3NlUHJvamVjdE1vZGFsO1xuXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFVJLmFkZFByb2plY3QoKTtcbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0TW9kYWwoKTtcbiAgICB9KVxuXG4gICAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICBVSS5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgVUkuY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgICB9KSlcblxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IFxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MO1xuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgfSkgKVxuICAgIH1cblxuICAgIC8vIEhBTkRMRSBPUEVOIE1PREFMIC0gUFJPSkVDVFxuICAgc3RhdGljIG9wZW5Qcm9qZWN0TW9kYWwoKXtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG4gICAgICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgIH1cbiAgIC8vIEhBTkRMRSBDTE9TRSBNT0RBTCAtIFBST0pFQ1RcbiAgIHN0YXRpYyBjbG9zZVByb2plY3RNb2RhbCgpe1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJyk7XG4gICAgY29uc3Qgb3BlblByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXByb2plY3QtbW9kYWwnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgcHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgICAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbiAgIH1cblxuICAgLy9DUkVBVEUgSFRNTCBET00gVEFTSyBDT05URU5UIFxuICAgc3RhdGljIGNyZWF0ZVRhc2sobmFtZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkdWVEYXRlKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlci1vbmVcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke25hbWV9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyLXR3b1wiPlxuICAgICAgICA8cCBjbGFzcz1cInByaW9yaXR5LWhpZ2hcIj4ke3ByaW9yaXR5fTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJkdWUtZGF0ZVwiPiR7ZHVlRGF0ZX08L3A+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jaXJjbGUteG1hcmsgZGVsZXRlLXRhc2tcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIFVJLmhhbmRsZU1haW5UYXNrQnRucygpXG4gICB9XG5cbiAgIC8vSEFORExFIE1BSU4gVEFTS1MgQlVUVE9OUyBcbiAgIHN0YXRpYyBoYW5kbGVNYWluVGFza0J0bnMoKXtcbiAgICAvL29wZW4gYWRkIHRhc2sgbW9kYWwgXG4gICAgY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJylcbiAgICBvcGVuVGFza01vZGFsLm9uY2xpY2sgPSBVSS5vcGVuVGFza01vZGFsO1xuICAgIC8vY2xvc2UgYWRkIHRhc2sgbW9kYWwgXG4gICAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKVxuICAgIGNsb3NlVGFza01vZGFsLm9uY2xpY2sgPSBVSS5jbG9zZVRhc2tNb2RhbDtcbiAgICAvL2FkZCBhIG5ldyB0YXNrIFxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgVUkuYWRkVGFzaygpXG4gICAgICAgIFVJLmNsb3NlVGFza01vZGFsKClcbiAgICB9KVxuXG4gICAgLy9kZWxldGUgYW4gZXhpc3RpbmcgdGFza1xuICAgIGNvbnN0IGRlbGV0ZVRhc2tCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10YXNrJylcbiAgICBkZWxldGVUYXNrQnRucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrVG9EZWxldGUgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpXG4gICAgICAgICAgICBVSS5kZWxldGVUYXNrKGN1cnJlbnRQcm9qZWN0LCB0YXNrVG9EZWxldGUpXG4gICAgICAgIH0pIC8vQU0gUkFNQVMgQUlDSSEhISEhISEhIVxuICAgIH0pXG4gICB9XG4gICBzdGF0aWMgb3BlblRhc2tNb2RhbCgpe1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5UYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1tb2RhbCcpXG4gICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBvcGVuVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICB9XG4gICAvLyBIQU5ETEUgQ0xPU0UgTU9EQUwgLSBUQVNLXG4gICBzdGF0aWMgY2xvc2VUYXNrTW9kYWwoKXtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjb25zdCBvcGVuVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwnKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9IFwiXCJcbiAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgICAgICBvcGVuVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbiAgIH1cblxuICAgc3RhdGljIGFkZFRhc2soKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7IFxuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3IFRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSkpO1xuICAgIFVJLmNyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSlcbiAgIH1cbn1cbiAgICBcbiAgICAiLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vY3JlYXRlTGlzdFwiXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL2NyZWF0ZVRhc2tcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBzdGF0aWMgc2F2ZVRvZG9MaXN0KGRhdGEpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGdldFRvZG9MaXN0KCkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBuZXcgVG9kb0xpc3QoKSxcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSlcbiAgICAgIClcbiAgXG4gICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXG4gICAgICApXG4gIFxuICAgICAgdG9kb0xpc3RcbiAgICAgIC5nZXRQcm9qZWN0cygpXG4gICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICBwcm9qZWN0LmdldFRhc2tzKCkubWFwKCh0YXNrKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKVxuICAgICAgICApXG4gICAgICApXG4gICAgICByZXR1cm4gdG9kb0xpc3RcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3QpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgdG9kb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KVxuICAgIH1cbiAgXG4gICAgc3RhdGljIGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKHRhc2spXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmRlbGV0ZVRhc2sodGFza05hbWUpXG4gICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdClcbiAgICB9XG59ICAiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0luYm94JykpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdXb3Jrb3V0JykpXG4gIH1cblxuICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHNcbiAgfVxuXG4gIGdldFByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VGl0bGUpXG4gIH1cblxuICBjb250YWlucyhwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5ld1Byb2plY3QudGl0bGUpKVxuICAgICAgcmV0dXJuXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpXG4gIH1cblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZVxuICAgIClcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgIHRoaXMudGFza3MgPSBbXVxuICAgIH1cbiAgXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIH1cbiAgXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbiAgXG4gICAgc2V0VGFza3ModGFza3MpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrc1xuICAgIH1cbiAgXG4gICAgZ2V0VGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgY29udGFpbnModGFza3RpdGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2t0aXRsZSlcbiAgICB9XG4gIFxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSBuZXdUYXNrLnRpdGxlKSkgcmV0dXJuXG4gICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICB9XG4gIFxuICAgIGRlbGV0ZVRhc2sodGFza3RpdGxlKSB7XG4gICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgIT09IHRhc2t0aXRsZSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7IFxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gICAgXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL0RPTVwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFVJLmxvYWRIb21lcGFnZSlcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvU3RvcmFnZVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCI7XG5TdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QoJ0luYm94JykpXG5jb25zb2xlLmxvZyhTdG9yYWdlLmdldFRvZG9MaXN0KCkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=