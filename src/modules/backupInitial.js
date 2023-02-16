import TodoList from "./modules/createList";
import Task from "./modules/createTask";
import Project from "./modules/createProject";


//CREATE CONTENT 
let myList = new TodoList(); //initialize the list which encapsulates every project
let myProject = myList.getProject('Inbox') //grab the initial project
let workoutProject = myList.getProject('Workout')
myProject.addTask(new Task("Learn Local Storage", "also convert all the code","High", "20-02-2032"))
myProject.addTask(new Task("Take Breaks", "..you know you have to.", "High", "20-02-2032"))
workoutProject.addTask(new Task("Push-ups", "20 Push-ups","High", "20-02-2032"))
workoutProject.addTask(new Task("Squats", "20 Squats","High", "20-02-2032"))

// GET TASK FROM FORM 
const taskForm = document.querySelector('.add-task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value; 
    myProject.addTask(new Task(title,description,priority,date));
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
    myList.addProject(new Project(title));
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

    const projectWrapper = document.createElement('div');
    const proj = document.createElement('li');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-regular');
    deleteIcon.classList.add('fa-circle-xmark');

    deleteIcon.addEventListener('click', () => {
        myList.deleteProject(project.title);
        displayProjects();
    })

    projectWrapper.append(proj, deleteIcon);
    projectWrapper.classList.add('proj');
    proj.textContent = project.title;
    projectsContainer.append(projectWrapper);
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