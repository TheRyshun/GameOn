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
const body = document.querySelector(".bground");
const closeValidateBtn = document.querySelectorAll(".close-btn");
const openvalidate = document.querySelector(".validate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  openvalidate.style.display = "none";
  console.log("Display None");
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  console.log("Display Hidden");
}

const form = document.querySelector("form");


///////////////////////////////


// Prénom //

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


///////////////////////////////


// Nom //

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

///////////////////////////////


// E-mail //

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


///////////////////////////////


// Date de naissance //

const getLimitYears = () => {
  const NowDate = new Date;
  NowDate.setFullYear(NowDate.getFullYear()-16)
  const LimitYears = NowDate.getFullYear();
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

///////////////////////////////


// Quantité //

let ValidateQtn;
form.addEventListener('input', function() {
  const QtnValue = document.getElementById("quantity").value;
  const errorQtn = document.querySelector("#qtn-error");
  const borderQtn = document.querySelector(".inpQtn");

  if (QtnValue === "") {
    borderQtn.style.border = "0.8px outset red";
    errorQtn.textContent = "Veuillez renseigner ce champ";
    ValidateQtn = false;
  } else {
    borderQtn.style.border = "0.8px outset #ccc";
    errorQtn.textContent = "";
    ValidateQtn = true;  
  }
});


///////////////////////////////
form.addEventListener('input', function() {
  const locations = document.getElementsByClassName("location");
  const errorLoc = document.querySelector("#loc-error");

  for (let i = 0; i < locations.length; i++) {
    if (!locations[i].checked) {
      errorLoc.textContent = "Veuillez sélectionner une ville";
      console.log("test");
      return true;
    } else {
      errorLoc.textContent = "";
      return false;
    }
}
})



///////////////////////////////


// Conditions d'utilisation //

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


///////////////////////////////


// Evenement //
let ValidateEvent;
form.addEventListener('change', function() {
  const event = document.querySelector(".event");

  if (!event.checked) {
    ValidateEvent = false;
} else {
  ValidateEvent = true;
}
});


///////////////////////////////


// Close Form //

closeValidateBtn.forEach((btn) => btn.addEventListener("click", closeValidate));

function closeValidate() {
  body.style.display = "none";
  openvalidate.style.display = "none";
}

const validateContent = () => {
  form.style.display = "none";
  openvalidate.style.display = "flex";
};

///////////////////////////////


// Soumettre //

form.addEventListener("submit", (e) => {
  
  e.preventDefault();

  if (ValidatePrenom == true/* && ValidateNom == true && ValidateEmail == true && ValidateQtn == true*/) {
    validateContent();
  }
});
