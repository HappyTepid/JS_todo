
//Set the scene, init some variables for the field  button

var textField = document.getElementsByName('new_item')[0];
var createTodoButton = document.getElementById('create_todo');


//Get value of textField on keyup
textField.onkeyup = function(){
  textFieldValue = textField.value;
};


//Function to append textFieldValue into location
function insertTodo() {
  var li = document.createElement("li");
  var content = document.createTextNode(textFieldValue);
  li.appendChild(content);

  var parentElement = document.getElementById('item_list');
  parentElement.appendChild(li);
}

//Action should only be taken upon clicking the button
createTodoButton.onclick = function() {
  insertTodo();
};
