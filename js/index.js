const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");
const btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", function () {
  const email = userEmail.value;
  const password = userPassword.value;
  if (email.endsWith("@gmail.com") && password.length > 6) {
    window.location.href = "bank.html";
  } else {
    alert("please check valid email and password");
  }
});
