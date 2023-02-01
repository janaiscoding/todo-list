let toDoArray = [];

export function createToDo(title, description, dueDate, priority, checkList){
    toDoArray.push({title, description, dueDate, priority, checkList});
    console.log(toDoArray);
    console.log({title, description, dueDate, priority, checkList});
    return {title, description, dueDate, priority, checkList};
}