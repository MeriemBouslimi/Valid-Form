function ValidationForm() {
  event.preventDefault()
  var name = document.forms["formulaire"]["FirstName"];
  var second = document.forms["formulaire"]["secondname"];
  var mail = document.forms["formulaire"]["email"];
  var password = document.forms["formulaire"]["pwd"];

  if (name.value === "") {
    alert("Please enter your name");
    name.style.border = "red solid 0.5px";
  }

  if (second.value === "") {
    alert("Please enter your Second name");
    second.style.border = "red solid 0.5px";
  }

  if (mail.value === "") {
    alert("Please enter your E-Mail Adress");
    mail.style.border = "red solid 0.5px";
  }

  if (password.value === "") {
    alert("Please Choose a Password");
    password.style.border = "red solid 0.5px";

  }

  if(password.length <8 || !password.value.match(/[0-9]/g) || !password.value.match(/[A-Z]/g) || !password.value.match(/[a-z]/g)) {
    alert("Please Choose a correct Password");
    password.style.border = "red solid 0.5px";
  }


}


