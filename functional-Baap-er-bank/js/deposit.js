

document.getElementById('btn-deposit').addEventListener('click',function(){
/* 
1.get the element by id
2.get the value from the element
3. convert the string value to a number

*/
    const newDepositAmount = getInputFieldById('deposit-field')
    /* 
    1. get previous deposit total by id
    2. 
    */
   const previousDepositTotal = getElementValueById('deposit-total')

   //calculate new deposit total
   const newDepositTotal = previousDepositTotal + newDepositAmount;
    //det deposit total value
    setElementTextValueById('deposit-total',newDepositTotal)

    //get previous balance by using function

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementTextValueById('balance-total',newBalanceTotal)
})
