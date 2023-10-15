document.getElementById('btn-clicked').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if(email === 'mufassir@gmail.com' && pass === '1234'){
        window.location.href = 'bank.html'
    }
    else{
        alert('This is not valid');
    }
})