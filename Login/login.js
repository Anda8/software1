var nam=document.getElementById("name");
var password=document.getElementById('pass')

 function adduser(){
    var users = JSON.parse(localStorage.getItem('users'));

  var user = {
  username:nam.value,
  password :password.value,}

  for (var i=0 ;i<users.length ;i++){
    if (user.username==users[i].nam && user.password==users[i].pass ){
        console.log('true');
    }
    else {
        alert("incorrect password or user name")
    }
    

  }

 }
 