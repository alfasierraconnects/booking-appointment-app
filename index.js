document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('button[type="reset"]')
    .addEventListener("click", function () {
      const inputs = document.querySelectorAll(".form input");
      inputs.forEach((el) => {
        el.value = "";
      });
    });

  document
    .querySelector('button[type="submit"]')
    .addEventListener("click", function () {
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      if (username !== "" && email !== "" && phone !== "") {
        console.log(username, email, phone);

        localStorage.setItem("Username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("Phone", phone);
      }
    });
});
