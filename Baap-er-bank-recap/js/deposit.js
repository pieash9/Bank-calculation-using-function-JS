// step 1 add event listener to the deposit button
//step 2 get deposit amount from deposit input field
// step 2.5 make sure to convert string to number type
//step 3 clear the deposit input field after getting the value
//step 4 get the previous deposit total
//step 5 calculate deposit total and set the deposit total
//step 6 get current balance
//step 7 calculate the new balance and set it to the balance element

// 1
document.getElementById('btn-deposit').addEventListener('click',function(){
//2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //3
    depositField.value = '';
    //4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =  depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    //6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    //7
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})