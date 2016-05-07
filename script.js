
//Set the scene, init some variables for the field  button
var textField = document.getElementsByName('new_item')[0];
var createTodoButton = document.getElementById('create_todo');
var sortButton = document.getElementById('reverse_sort');

//Get value of textField on keyup
textField.onkeyup = function(){
  //alert('HELLO');
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
  var todoCount = document.getElementById('item_list').childElementCount;
  var todoItems = document.getElementById('item_list').children;
  var lastTodo = todoItems[todoCount-1];
  var parentElement = document.getElementById('item_list');
  parentElement.insertBefore(lastTodo, todoItems[0]);
}

//Reverse sort order (oldest first/newest first)
function reverseSort() {
  var todoCount = document.getElementById('item_list').childElementCount;
  var parentElement = document.getElementById('item_list');
  for (i = 0; i < todoCount; i++) {
    var todoItems = document.getElementById('item_list').children;
    var lastTodo = todoItems[todoCount-1];
    parentElement.insertBefore(lastTodo, todoItems[i]);
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
