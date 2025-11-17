const form = document.getElementById("waitlist-form");
const emailInput = document.getElementById("email-input");
const footnote = document.querySelector(".footnote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const email = emailInput.value.trim();
    form.classList.add("is-success");
    footnote.textContent = `Thanks, ${email}. You're on the list.`;

    setTimeout(() => {
      form.classList.remove("is-success");
      footnote.textContent = "No spam. First access when the lights switch on.";
    }, 4000);

    form.reset();
  });
}
