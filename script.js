
//Set the scene, init some variables for the field  button
var textField = document.getElementsByName('new_item')[0];
var createTodoButton = document.getElementById('create_todo');
var sortButton = document.getElementById('reverse_sort');

//Get value of textField on keyup
textField.onkeyup = function(){
  textFieldValue = textField.value;
  if (event.keyCode == 13) {
     event.preventDefault();
     insertTodo();
     bottomToTop();
     textField.value = '';
  }
};

//Function to append textFieldValue into location
function insertTodo() {
  var li = document.createElement("li");
  var content = document.createTextNode(textFieldValue);
  li.appendChild(content);
  var parentElement = document.getElementById('item_list');
  parentElement.appendChild(li);
}

//Re-arrange
function bottomToTop() {
  //Sort most recent at top
  var todo = document.getElementById('item_list');
  var todoCount = todo.childElementCount;
  var todoItems = todo.children;
  var lastTodo = todoItems[todoCount-1];
  todo.insertBefore(lastTodo, todoItems[0]);
}

//Reverse sort order (oldest first/newest first)
function reverseSort() {
  var todo = document.getElementById('item_list');
  var todoCount = todo.childElementCount;
  for (i = 0; i < todoCount; i++) {
    var todoItems = todo.children;
    var lastTodo = todoItems[todoCount-1];
    todo.insertBefore(lastTodo, todoItems[i]);
  }
}

//Action should only be taken upon clicking the button
createTodoButton.onclick = function() {
  insertTodo();
  bottomToTop();
  textField.value = '';
};

sortButton.onclick = function() {
  reverseSort();
};
