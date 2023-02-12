import Task from './modules/createTask';
import Project from './modules/createProject';
import List from './modules/createList';

const newtask1 = new Task('learn','js','02/08/2022','Low')
console.log(newtask1);

const project1 = new Project('Work');

const content = document.querySelector('.content')


// ADD TASK MODAL
const taskModal = document.querySelector('.modal');
const openTaskModal = document.querySelector('.open-modal');
const closeTaskModal = document.querySelector('.close-modal');
openTaskModal.onclick = function(){
    taskModal.style.display = "block";
    openTaskModal.style.display = "none";
}
closeTaskModal.onclick = function(){
    taskModal.style.display = "none";
    openTaskModal.style.display = "block"; //also put this for the (form add) button.
}
// ADD PROJECT MODAL
const projectModal = document.querySelector('.project-modal');
const openProjModal = document.querySelector('.open-project-modal');
const closeProjModal = document.querySelector('.close-project-modal')
openProjModal.onclick = () => {
    projectModal.style.display = "block";
    openProjModal.style.display = "none";
}
closeProjModal.onclick = () => {
    projectModal.style.display ="none";
    openProjModal.style.display ="block";
}

//CREATE CONTENT 

// MAKE A NEW PROJECT DOM 

let testProject = new Project('testProject');

// GET TASK FROM FORM 
const taskForm = document.querySelector('.add-task-form');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value;
    
    const newTask = new Task(title,description,priority,date);
    testProject.addTask(newTask);
})
console.log(testProject)