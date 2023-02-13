import Task from './modules/createTask';
import Project from './modules/createProject';
import List from './modules/createList';

const newTask1 = new Task('learn','js','02/08/2022','Low')
console.log(newTask1);


//CREATE CONTENT 

// MAKE A NEW PROJECT DOM 

let newProject = new Project('Test');
console.log(newProject)


// GET TASK FROM FORM 
const taskForm = document.querySelector('.add-task-form');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value;
    
    const newTask = new Task(title,description,priority,date);
    newProject.addTask(newTask);
    displayTasks();
    console.log(newProject.getTasks())
})

// DOM TASK CARD
function createTaskCard(task){
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
function displayTasks(){
    const taskContainer = document.querySelector('.task-container');

    const allTasks = document.querySelectorAll('.card');
    allTasks.forEach(card => taskContainer.removeChild(card))
    for (let i = 0; i <= newProject.tasks.length-1;i++){
        createTaskCard(newProject.tasks[i]);
    }

}


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
