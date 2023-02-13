document.getElementById('withdraw-btn').addEventListener('click',function(){
  const newWithdraw =getInputValueById('withdraw-field');
  const previousWithdrawAmount = getElementValueById('withdraw-element');

  const withdrawAmountTotal = previousWithdrawAmount + newWithdraw;
  setElementValue('withdraw-element',withdrawAmountTotal)

  const previousTotalBalance = getElementValueById('balance-element');
  const currentBalanceTotal = previousTotalBalance - newWithdraw;
  setElementValue('balance-element',currentBalanceTotal)
})