class ToDo { 
    constructor(
        title = 'Unknown',
        description = 'Unknown',
        dueDate = 'Unknown',
        priority = 'Unknown'
    ){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

class Project {
    constructor (){
        this.projects = []
    }
}
