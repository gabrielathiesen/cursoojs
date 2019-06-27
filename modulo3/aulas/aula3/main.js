var listElement =  document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var ButtonElement = document.querySelector("#app button");

var todos = [
    "fazer cafe",
    "estudar",
    "acessar comunidade"
];

function renderTodos(){
    for (todo of todos){
       var todoElement = document.createElement("li");
       var todoText = document.createTextNode(todo);
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
    }
}

renderTodos();