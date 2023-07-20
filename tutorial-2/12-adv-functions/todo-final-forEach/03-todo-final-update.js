// using for each
const todoList = [
  {
    name:'make dinner', dueDate: '2022-12-22'
  },
  {
    name: 'wash dishes', dueDate: '2022-12-22'
  }
];

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {

    const {name, dueDate} = todoObject;

    const html = `
      <div>
        ${name}
      </div>
      <div>
        ${dueDate}
      </div> 
      <button onClick="
        todoList.splice(${index}, 1);
        renderTodoList(); 
      "
      class="delete-btn"
      >
        Delete
      </button>

    `;

    todoListHTML += html;
  });

  // updated above wit forEach()
  // for(let i = 0 ; i < todoList.length; i++) {
  //   const todoObject = todoList[i]; 

  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate; 
  //   const {name, dueDate} = todoObject;

  //   const html = `
  //     <div>
  //       ${name}
  //     </div>
  //     <div>
  //       ${dueDate}
  //     </div> 
  //     <button onClick="
  //       todoList.splice(${i}, 1);
  //       renderTodoList(); 
  //     "
  //     class="delete-btn"
  //     >
  //       Delete
  //     </button>

  //   `;

  //   todoListHTML += html;
  // }

  // console.log(todoListHTML);

  let todoListEL = document.querySelector('.todo-list'); 
  todoListEL.innerHTML = todoListHTML; 
}

renderTodoList();

function add() {
  const inputEl = document.querySelector('.input');
  const inputValue = inputEl.value;
  // console.log(inputValue);

  const dateInputEl = document.querySelector('.due-date-input');
  const dueDate = dateInputEl.value;

  todoList.push({
    name: inputValue, 
    dueDate: dueDate
  });
  // console.log(todoList);

  inputEl.value = '';
  
  renderTodoList();
}