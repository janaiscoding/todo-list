
let PROJECTS = [];
let PROJECT_COUNTER = 0;
let TASK_COUNTER = 0;


export default class Task { 
    constructor(title,description,priority,dueDate, projectID, taskID) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.taskID = taskID;
        this.projectID = projectID;
    }
    addTask(title,description,priority,dueDate, projectID)  {
        let newTask = new Task(title,description,priority,dueDate, projectID,TASK_COUNTER);
        let project = PROJECTS.find(project => project.id === projectID);
    }
}
