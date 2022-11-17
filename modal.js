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

const getPrenom = () => {
  const PrenomValue = document.getElementById("first").value;
  const errorPrenom = document.querySelector("#prenom-error");
  const borderPrenom = document.querySelector(".inpPrenom");

  if (PrenomValue === "") {
    borderPrenom.style.border = "0.8px outset red";
    errorPrenom.textContent = "Veuillez renseigner ce champ";
    return false;
    
  } if (PrenomValue.length < 2) {
    errorPrenom.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
  borderPrenom.style.border = "0.8px outset #ccc";
  errorPrenom.textContent = "";
  return true;
}

// lastName + validation

const getNom = () => {
  const NomValue = document.getElementById("last").value;
  const errorNom = document.querySelector("#nom-error");
  const borderNom = document.querySelector(".inpNom");

  if (NomValue === "") {
    borderNom.style.border = "0.8px outset red";
    errorNom.textContent = "Veuillez renseigner ce champ";
    return false;
  }
  if (NomValue.length < 2) {
    borderNom.style.border = "0.8px outset red";
    errorNom.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
    borderNom.style.border = "0.8px outset #ccc";
    errorNom.textContent = "";
    return true;
}

const getEmail = () => {
  const EmailValue = document.getElementById("email").value;
  const errorEmail = document.querySelector("#email-error");
  const borderEmail = document.querySelector(".inpEmail");

  if (EmailValue.length < 2) {
    borderEmail.style.border = "0.8px outset red";
    errorEmail.textContent = "Veuillez rentrer une adresse mail valide";
    return false;
  }
  if (EmailValue.value === "") {
    errorEmail.textContent = "";
    return false;
  }
  borderEmail.style.border = "0.8px outset #ccc";
  errorEmail.textContent = "";
  return true;
}

const getLimitYears = () => {
  const NowDate = new Date;
  NowDate.setFullYear(NowDate.getFullYear()-16)
  const LimitYears = NowDate.getFullYear();

  console.log("Date Lmit : " + LimitYears);
  return LimitYears;
}

const LimitYearsResult = getLimitYears();

const getDate = () => {
  const DATE = document.getElementById("birthdate").value;
  const errorDATE = document.querySelector("#date-error");
  const borderDATE = document.querySelector(".inpDATE");

  if (DATE === "") {
    borderDATE.style.border = "0.8px outset red";
    errorDATE.textContent="Veuillez renseigner ce champ";
    return false;
  }
  else if ((DATE.substr(0, 4)) > LimitYearsResult) {
    borderDATE.style.border = "0.8px outset red";
    errorDATE.textContent="Vous devez avoir au moins 16 ans pour pouvoir vous inscrire";
    return false;
  }
    borderDATE.style.border = "0.8px outset #ccc";
    errorDATE.textContent = "";
    return true;  
}

const getQuantite = () => {
  const QtnValue = document.getElementById("last").value;
  const errorQtn = document.querySelector("#qtn-error");
  const borderQtn = document.querySelector(".inpQtn");

  if (QtnValue === "") {
    borderQtn.style.border = "0.8px outset red";
    errorQtn.textContent = "Veuillez renseigner ce champ"
    return false;
  } else {
    borderQtn.style.border = "0.8px outset #ccc";
    errorQtn.textContent = "";
    return true;  
  }
}

const getLocation = () => {
  const LocationValue = document.getElementById("checkbox-input").checked;
  if (LocationValue === "") {
    console.log("test");
  }
}

const validatedFormContent = () => {
  modalbg.style.display = "none";
};

// SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const CheckPrenom = getPrenom();
  const CheckNom = getNom();
  const CheckEmail = getEmail();
  const CheckDate = getDate();
  const CheckQuantite = getQuantite();
  const CheckLocation = getLocation();

  if (CheckPrenom === true && CheckNom === true && CheckEmail === true && CheckDate === true) {
    validatedFormContent();
    form.style.display = "none";
  }
});
