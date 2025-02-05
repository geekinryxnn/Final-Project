document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const buttons = document.querySelectorAll("button[onclick]");

  navbar.style.display =
    localStorage.getItem("isLoggedIn") === "true" ? "block" : "none";

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      localStorage.setItem("isLoggedIn", "true");
      navbar.style.display = "block";
    })
  );
});
