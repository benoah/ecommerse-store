import displayMessage from "../components/displayMessage.js";
import { login } from "../utils/user.js";

(() => {


  const form = document.querySelector("form");
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");

  function submitForm(event) {
    event.preventDefault();

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
      return displayMessage("warning", "Invalid values", ".message-container");
    }

    login(usernameValue, passwordValue);
  }

  form.addEventListener("submit", submitForm);
})();