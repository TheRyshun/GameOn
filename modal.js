function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function onSubmit() {
  console.log("test");
}

function closeModal() {
  modalbg.style.display = "none";
  console.log("Display None");
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("Display Hidden");
}

const form = document.querySelector("form");

// SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // INPUT FIELDS
  let prenom = document.getElementById("first");
  let nom = document.getElementById("last");
  let email = document.getElementById("email");
  let date = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  let allLocations = document.querySelectorAll(".checkbox-input[type='radio']");
  let conditions = document.querySelector(".conditions");

  // ERROR MESSAGES
  const prenomError = document.querySelector(".prenom-error");
  const nomError = document.querySelector(".nom-error");
  const emailError = document.querySelector(".email-error");
  const dateError = document.querySelector(".date-error");
  const quantityError = document.querySelector(".quantity-error");
  const locationError = document.querySelector(".location-error");
  const conditionsError = document.querySelector(".conditions-error");

  // Prénom
  const getPrenom = () => {
    let resultprenom;
    if (prenom.value === "") {
      prenomError.textContent = "Veuillez renseigner ce champ !";
      prenom.focus();
      resultprenom = false;
    } else if (prenom.value.length < 2) {
      prenom.focus();
      resultprenom = false;
    } else {
      prenomError.textContent = "";
      resultprenom = true;
    }
    return resultprenom;
  };
  const PrenomResult = getPrenom();

  // Nom
  const getNom = () => {
    let resultNom;
    if (nom.value === "") {
      nomError.textContent = "Veuillez renseigner ce champ !";
      nom.focus();
      resultNom = false;
    } else if (Nom.value.length < 2) {
      nom.focus();
      resultNom = false;
    } else {
      nomError.textContent = "";
      resultNom = true;
    }
    return resultNom;
  };
  const NomResult = getNom();

  function validatedFormContent() {
    modalbg.style.display = "none";
  }

  if (PrenomResult && NomResult) {
    validatedFormContent();
  }
});
