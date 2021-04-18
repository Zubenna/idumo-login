const signUpIndiv = document.querySelector(".indiv-sign-up");
const signUpComp = document.querySelector(".comp-sign-up");
const indivButton = document.querySelector("#indiv-button");
const compButton = document.querySelector("#comp-button");

indivButton.addEventListener("click", () => {
  displayIndivForm();
});

compButton.addEventListener("click", () => {
  displayCompForm(); 
});

const displayIndivForm = () => {
  if(signUpComp.classList.contains("show") === true) {
    signUpComp.classList.remove("show");
  }
  signUpIndiv.classList.add("show");
}

const displayCompForm = () => {
  if(signUpIndiv.classList.contains("show") === true) {
    signUpIndiv.classList.remove("show");
  }
  signUpComp.classList.add("show");
}