import Task from './modules/createTask';
import Project from './modules/createProject';

const newtask1 = new Task('learn','js','02/08/2022','Low')
console.log(newtask1);

const project1 = new Project('Work');

const content = document.querySelector('.content')
