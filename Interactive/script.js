const form = document.getElementById("interactive-form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  message.textContent = `Hello, ${name}! We have received your email: ${email}.`;
});
