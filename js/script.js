

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
agree1.onclick = function() {
  modal.style.display = "none";
}
// Validate Form
function validation(){
var name = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
var email = document.getElementById("ename").value;
var subject = document.getElementById("subject").value;
var error_message = document.getElementById("error_message");
var error_message1 = document.getElementById("error_message1");
var error_message2 = document.getElementById("error_message2");
var error_message3 = document.getElementById("error_message3");
var text;
if(name.length < 3){
  text = "! Please enter your name";
  error_message.innerHTML = text;
  error_message.style.display = "block";
  return false;
}
else{
  document.getElementById("error_message").innerHTML = "";
  document.getElementById("error_message").style.display = "none";
}
if(lastname.length < 4){
  text = "! Please enter your lastname.";
  error_message1.innerHTML = text;
  error_message1.style.display = "block";
  return false;
}
else{
  document.getElementById("error_message1").innerHTML = "";
  document.getElementById("error_message1").style.display = "none";
  
}
if(email.indexOf("@") == -1 || email.length < 5){
  text = "! Please enter your email.";
  error_message2.innerHTML = text;
  error_message2.style.display = "block";
  return false;
}
else{
  document.getElementById("error_message2").innerHTML = "";
  document.getElementById("error_message2").style.display = "none";
  
}
if(subject.length < 50){
  text = "! Please enter your subject.";
  error_message3.innerHTML = text;
  error_message3.style.display = "block";
  return false;
}
else{
  document.getElementById("error_message3").innerHTML = "";
  document.getElementById("error_message3").style.display = "none";
  
}
return true;
}

// document.getElementById('submit').disabled = true;
// function required(){
  
//   if(document.getElementById('agree').checked) {
//     modal.style.display = "block";
//     return true; 
//    } 
//     else {
//     alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
//     return false; 
//    }
// }


function checking(){
  if(document.getElementById('agree').checked = true ){
    document.getElementById('agree').checked;
  }else {
    alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
    return false; 
   }
}











