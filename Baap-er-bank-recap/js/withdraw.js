/* 
1. Add event handler with the withdraw button
2.get the withdraw field
3. clear the withdraw field after get the value
4. get previous withdraw total
5.calculate total withdraw amount and set to the withdraw total element
6. get previous balance
7. calculate the new balance and set the new balance total
*/
//1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //3
    withdrawField.value = '';
    //4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    //6 
    const balanceElement  = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal; 

})