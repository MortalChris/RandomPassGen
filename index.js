var password = document.getElementById("random-el1")
var password1 = document.getElementById("random-el2")
function randomize(){
  var lengthInput = document.getElementById("PassLength").value
  var chars ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = lengthInput
  var password = "";
  for (var i = 1; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}
  var password1 = ""
  for (var i = 1; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password1 += chars.substring(randomNumber, randomNumber +1);
}  
  var password2 = ""
  for (var i = 1; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password2 += chars.substring(randomNumber, randomNumber +1);
}
  var password3 = ""
  for (var i = 1; i <= passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password3 += chars.substring(randomNumber, randomNumber +1);
}

document.getElementById("random-el1").textContent = password;
document.getElementById("random-el2").textContent = password1;
document.getElementById("random-el3").textContent = password2;
document.getElementById("random-el4").textContent = password3;
}
