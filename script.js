function register(){
    window.location='./index.html'
}
function login(){
    window.location='./login.html'
}



function reg(){
    const details={
        user:reg_user.value,
        Email:reg_acn.value,
        psw:reg_psw.value
    }
  psw=reg_psw.value;
  if(reg_acn.value==''||reg_psw.value==''||reg_user.value==''){
    alert("Enter full details")
  }
  else{
    if(psw in localStorage){
        alert('Account number is already exist')
        document.getElementById("form1").reset();
      }
      else{
       localStorage.setItem(details.user,JSON.stringify(details));
       window.location='./home.html';
       alert('Registration successfully');
      }
  }
 }


 function log(){
    user=log_user.value;
    psw=log_psw.value;

var username=JSON.parse(localStorage.getItem(user))
   if(user in localStorage){
       if(psw==username.psw){
        window.location='./home.html';
        alert("Login successful");
      
       }
       else{
        alert("Incorrect passward");
        document.getElementById("form2").reset();
       }
   }
   else{
          alert("Invalid Username");
          document.getElementById("form2").reset();
   }    

 }
