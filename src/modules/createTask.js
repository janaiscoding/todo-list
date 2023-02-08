export default class Task { 
    constructor(
        title = 'Default Title',
        description ='Default Description',
        dueDate = 'No Date Selected',
        priority = [Low, Medium, High]) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
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
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`;
    }
}
