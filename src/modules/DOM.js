import Project from "./createProject";
import Storage from "./Storage";
import Task from "./createTask";


export default class UI{
    static loadHomepage(){
        UI.loadProjects()//Load all projects from Storage.
        UI.openProject('Inbox')//Always open 'Inbox' (Default) on page-load.
    }

    static loadProjects(){
        Storage.getTodoList()//Fetch the List from Storage.
        .getProjects() //Get all the Projects from List.
        .forEach((project) => { //On Each Project,
            if(project.title !== 'Inbox' &&
            project.title !== 'Workout'){ //Except the Default,
                UI.createProject(project.title) //Create HTML content.
            } 
        })
        UI.handleMainProjBtns() //Initialize the Project Buttons.
    }

   static loadTasks(projectName){ //LOADS TASKS FROM STORAGE
     UI.handleMainTaskBtns()
     UI.clearTasks()
     let currentProject = Storage.getTodoList().getProject(projectName)
     let currentTasks = currentProject.getTasks()
     currentTasks.forEach((task) => UI.createTask(task.title, task.description,task.priority,task.dueDate))
    }
    //ADD NEW CONTENT TO STORAGE
   static addProject(){
    const projectName = document.getElementById('project').value;
    if(projectName === '' ){
         return
    } 
    if(Storage.getTodoList().contains(projectName)){
        return
    }
    Storage.addProject(new Project(projectName))
    UI.createProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
   }     

   static addTask(){
    const projectName = document.querySelector('.title').textContent;

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value; 
    if (title === '' || date === '') {
        return
    }
    Storage.addTask(projectName, new Task(title,description,priority,date));
    UI.createTask(title,description,priority,date)
   }

   static openProject(projectName){ // OPEN THE CLICKED PROJECT
    const projectTitleDOM = document.querySelector('.title');
    projectTitleDOM.textContent = projectName;
    UI.loadTasks(projectName);
}


   //DELETE CONTENT FROM STORAGE

   static deleteProject(projectName){
    Storage.deleteProject(projectName);
   }

   static deleteTask(currentProject, taskToDelete){ 
    Storage.deleteTask(currentProject,taskToDelete);
   }
   //CLEAR HTML CONTENT 

   static clearProjects(){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML="";
   }

   static clearTasks(){
    const taskContainer = document.querySelector('.task-container')
    taskContainer.innerHTML = ''
    }

   // BUTTONS PROJECT+TASK
   static handleMainProjBtns(){
    const defaultProject = document.querySelector('.inbox-project'); //Select Default Project(already in HTML).
    const workoutProject = document.querySelector('.workout-project');
    const openProjModal = document.querySelector('.open-project-modal'); //Select Open Modal Button
    const closeProjModal = document.querySelector('.close-project-modal'); //Select Close Modal Button
    const addProjBtn = document.querySelector('.add-project'); //Select Add Project Button
    const deleteProjectBtns = document.querySelectorAll('.delete-project'); //Select Delete Project Button
    const allProjects = document.querySelectorAll('.proj-name'); //Select Project - on-click Event 

    openProjModal.onclick = UI.openProjectModal;
    closeProjModal.onclick = UI.closeProjectModal;

    addProjBtn.addEventListener('click', (e)=>{
        e.preventDefault(); //Avoid Form's default behaviour.
        UI.addProject(); //Calls Function -> Add Project.
        UI.closeProjectModal(); //Closes Form.
    })

    deleteProjectBtns.forEach((button) => //Select All Buttons.
        button.addEventListener('click', (e) => { //Find clicked Button.
        let projectName = e.currentTarget.parentElement.firstElementChild.innerHTML; //Find Selected Project
        UI.deleteProject(projectName); //Delete Project.
        UI.clearProjects(); //Clear Sidebar.
        UI.loadProjects(); //Reload existing Projects from Storage.
    }))

    allProjects.forEach((project) => 
    project.addEventListener('click', (e) => { //Find clicked Project.
        let projectName = e.currentTarget.textContent; //Select Project.
        UI.openProject(projectName); //Open Project's Tasks.
    }))
    //Default project function (Without this, it seems that my functions are repeating twice)
    defaultProject.addEventListener('click', () => { 
        UI.openProject('Inbox')
    })
    workoutProject.addEventListener('click', ()=> {
        UI.openProject('Workout')
    })
    }

    static handleMainTaskBtns(){
        const openTaskModal = document.querySelector('.open-modal')//open add task modal 
        const closeTaskModal = document.querySelector('.close-modal')//close add task modal 
        const addTaskBtn = document.querySelector('.add-task')//add a new task
        const deleteTaskBtns = document.querySelectorAll('.delete-task')//delete an existing task

        openTaskModal.onclick = UI.openTaskModal;
        closeTaskModal.onclick = UI.closeTaskModal;
 
        addTaskBtn.addEventListener('click', (e) => {
            e.preventDefault()
            UI.addTask()
            UI.closeTaskModal()
        })

        deleteTaskBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                let taskToDelete = e.currentTarget.parentElement.parentElement.firstElementChild.innerText;
                console.log(taskToDelete)
                let currentProject = document.querySelector('.title').innerText
                console.log(currentProject)
                UI.deleteTask(currentProject, taskToDelete)
                UI.clearTasks()
                UI.loadTasks(currentProject)
            })
        })
     }
    // CREATE HTML CONTENT - PROJECT + TASK
    static createProject(title){
        const projectsContainer = document.querySelector('.js-lists'); //Select Sidebar
        projectsContainer.innerHTML += `<div class="proj">
        <li class="proj-name proj-title">${title}</li>
        <i class="fa-regular fa-circle-xmark delete-project"></i>
        </div>`;
        } 

   static createTask(name,description,priority,dueDate){
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML += `
    <div class="card">
    <div class="card-wrapper-one">
        <p class="task-name">${name}</p>
    </div>
    <p class="description">${description}</p>
    <div class="card-wrapper-two">
        <p class="priority-${priority}">${priority}</p>
        <p class="due-date">${dueDate}</p>
        <i class="fa-regular fa-circle-xmark delete-task"></i>
    </div>
    </div>
    `
    UI.handleMainTaskBtns()
   }

    //MODAL OPEN/CLOSE - PROJECT + TASK
    static openProjectModal(){
        const projectModal = document.querySelector('.project-modal');
        const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display = "block";
        openProjModal.style.display = "none";
    }

   static closeProjectModal(){
    document.getElementById('project').value = ""
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display ="none";
        openProjModal.style.display ="block";
   }

   static openTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    taskModal.style.display = "block"
    openTaskModal.style.display = 'none';
   }

   static closeTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    document.getElementById('title').value = "";
    document.getElementById('description').value = ""
        taskModal.style.display ="none";
        openTaskModal.style.display ="block";
   }
}

