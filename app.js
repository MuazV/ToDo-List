const input = document.querySelector("#input-area");
const tasks = document.querySelector(".tasks");
const Added = document.querySelector("#Added");

let todos = JSON.parse(localStorage.getItem("todos"));
if(todos == null){
    localStorage.setItem("todos", JSON.stringify([]));
}
else {
    todos.forEach((todoObject) => 
    addHTML(todoObject)
    )
}

function addHTML(todoObject) {
    const task_eleman = document.createElement("div");
    task_eleman.classList.add("task");

    const todo_cb = document.createElement("input");
    todo_cb.classList.add("todo_cb");
    todo_cb.type = "checkbox";

    const task_para = document.createElement("p");
    task_para.classList.add("text");
    task_para.innerText = todoObject.content;
  

    const task_button = document.createElement("button");
    task_button.classList.add("sil");
    task_button.innerText = "X";

    task_eleman.append(todo_cb);
    task_eleman.append(task_para);
    task_eleman.append(task_button);

    tasks.append(task_eleman);
}


Added.addEventListener("click", (e) => {

    e.preventDefault();
    const inputtext = input.value
    if(!inputtext){
        alert("Please fill this field");
        return;
    }else {
        const todoObject = {
        id: new Date().getTime(),
        isDone: false,
        content: inputtext 
    }
let todos = JSON.parse(localStorage.getItem("todos"));
todos.push(todoObject);

localStorage.setItem("todos", JSON.stringify(todos))

    }

addHTML(todoObject)

    input.value = ""

    task_button.addEventListener("click", () => {
        tasks.removeChild(task_eleman)
    })
    })

window.addEventListener("load", () => {
    input.focus();
})

