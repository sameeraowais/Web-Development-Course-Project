/* (3)
Using javascript for all text, password and textarea boxes of the login and feedback forms, 
change the background color style of the text box that gets the focus event into yellow background color. 
Then it gets the normal white background color when it gets the blur (i.e. unfocused) event. */

function onFocus1() {
var u = document.getElementById("username"); // Get value of username by id
u.style.backgroundColor = "lightyellow"; // Set yellow background color if username field is the focused
}

function onFocus2() {  
  var p = document.getElementById("psw"); // Get value of password by id
  p.style.backgroundColor = "lightyellow"; // Set yellow background color if password field is the focused
}

function unFocus1() {
  var x = document.getElementById("username"); // Get value of username by id
  x.style.backgroundColor = "white"; // Set white background color if username field is the blur
}

function unFocus2() {
  var p = document.getElementById("psw"); // Get value of password by id
  p.style.backgroundColor = "white"; // Set white background color if password field is the blur
}
/* (1)
Check that the password field is not empty. 
If both the user name and password are not empty, 
the form data is submitted successfully to the server as expected.
If either the user name or password is empty, 
display an error section that dynamically describes the exact error(s)(in red) 
and make sure that the form data is then not submitted to the server.*/

function validateForm() {
  var u = document.forms["form"]["username"].value; // Get value of username by id
  var p = document.forms["form"]["psw"].value; // Get value of password by id
  var strerr = "";
  
  // Check the username and password fields are empty or not, If are empty so display the error msg
  if (u == "" || u == null && p == "" || p == null)  {
	strerr = "Please enter your username and password";	
	document.getElementById("err").style.color = "red";
	document.getElementById("err").innerHTML = strerr; 
    return false; // not submit
  }
  
  // Check the username field is empty or not, If is empty so display the error msg
   if (u == "" || u == null) {
      strerr = "Please enter the your username";
	  	document.getElementById("err").style.color = "red";
	document.getElementById("err").innerHTML = strerr; 
    return false; // not submit
  }
  
  // Check the password field is empty or not, If is empty so display the error msg
   if (p == "" || p == null) {
	strerr = "Please enter a password";
		document.getElementById("err").style.color = "red";
	document.getElementById("err").innerHTML = strerr; 
    return false; // not submit
  }
  
return true; // if not exist any error, go to the next interface

}