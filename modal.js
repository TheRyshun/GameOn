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
let ValidatePrenom;

form.addEventListener('input', function() {
  const PrenomValue = document.getElementById("first").value;
  const errorPrenom = document.querySelector("#prenom-error");
  const borderPrenom = document.querySelector(".inpPrenom");


  if (PrenomValue === "") {
    borderPrenom.style.border = "0.8px outset red";
    errorPrenom.textContent = "Veuillez renseigner ce champ";
    ValidatePrenom = false;
    
  } if (PrenomValue.length < 2) {
    borderPrenom.style.border = "0.8px outset red";
    errorPrenom.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    ValidatePrenom = false;
  }
  
  if (PrenomValue.length > 2) {
    borderPrenom.style.border = "0.8px outset #ccc";
    errorPrenom.textContent = "";
    ValidatePrenom = true;
  }
});

// lastName + validation

let ValidateNom;
form.addEventListener('input', function() {
  const NomValue = document.getElementById("last").value;
  const errorNom = document.querySelector("#nom-error");
  const borderNom = document.querySelector(".inpNom");

  if (NomValue === "") {
    borderNom.style.border = "0.8px outset red";
    errorNom.textContent = "Veuillez renseigner ce champ";
    ValidateNom = false;
  }
  if (NomValue.length < 2) {
    borderNom.style.border = "0.8px outset red";
    errorNom.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    ValidateNom = false;
  }

  if (NomValue.length > 2) {
    borderNom.style.border = "0.8px outset #ccc";
    errorNom.textContent = "";
    ValidateNom = true;
  }
});

let ValidateEmail;
form.addEventListener('input', function() {
  const EmailValue = document.getElementById("email").value;
  const errorEmail = document.querySelector("#email-error");
  const borderEmail = document.querySelector(".inpEmail");


  if (EmailValue.length < 2) {
    borderEmail.style.border = "0.8px outset red";
    errorEmail.textContent = "Veuillez rentrer une adresse mail valide";
    ValidateEmail = false;
  }
  if (EmailValue.value === "") {
    errorEmail.textContent = "";
    ValidateEmail = false;
  }

  if (EmailValue.length > 2) {
    borderEmail.style.border = "0.8px outset #ccc";
    errorEmail.textContent = "";
    ValidateEmail = true;
  }
});

const getLimitYears = () => {
  const NowDate = new Date;
  NowDate.setFullYear(NowDate.getFullYear()-16)
  const LimitYears = NowDate.getFullYear();

  console.log("Date Lmit : " + LimitYears);
  return LimitYears;
}

const LimitYearsResult = getLimitYears();

form.addEventListener('input', function() {
  const DATE = document.getElementById("birthdate").value;
  const errorDATE = document.querySelector("#date-error");
  const borderDATE = document.querySelector(".inpDATE");

  if (DATE === "") {
    borderDATE.style.border = "0.8px outset red";
    errorDATE.textContent="Vous devez entrer votre date de naissance";
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
});

let ValidateQtn;
form.addEventListener('input', function() {
  const QtnValue = document.getElementById("quantity").value;
  const errorQtn = document.querySelector("#qtn-error");
  const borderQtn = document.querySelector(".inpQtn");

  if (QtnValue === "") {
    borderQtn.style.border = "0.8px outset red";
    errorQtn.textContent = "Veuillez renseigner ce champ"
    ValidateQtn = false;
  } else {
    borderQtn.style.border = "0.8px outset #ccc";
    errorQtn.textContent = "";
    ValidateQtn = true;  
  }
});

const getLocation = () => {
  if (LocationValue === "") {
    console.log("test");
  }
}

let ValidateCond;
form.addEventListener('change', function() {
  const conditions = document.querySelector(".conditions");
  const errorCond = document.querySelector("#cond-error");

  if (!conditions.checked) {
    errorCond.textContent = "Vous devez vérifier que vous acceptez les termes et conditions";
    ValidateCond = false;
} else {
  errorCond.textContent = "";
  ValidateCond = true;
}
});


const validatedFormContent = () => {
  modalbg.style.display = "none";
};

// SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (ValidatePrenom === true) {
    validatedFormContent();
    form.style.display = "none";
  }
});
