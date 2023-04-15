const addTodo = document.querySelector("form");
const todoList = document.querySelector("#todo-item");

//AddTodoList
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addTodo.value === "") {
    alert("Ma'lumot mavjud emas!");
  } else {
    let li = document.createElement("li");
    li.innerHTML =
      `<input class="check" type="checkbox">` +
      addTodo.value +
      `<i class="fa-solid fa-trash"></i>`;
    todoList.appendChild(li);
  }
  addTodo.reset();
  saveTodo();
});


//Checked and Delete
todoList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "INPUT") {
      e.target.parentElement.classList.toggle("check");
      saveTodo();
    } else if (e.target.tagName === "I") {
      e.target.parentElement.remove();
      saveTodo();
    }
  },
  false
);

//AddLocalStorage
function saveTodo() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTodo() {
  todoList.innerHTML = localStorage.getItem("data");
}
showTodo();
