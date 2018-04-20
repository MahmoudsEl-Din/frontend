
function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("Please enter your username");

    } else if (pass.value  == "") {

        alert("Please enter your password");

    } else if(username.value =="admin" && pass.value=="123456"){

        window.location.href="/search";

    } else {

        alert("Please enter your correct username and password")

    }
}
function SignUp(){
    window.location.href="/signup";

};
function SignIn(){
    window.location.href="/";

};
function success(){
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var user = document.getElementById("email");

    if(pwd.value==repwd.value&&user.value!=""){
        alert("Successful!");
        window.location.href="/";
    }
    else{
        alert("Please check your password!");
    }


};
