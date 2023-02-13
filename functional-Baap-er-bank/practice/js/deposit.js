document.getElementById('deposit-btn').addEventListener('click',function(){
  
  const newDepositAmount = getInputValueById('deposit-field')
  const previousDepositAmount = getElementValueById('deposit-element');
  const currentDeposit = previousDepositAmount + newDepositAmount;
  setElementValue('deposit-element',currentDeposit);

  const previousBalanceAmount = getElementValueById('balance-element');
  const currentBalanceAmount = previousBalanceAmount + newDepositAmount;
  setElementValue('balance-element',currentBalanceAmount)
})