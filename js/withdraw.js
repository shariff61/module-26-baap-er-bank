// withdraw amount

const withdrawBtn = document.getElementById("btn-withdraw");
const withdrawField = document.getElementById("withdraw-field");
const withdrawTotal = document.getElementById("withdraw-total");
// const totalBalance = document.querySelector("#total-balance");

withdrawBtn.addEventListener("click", function () {
  const newWithdrawField = parseFloat(withdrawField.value);

  withdrawField.value = "";
  /*newWithdrawField e string type lekhle NaN AudioScheduledSourceNode.apply.tai evabe if use korte Hobe...return mane true hole next line gula te jave na*/

  if (isNaN(newWithdrawField)) {
    alert("please provide number");
    return;
  }
  const totalBalanceAmount = parseFloat(totalBalance.innerText);
  // newWithdrawField amount ta beshi hole return kore felbe..
  if (totalBalanceAmount < newWithdrawField) {
    alert("you dont have enough money");
    return;
  }
  //   uporer if er gula false hole egula jeno chole tai last e asche egula
  const withdrawAmountNumber = parseFloat(withdrawTotal.innerText);
  withdrawTotal.innerText = withdrawAmountNumber + newWithdrawField;

  totalBalance.innerText = totalBalanceAmount - newWithdrawField;
});
