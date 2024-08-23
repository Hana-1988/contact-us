
let $ = document;
let contactForm = $.getElementById("contactForm");

function formSubmit(event) {
  event.preventDefault();

  let name = $.getElementById("name").value;
  let email = $.getElementById("email").value;
  let subject = $.getElementById("subject").value;
  let message = $.getElementById("message").value;
  let formMessage = $.getElementById("formMessage");

  if (name === "" || email === "" || subject === "" || message === "") {
    formMessage.innerText = "Please fill in all required fields.";
    formMessage.style.color = "red";
    return;
  }
  let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailPattern.test(email)) {
    formMessage.innerText = "Please enter the email in the correct format.";
    formMessage.style.color = "red";
    return;
  }
  formMessage.innerText = "The form has been submitted successfully";
  formMessage.style.color = "green";
}

contactForm.addEventListener("submit", formSubmit);
