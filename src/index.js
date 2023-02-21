import UI from "./modules/DOM";
document.addEventListener('DOMContentLoaded', UI.loadHomepage)
import Storage from "./modules/Storage";
import Project from "./modules/createProject";
Storage.addProject(new Project('Inbox'))
console.log(Storage.getTodoList())
