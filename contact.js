// Demo form: validate fields locally without transmitting personal information.
const fanForm = document.querySelector("#fan-form");
const formStatus = document.querySelector("#form-status");
fanForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (fanForm.reportValidity()) {
    formStatus.textContent = "Form checked successfully. This is a demo; no information was sent.";
  }
});
fanForm.addEventListener("reset", () => { formStatus.textContent = ""; });
