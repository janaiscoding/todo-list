export default class Task { 
    constructor(title,description,priority,dueDate) {
        this.title = title
        this.description = description
        this.priority = priority
        this.dueDate = dueDate
    }

    setTitle(title) {
      this.title = title
    }
    
    getTitle() {
      return this.title
    }
}