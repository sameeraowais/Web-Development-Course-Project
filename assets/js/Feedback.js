/* (3)
Using javascript for all text, password and textarea boxes of the login and feedback forms, 
change the background color style of the text box that gets the focus event into yellow background color. 
Then it gets the normal white background color when it gets the blur (i.e. unfocused) event. */

function onFocus1() {
  var n = document.getElementById("name"); // Get value of name by id
n.style.backgroundColor = "lightyellow"; // Set yellow background color if name field is the focused
}

function unFocus1() {
  var n = document.getElementById("name"); // Get value of name by id
  n.style.backgroundColor = "white"; // Set white background color if name field is the blur
}

function onFocus2() {
  var e = document.getElementById("email"); // Get value of email by id
  e.style.backgroundColor = "lightyellow"; // Set yellow background color if email field is the focused
}

function unFocus2() {
  var e = document.getElementById("email"); // Get value of email by id
  e.style.backgroundColor = "white"; // Set white background color if email field is the blur
}

function onFocus3() {  
  var s = document.getElementById("subject"); // Get value of message by id
  s.style.backgroundColor = "lightyellow"; // Set yellow background color if message field is the focused
}

function unFocus3() {
  var s = document.getElementById("subject"); // Get value of message by id
  s.style.backgroundColor = "white"; // Set white background color if message field is the blur
}

function onFocus4() {  
  var m = document.getElementById("msg"); // Get value of message by id
  m.style.backgroundColor = "lightyellow"; // Set yellow background color if message field is the focused
}

function unFocus4() {
  var m = document.getElementById("msg"); // Get value of message by id
  m.style.backgroundColor = "white"; // Set white background color if message field is the blur
}

/* (2)
Update the feedback FORM page that includes fields such as: name, email address, subject, list of topics (e.g. Suggestion, Complaint, Idea, Help, …etc.) in a menu selection as well as a textarea field for the message itself. The form’s submit event should be handled with a javascript function handler that validate the form input */

function validateForm() {
	
  // Get values from the form
  var n = document.forms["form"]["name"].value; // Get value of name by id
  var e = document.forms["form"]["email"].value; // Get value of email by id
  var m = document.forms["form"]["msg"].value; // Get value of msg by id
  var err = "";
  
  // Check that the name field and email field and message field are not empty, If are empty so display error
  if (n == "" || n.length < 1 && e == "" || e.length < 1 && m == "" || m.length < 1)  {
    err = "Error! Please make sure to fill in all required fields *"; // Set error message
	document.getElementById("err").style.color = "red"; // Set font color
	document.getElementById("err").innerHTML = err; // Display the error message inner html
    return false; // not submit
  }
  
// Check the email address follows the correct email format, if not so display the error msg
const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(pattern.test(e)){
e=e; //correct email format
}
else
{
err = "The email address invalid";
document.getElementById("err").style.color = "red";
document.getElementById("err").innerHTML = err; 
return false;  // not submit
}


return true; // if not exist any error, go to the next interface


}