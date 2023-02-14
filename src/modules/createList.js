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
        return this.projects.find((project) => project.getTitle() === projectName)
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getTitle() === projectName)
      }
    
    contains(projectName) {
        return this.projects.some((project) => project.getTitle() === projectName)
      }
    
    addProject(newProject) {
        if (this.projects.find((project) => project.title === newProject.title))
          return
        this.projects.push(newProject)
      }
    
    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
          (project) => project.getTitle() === projectName
        )
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
      }
    
    updateTodayProject() {
        this.getProject('Today').tasks = []
    
        this.projects.forEach((project) => {
          if (project.getTitle() === 'Today' || project.getTitle() === 'This week')
            return
    
          const todayTasks = project.getTasksToday()
          todayTasks.forEach((task) => {
            const taskName = `${task.getTitle()} (${project.getTitle()})`
            this.getProject('Today').addTask(new Task(taskName, task.getDate()))
          })
        })
      }
    
    updateWeekProject() {
        this.getProject('This week').tasks = []
    
        this.projects.forEach((project) => {
          if (project.getTitle() === 'Today' || project.getTitle() === 'This week')
            return
    
          const weekTasks = project.getTasksThisWeek()
          weekTasks.forEach((task) => {
            const taskName = `${task.getTitle()} (${project.getTitle()})`
            this.getProject('This week').addTask(new Task(taskName, task.getDate()))
          })
        })
    
    this.getProject('This week').setTasks(
          this.getProject('This week')
            .getTasks()
            .sort((taskA, taskB) =>
              compareAsc(
                toDate(new Date(taskA.getDateFormatted())),
                toDate(new Date(taskB.getDateFormatted()))
              )
            )
        )
      }
    }