import Project from "./createProject";
import Storage from "./Storage";

export default class UI{
    static loadHomepage(){
        UI.loadProjects()
    }

    static loadProjects(){
        Storage.getTodoList()
        .getProjects()
        .forEach((project)=> UI.createProject(project.title)) 
        UI.handleMainProjBtns();
    }


    static createProject(title){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML += `
    <div class="proj">
    <li>${title}</li>
    <i class="fa-regular fa-circle-xmark delete-project"></i>
    </div>
    `;
    }

   static addProject(){
    const projectName = document.getElementById('project').value;
    if(projectName === '' ){
        alert('Please insert project name')
        return
    } 
    if(Storage.getTodoList().contains(projectName)){
        alert('You already have this project, silly')
        UI.clearProjectModalInput();
        return
    }
    Storage.addProject(new Project(projectName))
    UI.createProject(projectName);
    UI.closeProjectModal();
   }     

   static clearProjectModalInput(){
    document.getElementById('project').value = "";
   }

   static deleteProject(projectName){
    
    Storage.deleteProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
   }

   static clearProjects(){
    const projectsContainer = document.querySelector('.js-lists');
    projectsContainer.innerHTML=``;
   }

   static handleMainProjBtns(){
    const openProjModal = document.querySelector('.open-project-modal');
    const closeProjModal = document.querySelector('.close-project-modal');
    const addProjBtn = document.querySelector('.add-project');
    const deleteProjectBtns = document.querySelectorAll('.delete-project')
      
    openProjModal.addEventListener('click', () => {
        UI.clearProjectModalInput();
        UI.openProjectModal();
     } )
    closeProjModal.addEventListener('click', (e) =>{
        e.preventDefault();
        UI.clearProjectModalInput();
        UI.closeProjectModal();
    })

    addProjBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        UI.addProject();
    })

    deleteProjectBtns.forEach((button) => 
        button.addEventListener('click', (e) => {
        let projectName = e.currentTarget.parentElement.firstElementChild.innerHTML;
        UI.deleteProject(projectName);
    }))
    }

   static openProjectModal(){
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display = "block"
        openProjModal.style.display = "none"
   }

   static closeProjectModal(){
    const projectModal = document.querySelector('.project-modal');
    const openProjModal = document.querySelector('.open-project-modal');
        projectModal.style.display ="none"
        openProjModal.style.display ="block"
   }
}