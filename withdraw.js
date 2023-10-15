document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueStr = withdrawField.value;
    const withdrawFieldValueFloat = parseFloat(withdrawFieldValueStr);
    withdrawField.value = '';
    if(isNaN(withdrawFieldValueFloat)){
        alert('Please Enter A Valid Number');
        return;
    }
    const withdraw = document.getElementById('withdraw');
    const withdrawTextStr = withdraw.innerText;
    const withdrawTextFloat = parseFloat(withdrawTextStr);
   


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalStr);

    const withdrawBalance = balanceTotalFloat - withdrawFieldValueFloat;
   
    if(withdrawFieldValueFloat > balanceTotalFloat){
        alert('Insufficient Balance');
        return
    }
    const totalWithdraw = withdrawFieldValueFloat + withdrawTextFloat;

    withdraw.innerText = totalWithdraw;
    balanceTotal.innerText = withdrawBalance;

    
    

})