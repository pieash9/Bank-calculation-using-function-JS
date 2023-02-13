/* --------------------------------- deposit -------------------------------- */

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = parseFloat(depositField.value);

  if (isNaN(depositAmount)) {
    alert("please input valid number");
    return;
  }

  depositField.value = "";

  const previousDepositTotalElement =
    document.getElementById("deposit-element");
  const previousDepositTotal = parseFloat(
    previousDepositTotalElement.innerText
  );

  const currentDepositTotal = depositAmount + previousDepositTotal;
  previousDepositTotalElement.innerText = currentDepositTotal;

  const previousBalanceElement = document.getElementById("balance-element");
  const previousBalanceTotal = parseFloat(previousBalanceElement.innerText);

  const currentBalanceTotal = previousBalanceTotal + depositAmount;
  previousBalanceElement.innerText = currentBalanceTotal;
});

/* -------------------------------- withdraw -------------------------------- */
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  if (isNaN(withdrawAmount)) {
    alert("please input valid number");
    return;
  }

  withdrawField.value = "";

  const previousWithdrawElement = document.getElementById("withdraw-element");
  const previousWithdrawTotal = parseFloat(previousWithdrawElement.innerText);

  const previousBalanceElement = document.getElementById("balance-element");
  const previousBalanceTotal = parseFloat(previousBalanceElement.innerText);

  if (withdrawAmount > previousBalanceTotal) {
    alert("Tor Baap er bank e eto taka nai !!!");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + withdrawAmount;
  previousWithdrawElement.innerText = currentWithdrawTotal;

  const currentBalanceTotal = previousBalanceTotal - withdrawAmount;
  previousBalanceElement.innerText = currentBalanceTotal;
});
