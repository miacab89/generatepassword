/* function writePassword () {
  password= ""
  for (i=0; i< generateLength; i++)
      password += values.charAt(Math.floor(Math.random()* values.length))
  return password
}

var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
var password = "";
var passwordLength = 125; */


/* function generatePassword() {
  var text = "";
  var len = document.getElementById("num").value;
  var char_list = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+?") ;

  for (var i = 0; i < len.text; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }

  document.getElementById("result").innerHTML = text; 
  return text;

}
*/


/* function generatePassword () {

  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_++?";
  var length = "";
  var password = "password";



  for (var i = 0; i <= length.values; ++i) 
    password = document.getElementById("values"); } */

------------------------------------------------------------------
    
 function randomPassword(length) {
  var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
  var pass = "";
    for (var i = 0; i < length; i++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
     }
      return pass;
  }

 javascript:(
    function(){
        prompt('Here is your shiny new password:', 
            Math.random().toString(36).slice(2) + 
            Math.random().toString(36).slice(2)
);
    }
)(); 







