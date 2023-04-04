const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");

const toDos = [];

function saveTodos(){
    localStorage.setItem("todos",toDos)
}

function delTodo(event){
    const li = event.target.parentElement;
    li.remove();
}
function paintTodo(newTodo){
    const liItem = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btnDel = document.createElement("button");
    btnDel.innerText = "X"
    btnDel.addEventListener("click",delTodo)
    liItem.appendChild(span);
    liItem.appendChild(btnDel);
    todoList.appendChild(liItem);
}


function handelTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo)
    paintTodo(newTodo);
}
todoForm.addEventListener("submit",handelTodoSubmit)
saveTodos()