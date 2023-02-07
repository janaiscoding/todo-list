import Project from "./createProject";
import Task from "./createTask";

export default class List {
    constructor(){
        this.projects = []
        this.projects.push(new Project('Today'))
        this.projects.push(new Project('This Week'))
        this.projects.push(new Project('This Month'))
    }
}