import Task from './modules/createTask';
import Project from './modules/createProject';
import List from './modules/createList';

const newTask1 = new Task('learn','js','02/08/2022','Low')
console.log(newTask1);


//CREATE CONTENT 
let myList = new List();
let myProject = new Project();
// EVENT LISTENERS ON DEFAULT PROJECTS
const inboxList = document.querySelector('.inbox');
inboxList.onclick = function(){
myProject = myList.setProjects('Inbox');
console.log(myList)
}

// MAKE A NEW PROJECT DOM 
// SET THE DEFAULT LIST WHICH CONTAINS THE PROJECT WHICH CONTAINS ALL THE TASKS


// GET TASK FROM FORM 
const taskForm = document.querySelector('.add-task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value;
    
    const newTask = new Task(title,description,priority,date);
    myProject.addTask(newTask);
    displayTasks();
    clearInput();
    taskModal.style.display = "block";
    openTaskModal.style.display = "none";
    console.log(myProject.getTasks())
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

    const taskName = document.createElement('p');
    taskName.classList.add('task-name');
    taskName.textContent = task.title;

    cardWrapperOne.append(iconCircle,taskName);

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
    cardWrapperOne.append(iconCircle,taskName);
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
    const newProject = new Project(title);
    myList.addProject(newProject);
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
        if( !myList.projects[i].contains('Inbox') || 
            !myList.projects[i].contains('Today') || 
            !myList.projects[i].contains('This Week')){
                createProjectLi(myList.projects[i]);
            }
    }
}
// CREATE CARD FOR PROJECT (DOM)
let createProjectLi = (project) => {
    const projectsContainer = document.querySelector('.js-lists');
    const proj = document.createElement('li');
    proj.classList.add('proj');
    proj.textContent = 'asd';
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
