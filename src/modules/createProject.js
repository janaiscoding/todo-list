//make a new project -> put task in it 

import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setTasks(tasks){
        this.tasks = tasks;
    }

    getTasks(){
        return this.tasks;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getTitle() === taskName)
    }

    contains(taskName) {
        return this.tasks.some((task) => task.getTitle() === taskName)
    }
    
    addTask(newTask) {
        if (this.tasks.find((task) => task.getTitle() === newTask.name)) return
        this.tasks.push(newTask)
    }
    
    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName)
    }
    
    getTasksToday() {
        return this.tasks.filter((task) => {
          const taskDate = new Date(task.getDateFormatted())
          return isToday(toDate(taskDate))
        })
    }
    
    getTasksThisWeek() {
        return this.tasks.filter((task) => {
          const taskDate = new Date(task.getDateFormatted())
          return isThisWeek(subDays(toDate(taskDate), 1))
        })
    }
    
}
