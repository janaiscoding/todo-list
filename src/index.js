import Task from './modules/createTask';
import Project from './modules/createProject';

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