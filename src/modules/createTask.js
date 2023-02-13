//make a new task 

export default class Task { 
    constructor(title,description,priority,dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setDate(dueDate){
        this.dueDate = dueDate;
    }

    getDate(){
        return this.dueDate;
    }

    setPriotity(priority){
        this.priority = priority;
    }

    getPriority(){
        return this.priority;
    }

    getDateFormatted(){
        const day = this.dueDate.split('/')[0];
        const month = this.dueDate.split('/')[1];
        const year = this.dueDate.split('/')[2];
        return `${day}/${month}/${year}`;
    }
}
