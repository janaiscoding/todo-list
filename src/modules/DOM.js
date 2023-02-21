import Project from "./createProject";
import Storage from "./Storage";
import Task from "./createTask";


export default class UI{
    static loadHomepage(){
        UI.loadProjects()
        UI.handleMainProjBtns()
        UI.openProject('Inbox')
    }
    // LOAD EVERY PROJECT IN THE SIDEBAR
    static loadProjects(){
        Storage.getTodoList()
        .getProjects()
        .forEach((project) => {
            if(project.title !== 'Inbox'){
                UI.createProject(project.title)
            } 
        })
        UI.handleMainProjBtns();
    }
   //LOAD TASKS FROM CURRENT PROJECT
   static loadTasks(projectName){
     UI.handleMainTaskBtns()
     UI.clearTasks()
     let currentProject = Storage.getTodoList().getProject(projectName)
     let currentTasks = currentProject.getTasks()
     currentTasks.forEach((task) => UI.createTask(task.title, task.description,task.priority,task.dueDate))
    }

    static clearTasks(){
        const taskContainer = document.querySelector('.task-container')
        taskContainer.innerHTML = ''
    }

    // HTML DOM SIDEBAR PROJECTS
    static createProject(title){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML += `
    <div class="proj">
    <li class="proj-name">${title}</li>
    <i class="fa-regular fa-circle-xmark delete-project"></i>
    </div>
    `;
    }
    //ADD A PROJECT TO THE STORAGE
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

   //DELETE PROJECT FROM STORAGE
   static deleteProject(projectName){
    Storage.deleteProject(projectName);
   }
   // REFRESH AND CLEAR SIDEBAR
   static clearProjects(){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML="";
   }

   // SWAP THE FOCUSED PROJECT
   static openProject(projectName){
    const projectTitleDOM = document.querySelector('.title');
    projectTitleDOM.innerHTML = projectName;
    UI.loadTasks(projectName);
}
    // OPEN/CLOSE/ADD/DELETE/HANDLE PROJECT
   static handleMainProjBtns(){
    const openProjModal = document.querySelector('.open-project-modal');
    const closeProjModal = document.querySelector('.close-project-modal');
    const addProjBtn = document.querySelector('.add-project');
    const deleteProjectBtns = document.querySelectorAll('.delete-project');
    const allProjects = document.querySelectorAll('.proj-name');

    openProjModal.onclick = UI.openProjectModal;
    closeProjModal.onclick = UI.closeProjectModal;

    addProjBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        UI.addProject();
        UI.closeProjectModal();
    })

    deleteProjectBtns.forEach((button) => 
        button.addEventListener('click', (e) => {
        let projectName = e.currentTarget.parentElement.firstElementChild.innerHTML;
        UI.deleteProject(projectName);
        UI.clearProjects();
        UI.loadProjects();
    }))

    allProjects.forEach((project) => 
    project.addEventListener('click', (e) => {
        let projectName = e.currentTarget.innerHTML;
        UI.openProject(projectName);
    }) )
    }

    // HANDLE OPEN MODAL - PROJECT
   static openProjectModal(){
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display = "block";
        openProjModal.style.display = "none";
   }
   // HANDLE CLOSE MODAL - PROJECT
   static closeProjectModal(){
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
    document.getElementById('project').value = "";
        projectModal.style.display ="none";
        openProjModal.style.display ="block";
   }

   //CREATE HTML DOM TASK CONTENT 
   static createTask(name,description,priority,dueDate){
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML += `
    <div class="card">
    <div class="card-wrapper-one">
        <p class="task-name">${name}</p>
    </div>
    <p class="description">${description}</p>
    <div class="card-wrapper-two">
        <p class="priority-high">${priority}</p>
        <p class="due-date">${dueDate}</p>
        <i class="fa-regular fa-circle-xmark delete-task"></i>
    </div>
    </div>
    `
    UI.handleMainTaskBtns()
   }

   //HANDLE MAIN TASKS BUTTONS 
   static handleMainTaskBtns(){
    //open add task modal 
    const openTaskModal = document.querySelector('.open-modal')
    openTaskModal.onclick = UI.openTaskModal;
    //close add task modal 
    const closeTaskModal = document.querySelector('.close-modal')
    closeTaskModal.onclick = UI.closeTaskModal;
    //add a new task 
    const addTaskBtn = document.querySelector('.add-task')
    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault()
        UI.addTask()
        UI.closeTaskModal()
    })

    //delete an existing task
    const deleteTaskBtns = document.querySelectorAll('.delete-task')
    deleteTaskBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            let taskToDelete = e.currentTarget.parentElement.parentElement.firstElementChild.innerText;
            let currentProject = document.querySelector('.title')
            UI.deleteTask(currentProject, taskToDelete)
        }) //AM RAMAS AICI!!!!!!!!!
    })
   }
   static openTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    taskModal.style.display = "block"
    openTaskModal.style.display = 'none';
   }
   // HANDLE CLOSE MODAL - TASK
   static closeTaskModal(){
    const taskModal = document.querySelector('.modal');
    const openTaskModal = document.querySelector('.open-modal')
    document.getElementById('title').value = "";
    document.getElementById('description').value = ""
        taskModal.style.display ="none";
        openTaskModal.style.display ="block";
   }

   static addTask(){
    const projectName = document.querySelector('.title').textContent;

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const date = document.getElementById('date').value; 
    if (title === '') {
        return
    }
    Storage.addTask(projectName, new Task(title,description,priority,date));
    UI.createTask(title,description,priority,date)
   }
}
    
    