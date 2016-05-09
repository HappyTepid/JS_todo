//Variables:
var textField = document.getElementsByName('new_item')[0];
var createTodoButton = document.getElementById('create_todo');
var sortButton = document.getElementById('reverse_sort');
var todoTally = 0;

//Functions:
//Give those checkboxes a purpose
function armCheckbox() {
  var checkbox = document.getElementById(todoTally.toString());
  checkbox.onclick = function () {
    if (checkbox.checked) {
      checkbox.parentElement.style.textDecoration = 'line-through';
    } else {
      checkbox.parentElement.style.textDecoration = '';
    }
  };
}
//Function to append textFieldValue into location
function insertTodo() {
  var li = document.createElement("li"),
    checkbox = document.createElement("INPUT"),
    checkboxID = todoTally + 1,
    content = document.createTextNode(' ' + textField.value),
    parentElement = document.getElementById('item_list');
  //var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  //var checkboxID = todoTally+1;
  checkbox.setAttribute("id", checkboxID.toString());
  //var content = document.createTextNode(' '+textField.value);
  li.appendChild(checkbox);
  li.appendChild(content);
  //var parentElement = document.getElementById('item_list');
  parentElement.appendChild(li);
  todoTally++;
  armCheckbox();
}
//Re-arrange
function bottomToTop() {
  //Sort most recent at top
  var todo = document.getElementById('item_list'),
    todoCount = todo.childElementCount,
    todoItems = todo.children,
    lastTodo = todoItems[todoCount - 1];
  //var todoCount = todo.childElementCount;
  //var todoItems = todo.children;
  //var lastTodo = todoItems[todoCount-1];
  todo.insertBefore(lastTodo, todoItems[0]);
}
//Reverse sort order (oldest first/newest first)
function reverseSort() {
  var todo = document.getElementById('item_list'),
    todoCount = todo.childElementCount,
    i,
    todoItems,
    lastTodo;
  //var todoCount = todo.childElementCount;
  for (i = 0; i < todoCount; i++) {
    todoItems = todo.children;
    lastTodo = todoItems[todoCount - 1];
    todo.insertBefore(lastTodo, todoItems[i]);
  }
}
function createTodo() {
  //Only create if there's input
  if (textField.value !== '') {
    insertTodo();
    bottomToTop();
    textField.value = '';
  }
}

//Respond to input:
//Act on keyboard enter press
textField.onkeyup = function () {
  if (event.keyCode === 13) {
    event.preventDefault();
    createTodo();
  }
};
//Action should only be taken upon clicking the button
createTodoButton.onclick = function () {
  createTodo();
};
sortButton.onclick = function () {
  reverseSort();
};
