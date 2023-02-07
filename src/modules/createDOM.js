import Project from "./createProject";
import Task from "./createTask";

function createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
  
    if (content) element.innerText = content;
  
    return element;
  }
  
  function setId() {
    return Math.random().toString().split(".").join("");
  }
  export { createHtmlElement, setId };

  function renderToDo(item){
    const listSpace = document.querySelector('.list-space'); //where i put the card
    const toDoCard = createHtmlElement('div', 'Project.tasks.indexOf(item)');


    const toDoTitle = createHtmlElement('div',[todo-title],item.title);

  }