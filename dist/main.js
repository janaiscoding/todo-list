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
    this.projects.push(new _createProject__WEBPACK_IMPORTED_MODULE_0__["default"]('Inbox'))
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
let myList = new _modules_createList__WEBPACK_IMPORTED_MODULE_0__["default"](); //initialize the list
myList.addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('dummy'))
myList.addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"]('dummy2'))

let myProject = myList.getProject('Inbox')
myProject.addTask(new _modules_createTask__WEBPACK_IMPORTED_MODULE_1__["default"]("asddddd", "asd", "20-02-2032","High"))
console.log(myList);

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

    const iconCircle = document.createElement('i')
    iconCircle.classList.add('fa-regular');
    iconCircle.classList.add('fa-circle-check');

    const tasktitle = document.createElement('p');
    tasktitle.classList.add('task-title');
    tasktitle.textContent = task.title;

    cardWrapperOne.append(iconCircle,tasktitle);

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


    // APPENDING ALL 
    cardWrapperOne.append(iconCircle,tasktitle);
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
    myList.addProject(new _modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"](title));
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
}
// CREATE CARD FOR PROJECT (DOM)
let createProjectLi = (project) => {
    const projectsContainer = document.querySelector('.js-lists');
    const proj = document.createElement('li');
    proj.classList.add('proj');
    proj.textContent = project.title;
    projectsContainer.append(proj);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBLDJCQUEyQixzREFBTztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDSjtBQUNNOztBQUU5QztBQUNBLGlCQUFpQiwyREFBUSxJQUFJO0FBQzdCLHNCQUFzQiw4REFBTztBQUM3QixzQkFBc0IsOERBQU87O0FBRTdCO0FBQ0Esc0JBQXNCLDJEQUFJO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4REFBTztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBbXVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnSW5ib3gnKSlcbiAgfVxuXG4gIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzXG4gIH1cblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICB9XG5cbiAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlcbiAgfVxuXG4gIGNvbnRhaW5zKHByb2plY3RUaXRsZSkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKVxuICB9XG5cbiAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgaWYgKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gbmV3UHJvamVjdC50aXRsZSkpXG4gICAgICByZXR1cm5cbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlXG4gICAgKVxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuICBcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgfVxuICBcbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpdGxlXG4gICAgfVxuICBcbiAgICBzZXRUYXNrcyh0YXNrcykge1xuICAgICAgdGhpcy50YXNrcyA9IHRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzXG4gICAgfVxuICBcbiAgICBnZXRUYXNrKHRhc2t0aXRsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrdGl0bGUpXG4gICAgfVxuICBcbiAgICBjb250YWlucyh0YXNrdGl0bGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza3RpdGxlKVxuICAgIH1cbiAgXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICBpZiAodGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IG5ld1Rhc2sudGl0bGUpKSByZXR1cm5cbiAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKVxuICAgIH1cbiAgXG4gICAgZGVsZXRlVGFzayh0YXNrdGl0bGUpIHtcbiAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza3RpdGxlKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHsgXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gICAgXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXRsZVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9tb2R1bGVzL2NyZWF0ZUxpc3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvY3JlYXRlVGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCI7XG5cbi8vQ1JFQVRFIENPTlRFTlQgXG5sZXQgbXlMaXN0ID0gbmV3IFRvZG9MaXN0KCk7IC8vaW5pdGlhbGl6ZSB0aGUgbGlzdFxubXlMaXN0LmFkZFByb2plY3QobmV3IFByb2plY3QoJ2R1bW15JykpXG5teUxpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdCgnZHVtbXkyJykpXG5cbmxldCBteVByb2plY3QgPSBteUxpc3QuZ2V0UHJvamVjdCgnSW5ib3gnKVxubXlQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2soXCJhc2RkZGRkXCIsIFwiYXNkXCIsIFwiMjAtMDItMjAzMlwiLFwiSGlnaFwiKSlcbmNvbnNvbGUubG9nKG15TGlzdCk7XG5cbi8vIEdFVCBUQVNLIEZST00gRk9STSBcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKTtcbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlOyBcbiAgICBteVByb2plY3QuYWRkVGFzayhuZXcgVGFzayh0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkYXRlKSk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgY2xlYXJJbnB1dCgpO1xuICAgIHRhc2tNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuLy9SRUZSRVNIIFVTRVIgSU5QVVRTIEZPUiBUQVNLU1xuY29uc3QgY2xlYXJJbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJzsgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWUgPSAnTG93JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlPSAnJztcbn1cblxuLy8gQ1JFQVRFIENBUkQgRk9SIEEgVEFTSyAoRE9NKVxubGV0IGNyZWF0ZVRhc2tDYXJkID0gKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZFdyYXBwZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkV3JhcHBlck9uZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXdyYXBwZXItb25lJyk7XG5cbiAgICBjb25zdCBpY29uQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgaWNvbkNpcmNsZS5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJyk7XG4gICAgaWNvbkNpcmNsZS5jbGFzc0xpc3QuYWRkKCdmYS1jaXJjbGUtY2hlY2snKTtcblxuICAgIGNvbnN0IHRhc2t0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgIHRhc2t0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjYXJkV3JhcHBlck9uZS5hcHBlbmQoaWNvbkNpcmNsZSx0YXNrdGl0bGUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uQ2FyZC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uQ2FyZC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBjYXJkV3JhcHBlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRXcmFwcGVyVHdvLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd3JhcHBlci10d28nKTtcblxuICAgIGNvbnN0IHByaW9yaXR5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmlvcml0eUNhcmQudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgLy9DSEVDS0lORyBGT1IgUFJJT1JJVFkgU1RBVFVTXG4gICAgIGlmKHByaW9yaXR5Q2FyZC50ZXh0Q29udGVudCA9PT0gJ0hpZ2gnKSB7XG4gICAgICAgICBwcmlvcml0eUNhcmQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaGlnaCcpO1xuICAgIH0gXG4gICAgZWxzZSBpZihwcmlvcml0eUNhcmQudGV4dENvbnRlbnQgPT09ICdMb3cnKXtcbiAgICAgICAgIHByaW9yaXR5Q2FyZC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sb3cnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdWVEYXRlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkdWVEYXRlQ2FyZC5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIGR1ZURhdGVDYXJkLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgY29uc3QgaWNvblhtYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGljb25YbWFyay5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJyk7XG4gICAgaWNvblhtYXJrLmNsYXNzTGlzdC5hZGQoJ2ZhLWNpcmNsZS14bWFyaycpO1xuXG4gICAgLy8gVE8gQUREIENPTVBMRVRFL0RFTEVURSBGVU5DVElPTlMgQklOREVEIFRPIElDT05TXG5cblxuICAgIC8vIEFQUEVORElORyBBTEwgXG4gICAgY2FyZFdyYXBwZXJPbmUuYXBwZW5kKGljb25DaXJjbGUsdGFza3RpdGxlKTtcbiAgICBjYXJkV3JhcHBlclR3by5hcHBlbmQocHJpb3JpdHlDYXJkLCBkdWVEYXRlQ2FyZCxpY29uWG1hcmspO1xuICAgIGNhcmQuYXBwZW5kKGNhcmRXcmFwcGVyT25lLGRlc2NyaXB0aW9uQ2FyZCxjYXJkV3JhcHBlclR3byk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2FyZCk7XG59XG5cbi8vIERJU1BMQVkgVEhFIFRBU0tTIFxuY29uc3QgZGlzcGxheVRhc2tzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gICAgYWxsVGFza3MuZm9yRWFjaChjYXJkID0+IHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoY2FyZCkpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbXlQcm9qZWN0LnRhc2tzLmxlbmd0aC0xO2krKyl7XG4gICAgICAgIGNyZWF0ZVRhc2tDYXJkKG15UHJvamVjdC50YXNrc1tpXSk7XG4gICAgfVxufVxuXG4vLyBHRVQgUFJPSkVDVCBGUk9NIEZPUk1cbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKSBcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICBteUxpc3QuYWRkUHJvamVjdChuZXcgUHJvamVjdCh0aXRsZSkpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgIGNsZWFyUHJvamVjdHNJbnB1dCgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbn0pXG5cbmNvbnN0IGNsZWFyUHJvamVjdHNJbnB1dCA9IGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZSA9IFwiXCI7XG59XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2onKTtcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKGxpRWxlbWVudCA9PiBwcm9qZWN0c0NvbnRhaW5lci5yZW1vdmVDaGlsZChsaUVsZW1lbnQpKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG15TGlzdC5wcm9qZWN0cy5sZW5ndGgtMTtpKyspe1xuICAgICAgICBjcmVhdGVQcm9qZWN0TGkobXlMaXN0LnByb2plY3RzW2ldKSAgICAgXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG15TGlzdCk7XG59XG4vLyBDUkVBVEUgQ0FSRCBGT1IgUFJPSkVDVCAoRE9NKVxubGV0IGNyZWF0ZVByb2plY3RMaSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdHMnKTtcbiAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2onKTtcbiAgICBwcm9qLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQocHJvaik7XG59XG5cblxuLy8gQUREIFRBU0sgTU9EQUxcbmNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3Qgb3BlblRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsJyk7XG5jb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuIG9wZW5UYXNrTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBvcGVuVGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuY2xvc2VUYXNrTW9kYWwub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG9wZW5UYXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgLy9hbHNvIHB1dCB0aGlzIGZvciB0aGUgKGZvcm0gYWRkKSBidXR0b24uXG59XG4vLyBBREQgUFJPSkVDVCBNT0RBTFxuY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbW9kYWwnKTtcbmNvbnN0IG9wZW5Qcm9qTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBjbG9zZVByb2pNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJylcbm9wZW5Qcm9qTW9kYWwub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG9wZW5Qcm9qTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuY2xvc2VQcm9qTW9kYWwub25jbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID1cIm5vbmVcIjtcbiAgICBvcGVuUHJvak1vZGFsLnN0eWxlLmRpc3BsYXkgPVwiYmxvY2tcIjtcbn1cbmRpc3BsYXlQcm9qZWN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==