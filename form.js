
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAXEn-oyiIuNmwN2375U2t9gfatZ04baxY",
    authDomain: "fir-javas-2a970.firebaseapp.com",
    projectId: "fir-javas-2a970",
    storageBucket: "fir-javas-2a970.appspot.com",
    messagingSenderId: "779001370196",
    appId: "1:779001370196:web:c4a8d67faf8d85cf96ffc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var auth=firebase.auth();
var loginText = document.querySelector(".title-text .login");
var loginForm = document.querySelector("form.login");
var loginBtn = document.querySelector("label.login");
var signupBtn = document.querySelector("label.signup");
var signupLink = document.querySelector("form .signup-link a");
var firstname = document.forms['signupForm']['firstname'];
var lastname = document.forms['signupForm']['lastname'];
var email = document.forms['signupForm']['email'];
var password = document.forms['signupForm']['password'];
var signup_error = document.querySelector('.signup_error');
firstname.addEventListener('textInput', fstnameVerify);
lastname.addEventListener('textInput', lstnameVerify);
email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passwordVerify);
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function signupValid(){
	if (firstname.value.length <= 2) {
		signup_error.style.display = "block";
		firstname.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Firstname";
		firstname.focus();
		return false;
	}
	if (lastname.value.length <= 2) {
		signup_error.style.display = "block";
		lastname.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Lastname";
		lastname.focus();
		return false;
	}
	if (password.value.length <= 3) {
		signup_error.style.display = "block";
		password.style.border = "1px solid red";
		signup_error.innerText = "Please Fill up Your Password";
		password.focus();
		return false;
	}
	if(email.value.match(mailformat))
{
	signup_error.style.display = "none";
	email.style.border = "1px solid #3498db";
	signup_error.innerText = "";
   return true;
}
else
{
	signup_error.style.display = "block";
	email.style.border = "1px solid red";
	signup_error.innerText = "Please Fill up Your Email";
	email.focus();
return false;
}
}
function fstnameVerify(){
	if (firstname.value.length > 1) {
		signup_error.style.display = "none";
		firstname.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
}
function lstnameVerify(){
	if (lastname.value.length > 1) {
		signup_error.style.display = "none";
		lastname.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
}
function emailVerify(){
	if (email.value.match(mailformat)) {
		signup_error.style.display = "none";
		email.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
}
function passwordVerify(){
	if (password.value.length > 2) {
		signup_error.style.display = "none";
		password.style.border = "1px solid #3498db";
		signup_error.innerText = "";
		return true;
	}
}
signupBtn.onclick = (()=>{
	const promise=auth.createUserWithEmailandPassword (email.value, password.value)
	promise.catch(e =>alert(e.massage));
	alert("signup");
	loginForm.style.marginLeft = "-50%";
	loginText.style.marginLeft = "-50%";
  });
  loginBtn.onclick = (()=>{
	loginForm.style.marginLeft = "0%";
	loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (()=>{
	signupBtn.click();
	return false;
  });