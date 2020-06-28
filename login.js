function change_login() {
  document.querySelector('.container_forms').className = "container_forms container_forms_active_login";  
document.querySelector('.container_form_login').style.display = "block";
document.querySelector('.container_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.container_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.container_form_sign_up').style.display = "none";
},200);  
  }

function change_sign_up() {
  document.querySelector('.container_forms').className = "container_forms container_forms_active_sign_up";
  document.querySelector('.container_form_sign_up').style.display = "block";
document.querySelector('.container_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.container_form_sign_up').style.opacity = "1";
},200);  

setTimeout(function(){   document.querySelector('.container_form_login').style.display = "none";
},400);  


}    



function hide_login_sign_up() {

document.querySelector('.container_forms').className = "container_forms";  
document.querySelector('.container_form_sign_up').style.opacity = "0";               
document.querySelector('.container_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.container_form_sign_up').style.display = "none";
document.querySelector('.container_form_login').style.display = "none";
},500);  
  
  }


function alertFunction1() {
  alert("Welcome to UTOPIA!");
}

function alertFunction2() {
  alert("You have created an account! Now please login.")
}
