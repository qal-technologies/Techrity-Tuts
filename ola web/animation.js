// for the loading intro fade
window.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector("div.upper");
  let loginSection = document.querySelector("section.login");
  let regSection = document.querySelector("section.reg");
  let signUpBtn = document.querySelector("div.lower p.sign-up");
  let signInBtn = document.querySelector("div.lower p.sign-in");
  let loginBtn = document.querySelector("button#login");

  // intro fade in
  header.classList.add("fadeIn");
  loginSection.classList.add("fadeIn");
  regSection.classList.add("none");

  // sign up/ registration page
  signUpBtn.onclick = () => {
    loginSection.classList.add("fadeOut");

    setTimeout(() => {
      loginSection.classList.add("none");
      regSection.classList.remove("fadeOut");

      regSection.classList.add("fadeIn");
      regSection.classList.toggle("none");
    }, 2000);
  };

  // sign in / login page
  signInBtn.onclick = () => {
    regSection.classList.add("fadeOut");

    setTimeout(() => {
      regSection.classList.add("none");
      loginSection.classList.remove("fadeOut");

      loginSection.classList.add("fadeIn");
      loginSection.classList.toggle("none");
    }, 2000);
  };
});
