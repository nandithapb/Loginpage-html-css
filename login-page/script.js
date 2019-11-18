function check(){
  //var username=document.getElementById('user');
  var msg=document.getElementById('fe');
  if(this.value.length<5){
    msg.textContent="username must be 5 characters or more";
  }
  else {
    msg.textContent=" ";
  }
}
var username=document.getElementById('user');
username.addEventListener('blur',check);

function setup(){
  var name=document.getElementById('user');
  name.focus();
}
window.addEventListener('load',setup);
