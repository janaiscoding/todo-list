export default class Task { 
    constructor(
        title = '',
        description ='',
        dueDate = 0,
        priority = [Low, Medium, High]) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}
