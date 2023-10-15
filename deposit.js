document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositValueStr = depositField.value;
    const newDepositValue = parseFloat(newDepositValueStr);
    depositField.value = '';
    if(isNaN(newDepositValue)){
        alert('Please Enter A valid Number');
        return
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStr = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStr)
    const totalDeposit = previousDepositTotal + newDepositValue;

    depositTotalElement.innerText = totalDeposit ;


    
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalStr = balanceTotal.innerText;
    const balanceTotalFloat = parseFloat(balanceTotalStr);

    const totalBalance = balanceTotalFloat + newDepositValue;


    balanceTotal.innerText = totalBalance;



    
}
)