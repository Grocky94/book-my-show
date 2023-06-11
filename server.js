function signBT() {
    alert("working");
    window.location.href = "/clone/emailLogin.html"
}
function reg() {
    alert("working")
    var userName = document.getElementById("Uname").value;
   var useremail = document.getElementById("Uemail").value;
   var userpassword = document.getElementById("Upass").value;

   var UserData = { name: Uname, email: Uemail, password: Upass }

    var dataFromLS = JSON.parse(localStorage.getItem("UserData")) || [];

    dataFromLS.push(UserData)

    localStorage.setItem("UserData", JSON.stringify(dataFromLS));
    
    for (var i= 0; i<dataFromLS.length; i++){
        if(UserData[i].email=== Uemail){

        }
    }

    
}

function forpass() {
    alert("working");

}
