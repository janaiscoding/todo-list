/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox', 0))
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
    constructor(title, id) {
      this.title = title
      this.id = id
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
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
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
/* harmony import */ var _modules_createList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createList */ "./src/modules/createList.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");




//CREATE CONTENT 
let myList = new _modules_createList__WEBPACK_IMPORTED_MODULE_0__["default"](); //initialize the list which encapsulates every project

let projectID = 1; //starts at one because the default is Inbox with id 0 
let myProject = myList.getProject('Inbox') //grab the initial project
myProject.addTask(new _modules_createTask__WEBPACK_IMPORTED_MODULE_1__["default"]("asddddd", "asd", "20-02-2032","High"))
console.log(myProject)
// GET TASK FROM FORM 
const taskForm = document.querySelector('.add-task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value; 
    myProject.addTask(new _modules_createTask__WEBPACK_IMPORTED_MODULE_1__["default"](title,description,priority,date));
    displayTasks();
    clearInput();
    taskModal.style.display = "block";
    openTaskModal.style.display = "none";
})

//REFRESH USER INPUTS FOR TASKS
const clearInput = function() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = ''; 
    document.getElementById('priority').value = 'Low';
    document.getElementById('date').value= '';
}

// CREATE CARD FOR A TASK (DOM)
let createTaskCard = (task) => {
    const taskContainer = document.querySelector('.task-container');
    const card = document.createElement('div');
    card.classList.add('card');

    const cardWrapperOne = document.createElement('div');
    cardWrapperOne.classList.add('card-wrapper-one');

    const tasktitle = document.createElement('p');
    tasktitle.classList.add('task-title');
    tasktitle.textContent = task.title;

    const descriptionCard = document.createElement('p');
    descriptionCard.classList.add('description');
    descriptionCard.textContent = task.description;

    const cardWrapperTwo = document.createElement('div');
    cardWrapperTwo.classList.add('card-wrapper-two');

    const priorityCard = document.createElement('p');
    priorityCard.textContent = task.priority;

    //CHECKING FOR PRIORITY STATUS
     if(priorityCard.textContent === 'High') {
         priorityCard.classList.add('priority-high');
    } 
    else if(priorityCard.textContent === 'Low'){
         priorityCard.classList.add('priority-low');
    }

    const dueDateCard = document.createElement('p');
    dueDateCard.classList.add('due-date');
    dueDateCard.textContent = task.dueDate;

    const iconXmark = document.createElement('i');
    iconXmark.classList.add('fa-regular');
    iconXmark.classList.add('fa-circle-xmark');

    // TO ADD COMPLETE/DELETE FUNCTIONS BINDED TO ICONS

    iconXmark.addEventListener('click', () => {
        myProject.deleteTask(task.title);
        displayTasks();
    })

    // APPENDING ALL 
    cardWrapperOne.append(tasktitle);
    cardWrapperTwo.append(priorityCard, dueDateCard,iconXmark);
    card.append(cardWrapperOne,descriptionCard,cardWrapperTwo);
    taskContainer.append(card);
}

// DISPLAY THE TASKS 
const displayTasks = function(){
    const taskContainer = document.querySelector('.task-container');

    const allTasks = document.querySelectorAll('.card');
    allTasks.forEach(card => taskContainer.removeChild(card))
    for (let i = 0; i <= myProject.tasks.length-1;i++){
        createTaskCard(myProject.tasks[i]);
    }
}

// GET PROJECT FROM FORM
const projectForm = document.querySelector('.add-project-form') 
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('project').value;
    myList.addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"](title,projectID));
    projectID++;
    displayProjects();
    clearProjectsInput();
    projectModal.style.display ="none";
    openProjModal.style.display ="block";
})

const clearProjectsInput = function(){
    document.getElementById('project').value = "";
}

const displayProjects = function(){
    const projectsContainer = document.querySelector('.js-lists');

    const allProjects = document.querySelectorAll('.proj');
    allProjects.forEach(liElement => projectsContainer.removeChild(liElement))
    for (let i = 0; i <= myList.projects.length-1;i++){
        createProjectLi(myList.projects[i])   
    }
    console.log(myList);
    handleProjects();
}
// CREATE CARD FOR PROJECT (DOM)
let createProjectLi = (project) => {
    const projectsContainer = document.querySelector('.js-lists');
    const proj = document.createElement('li');
    proj.classList.add('proj');
    proj.id = project.id;
    proj.textContent = project.title;
    projectsContainer.append(proj);
}
//EVENT LISTENER ON PROJECT CLICK -> Swap selected project and update tasks.
const handleProjects = function(){
const allProjects = document.querySelectorAll('.proj');
allProjects.forEach((liElement) => {
    liElement.addEventListener('click', ()=>{
        myProject = myList.getProject(liElement.innerHTML)
        displayTasks();
    })
})

}
// ADD TASK MODAL
const taskModal = document.querySelector('.modal');
const openTaskModal = document.querySelector('.open-modal');
const closeTaskModal = document.querySelector('.close-modal');
 openTaskModal.onclick = function(e){
    e.preventDefault();
    taskModal.style.display = "block";
    openTaskModal.style.display = "none";
}

