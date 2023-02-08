//make the list -> contains projects which contain tasks

import Project from "./createProject";
import Task from "./createTask";

export default class List {
    constructor(){
        this.projects = []
        this.projects.push(new Project('Inbox'))
        this.projects.push(new Project('Today'))
        this.projects.push(new Project('This Week'))
    }

    setProjects(projects){
        this.projects = projects;
    }
    
    getProjects(){
        return this.projects;
    }

    getProject(projectName){
        return this.projects.find((project) => project.getName() === projectName)
    }

}