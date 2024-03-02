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
        // console.log(username, email, phone);

        // localStorage.setItem("Username", username);
        // localStorage.setItem("email", email);
        // localStorage.setItem("Phone", phone);

        //using JSON---------------------------------------------------------------------------------------------------------
        const myObj = {
          Username: username,
          Email: email,
          Phone: phone,
        };

        const userDetails = JSON.stringify(myObj);
        console.log(userDetails);
        localStorage.setItem(`${username}`, userDetails);

        //Add li with Delete btn----------------------------------------------------------------------------------------------
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.id = "delete-btn";

        const userList = document.getElementById("userList");
        const newli = document.createElement("li");

        newli.innerHTML = `${myObj.Username} - ${myObj.Email} - ${myObj.Phone}`;
        newli.appendChild(deletebtn);
        userList.appendChild(newli);

        //Delete btn Functionality---------------------------------------------------------------------------------------------
        document
          .getElementById("delete-btn")
          .addEventListener("click", deleteItem);
        function deleteItem(event) {
          localStorage.removeItem(username);
          event.target.parentNode.remove();
        }
      }
    });
});
