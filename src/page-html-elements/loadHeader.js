export default function makeHeader(){

    const takeHeader = document.querySelector('.header-wrapper');
    
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');
    
    const logoTitle = document.createElement('div');
    logoTitle.innerText = "Your best To-do List";
    logoTitle.classList.add('logo');
    
    const createProject = document.createElement('button');
    createProject.innerText = "New Project";
    createProject.classList.add('project-button');
    
    const createToDoElement = document.createElement('button');
    createToDoElement.innerText = "New To Do";
    createToDoElement.classList.add('to-do-button');
    
    const contactMe = document.createElement('button');
    contactMe.innerText = "Contact me";
    contactMe.classList.add("contact-button");
    
    nav.append(logoTitle, createProject, createToDoElement, contactMe);
    takeHeader.append(nav);
    }
    