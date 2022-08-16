// deposit amount
const depositBtn = document.querySelector("#btn-deposit");
const depositField = document.querySelector("#deposit-field");
const depositTotalNumber = document.querySelector("#deposit-total");
const totalBalance = document.querySelector("#total-balance");
depositBtn.addEventListener("click", function () {
  const newDepositAmount = parseFloat(depositField.value);
  const previousDepositNumber = parseFloat(depositTotalNumber.innerText);

  const totalDepositAmount = previousDepositNumber + newDepositAmount;
  depositTotalNumber.innerText = totalDepositAmount;

  const totalBalanceAmount = parseFloat(totalBalance.innerText);
  totalBalance.innerText = newDepositAmount + totalBalanceAmount;

  depositField.value = "";
});
