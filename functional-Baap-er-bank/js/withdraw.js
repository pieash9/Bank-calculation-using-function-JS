/* 
1. add withdraw button event handler
2. get withdraw amount by using getWithdrawValueById
3. get previous amount by using textelementvaluebyid 
4. calculate new withdraw total and set the value
4.5 set the newWithDrawTotal by setElemnt value function 
5. get previous balance total by using getElementValueById function
6. calculate new balance total
7. set balance total using setElementTextValueById function
*/

document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementTextValueById('withdraw-total',newWithdrawTotal);
    
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementTextValueById('balance-total',newBalanceTotal);
})