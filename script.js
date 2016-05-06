
//Set the scene, init some variables for the field  button

var textField = document.getElementsByName('new_item')[0];
var createTodoButton = document.getElementById('create_todo');


//Get value of textField on keyup
textField.onkeyup = function(){
  textFieldValue = textField.value;
};


//Action should only be taken upon clicking the button
createTodoButton.onclick = function() {
  alert(textFieldValue);
};
