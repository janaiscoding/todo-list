import Task from './modules/createTask';
import Project from './modules/createProject';

const newtask1 = new Task('learn','js','02/08/2022','Low')
console.log(newtask1);

const project1 = new Project('Work');

const content = document.querySelector('.content')


// MODAL & MODAL CONTENT 
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');
openModalBtn.onclick = function(){
     modal.style.display = "block";
     openModalBtn.style.display = "none";
}
closeModalBtn.onclick = function(){
    modal.style.display = "none";
    openModalBtn.style.display = "block";
}