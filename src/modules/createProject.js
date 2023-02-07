export default class Project {
    constructor(projectTitle) {
        this.projectTitle = projectTitle;
        this.tasks = [];
    }
    addTasks(newTask){
        this.tasks.push(newTask);
    }
}