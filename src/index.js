import UI from "./modules/DOM";
import Storage from "./modules/Storage";
import Project from "./modules/createProject";
import Task from "./modules/createTask";

//Full app functionability 
document.addEventListener('DOMContentLoaded', UI.loadHomepage)

//Default Content
Storage.addProject(new Project('Inbox'))
Storage.addTask('Inbox',new Task('Clear my room', 'Clothes+Dust', 'High', '2023-03-20'))
Storage.addTask('Inbox',new Task('Weather App', 'Learn working with API', 'High', '2023-03-25'))
