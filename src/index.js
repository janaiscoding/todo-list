//1. factories or constructors/classes to generate todos
//loading page where you can interact with the window/form asking for todo
//project page where i put all the todos
import { createToDo } from "./todo-element";
import { blankProject } from "./project";

const one = createToDo('test', 'description','tomorrow','very high','false');
console.log(one);
const projectOne = blankProject('')
console.log(projectOne);

