document.getElementById('login-btn').addEventListener('click',function(){
    
    const usernameInput=document.getElementById('input-username').value;
    //2-get the pasword 
    const passwordInput=document.getElementById('input-password').value;
    console.log(passwordInput)
    //3-match pin & username
    if(usernameInput=="admin" && passwordInput=="admin123"){
        //3-1-turue::>>homepage
        alert('Login Sucsess');

        window.location.assign('./home.html');
    }
    else{
        //3-2-flase::>>alart & return
        alert('Login Faild');
        return;
    }


})