closeTaskModal.onclick = function(e){
    e.preventDefault();
    taskModal.style.display = "none";
    openTaskModal.style.display = "block"; //also put this for the (form add) button.
}
// ADD PROJECT MODAL
const projectModal = document.querySelector('.project-modal');
const openProjModal = document.querySelector('.open-project-modal');
const closeProjModal = document.querySelector('.close-project-modal')
openProjModal.onclick = (e) => {
    e.preventDefault();
    projectModal.style.display = "block";
    openProjModal.style.display = "none";
}
closeProjModal.onclick = (e) => {
    e.preventDefault();
    projectModal.style.display ="none";
    openProjModal.style.display ="block";
}
displayProjects();
displayTasks();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBLDJCQUEyQixzREFBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ040QztBQUNKO0FBQ007O0FBRTlDO0FBQ0EsaUJBQWlCLDJEQUFRLElBQUk7O0FBRTdCLG1CQUFtQjtBQUNuQjtBQUNBLHNCQUFzQiwyREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4REFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnLCAwKSlcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKVxuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmV3UHJvamVjdC50aXRsZSkpXG4gICAgICByZXR1cm5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlXG4gICAgKVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGlkKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuICBcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICBcbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrKHRhc2t0aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrdGl0bGUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2sudGl0bGUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza3RpdGxlKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHsgXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gICAgXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZUxpc3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvY3JlYXRlVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCI7XG5cbi8vQ1JFQVRFIENPTlRFTlQgXG5sZXQgbXlMaXN0ID0gbmV3IFRvZG9MaXN0KCk7IC8vaW5pdGlhbGl6ZSB0aGUgbGlzdCB3aGljaCBlbmNhcHN1bGF0ZXMgZXZlcnkgcHJvamVjdFxuXG5sZXQgcHJvamVjdElEID0gMTsgLy9zdGFydHMgYXQgb25lIGJlY2F1c2UgdGhlIGRlZmF1bHQgaXMgSW5ib3ggd2l0aCBpZCAwIFxubGV0IG15UHJvamVjdCA9IG15TGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpIC8vZ3JhYiB0aGUgaW5pdGlhbCBwcm9qZWN0XG5teVByb2plY3QuYWRkVGFzayhuZXcgVGFzayhcImFzZGRkZGRcIiwgXCJhc2RcIiwgXCIyMC0wMi0yMDMyXCIsXCJIaWdoXCIpKVxuY29uc29sZS5sb2cobXlQcm9qZWN0KVxuLy8gR0VUIFRBU0sgRlJPTSBGT1JNIFxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpO1xudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7IFxuICAgIG15UHJvamVjdC5hZGRUYXNrKG5ldyBUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUpKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbiAgICBjbGVhcklucHV0KCk7XG4gICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgb3BlblRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG4vL1JFRlJFU0ggVVNFUiBJTlBVVFMgRk9SIFRBU0tTXG5jb25zdCBjbGVhcklucHV0ID0gZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnOyBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSA9ICdMb3cnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU9ICcnO1xufVxuXG4vLyBDUkVBVEUgQ0FSRCBGT1IgQSBUQVNLIChET00pXG5sZXQgY3JlYXRlVGFza0NhcmQgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBjb25zdCBjYXJkV3JhcHBlck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRXcmFwcGVyT25lLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd3JhcHBlci1vbmUnKTtcblxuICAgIGNvbnN0IHRhc2t0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgIHRhc2t0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb25DYXJkLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25DYXJkLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGNhcmRXcmFwcGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFdyYXBwZXJUd28uY2xhc3NMaXN0LmFkZCgnY2FyZC13cmFwcGVyLXR3bycpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaW9yaXR5Q2FyZC50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAvL0NIRUNLSU5HIEZPUiBQUklPUklUWSBTVEFUVVNcbiAgICAgaWYocHJpb3JpdHlDYXJkLnRleHRDb250ZW50ID09PSAnSGlnaCcpIHtcbiAgICAgICAgIHByaW9yaXR5Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgfSBcbiAgICBlbHNlIGlmKHByaW9yaXR5Q2FyZC50ZXh0Q29udGVudCA9PT0gJ0xvdycpe1xuICAgICAgICAgcHJpb3JpdHlDYXJkLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxvdycpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1ZURhdGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGR1ZURhdGVDYXJkLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZUNhcmQudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICBjb25zdCBpY29uWG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaWNvblhtYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInKTtcbiAgICBpY29uWG1hcmsuY2xhc3NMaXN0LmFkZCgnZmEtY2lyY2xlLXhtYXJrJyk7XG5cbiAgICAvLyBUTyBBREQgQ09NUExFVEUvREVMRVRFIEZVTkNUSU9OUyBCSU5ERUQgVE8gSUNPTlNcblxuICAgIGljb25YbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbXlQcm9qZWN0LmRlbGV0ZVRhc2sodGFzay50aXRsZSk7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH0pXG5cbiAgICAvLyBBUFBFTkRJTkcgQUxMIFxuICAgIGNhcmRXcmFwcGVyT25lLmFwcGVuZCh0YXNrdGl0bGUpO1xuICAgIGNhcmRXcmFwcGVyVHdvLmFwcGVuZChwcmlvcml0eUNhcmQsIGR1ZURhdGVDYXJkLGljb25YbWFyayk7XG4gICAgY2FyZC5hcHBlbmQoY2FyZFdyYXBwZXJPbmUsZGVzY3JpcHRpb25DYXJkLGNhcmRXcmFwcGVyVHdvKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChjYXJkKTtcbn1cblxuLy8gRElTUExBWSBUSEUgVEFTS1MgXG5jb25zdCBkaXNwbGF5VGFza3MgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBhbGxUYXNrcy5mb3JFYWNoKGNhcmQgPT4gdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkKSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBteVByb2plY3QudGFza3MubGVuZ3RoLTE7aSsrKXtcbiAgICAgICAgY3JlYXRlVGFza0NhcmQobXlQcm9qZWN0LnRhc2tzW2ldKTtcbiAgICB9XG59XG5cbi8vIEdFVCBQUk9KRUNUIEZST00gRk9STVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpIFxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuICAgIG15TGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHRpdGxlLHByb2plY3RJRCkpO1xuICAgIHByb2plY3RJRCsrO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIGNsZWFyUHJvamVjdHNJbnB1dCgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbn0pXG5cbmNvbnN0IGNsZWFyUHJvamVjdHNJbnB1dCA9IGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSA9IFwiXCI7XG59XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2onKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKGxpRWxlbWVudCA9PiBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChsaUVsZW1lbnQpKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG15TGlzdC5wcm9qZWN0cy5sZW5ndGgtMTtpKyspe1xuICAgICAgICBjcmVhdGVQcm9qZWN0TGkobXlMaXN0LnByb2plY3RzW2ldKSAgIFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhteUxpc3QpO1xuICAgIGhhbmRsZVByb2plY3RzKCk7XG59XG4vLyBDUkVBVEUgQ0FSRCBGT1IgUFJPSkVDVCAoRE9NKVxubGV0IGNyZWF0ZVByb2plY3RMaSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcbiAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2onKTtcbiAgICBwcm9qLmlkID0gcHJvamVjdC5pZDtcbiAgICBwcm9qLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQocHJvaik7XG59XG4vL0VWRU5UIExJU1RFTkVSIE9OIFBST0pFQ1QgQ0xJQ0sgLT4gU3dhcCBzZWxlY3RlZCBwcm9qZWN0IGFuZCB1cGRhdGUgdGFza3MuXG5jb25zdCBoYW5kbGVQcm9qZWN0cyA9IGZ1bmN0aW9uKCl7XG5jb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qJyk7XG5hbGxQcm9qZWN0cy5mb3JFYWNoKChsaUVsZW1lbnQpID0+IHtcbiAgICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBteVByb2plY3QgPSBteUxpc3QuZ2V0UHJvamVjdChsaUVsZW1lbnQuaW5uZXJIVE1MKVxuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxufSlcblxufVxuLy8gQUREIFRBU0sgTU9EQUxcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJyk7XG5jb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuIG9wZW5UYXNrTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBvcGVuVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuY2xvc2VUYXNrTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy9hbHNvIHB1dCB0aGlzIGZvciB0aGUgKGZvcm0gYWRkKSBidXR0b24uXG59XG4vLyBBREQgUFJPSkVDVCBNT0RBTFxuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbmNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBjbG9zZVByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJylcbm9wZW5Qcm9qTW9kYWwub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG9wZW5Qcm9qTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuY2xvc2VQcm9qTW9kYWwub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbn1cbmRpc3BsYXlQcm9qZWN0cygpO1xuZGlzcGxheVRhc2tzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9