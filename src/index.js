import './style.css';
import Task from './modules/createTask';
import Project from './modules/createProject';
import { createHtmlElement } from './modules/createDOM';
import List from './modules/createList';

const newtask = new Task('learn','js','01-12-2022','high')
console.log(newtask);
const newtask2 = new Task('lear131231n','js','01-12-2022','high')
console.log(newtask2);


// function showTask(item){
//     const listSpace = document.querySelector('.list-space'); //where i put the card
//     const taskCard = document.createElement('div');
//     taskCard.classList.add('book');
//     taskCard.setAttribute('id', todayProject.tasks.indexOf(item));

//     const taskTitle = document.createElement('div');
//     taskTitle.classList.add('book-title')
//     taskTitle.textContent = item.title;

//     taskCard.append(taskTitle);
//     listSpace.append(taskCard);
//   }
//  showTask(newtask); 
//  displayTasks();

//  function displayTasks(){
//     const listSpace = document.querySelector('.list-space');
//     const allTasks = document.querySelectorAll('.book');

//     allTasks.forEach(task => todayProject.removeChild(task))
//     for (let i = 0; i <= todayProject.tasks.length-1;i++){
//         showTask(todayProject.tasks[i]);
//     }
//  }