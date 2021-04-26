const loginIndiv = document.querySelector(".form-box-1");
const loginComp = document.querySelector(".form-box-2");
const indivButton = document.querySelector("#indiv-button");
const compButton = document.querySelector("#comp-button");

indivButton.addEventListener("click", () => {
  displayIndivForm();
});

compButton.addEventListener("click", () => {
  displayCompForm(); 
});

const displayIndivForm = () => {
  if(loginComp.classList.contains("show") === true) {
    loginComp.classList.remove("show");
  }
  loginIndiv.classList.add("show");
}

const displayCompForm = () => {
  if(loginIndiv.classList.contains("show") === true) {
    loginIndiv.classList.remove("show");
  }
  loginComp.classList.add("show");
}