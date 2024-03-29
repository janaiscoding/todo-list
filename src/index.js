import UI from "./modules/UI";
import Storage from "./modules/Storage";
import Project from "./modules/createProject";
import Task from "./modules/createTask";
import './style.css';

//Full app functionability 
document.addEventListener('DOMContentLoaded', UI.loadHomepage)

//Default Content
Storage.addProject(new Project('Inbox'))
Storage.addProject(new Project('Workout'))
Storage.addTask('Inbox',new Task('Upgrade this project', 'Learn Firebase', 'High', '2023-03-25'))
Storage.addTask('Inbox',new Task('Clear my room', 'Clothes+Dust', 'Low', '2023-03-20'))
Storage.addTask('Workout',new Task('30 min Cardio', 'Indoor Bike', 'High', '2023-03-20'))
Storage.addTask('Workout',new Task('Stretching', '15 min stretching', 'Low', '2023-03-25'))

//todoapp-ab18a