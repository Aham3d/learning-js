const todoList = [];

function add() {
  const inputEl = document.querySelector('.input');

  const inputValue = inputEl.value;
  // console.log(inputValue);

  todoList.push(inputValue);
  console.log(todoList);

  inputEl = '';  
  
}