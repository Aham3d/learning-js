const todoList = ['make dinner', 'wash dishes'];

function renderTodoList() {
  let todoListHTML = '';

  for(let i = 0 ; i < todoList.length; i++) {
    const todo = todoList[i]; 
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  let todoListEL = document.querySelector('.todo-list'); 
  todoListEL.innerHTML = todoListHTML; 
}

renderTodoList();

function add() {
  const inputEl = document.querySelector('.input');

  const inputValue = inputEl.value;
  // console.log(inputValue);

  todoList.push(inputValue);
  console.log(todoList);

  inputEl.value = '';
  
  renderTodoList();
}