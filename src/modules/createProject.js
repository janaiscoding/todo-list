//make a new project -> put task in it 
export default class Project {
    constructor(title, id) {
        this.title = title;
        this.id = id;
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

    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle)
    }

    contains(taskTitle) {
        return this.tasks.some((task) => task.getTitle() === taskTitle)
    }
    
    addTask(newTask) {
        if (this.tasks.find((task) => task.getTitle() === newTask.Title)) return
        this.tasks.push(newTask)
    }
    
    deleteTask(taskTitle) {
        this.tasks = this.tasks.filter((task) => task.Title !== taskTitle)
    }
    
}
