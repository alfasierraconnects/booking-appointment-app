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

        //Add li with Delete btn & Edit Btn-----------------------------------------------------------------------------------
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.id = "delete-btn";

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.id = "edit-btn";

        const userList = document.getElementById("userList");
        const newli = document.createElement("li");

        newli.innerHTML = `${myObj.Username} - ${myObj.Email} - ${myObj.Phone}`;
        newli.appendChild(deletebtn);
        newli.appendChild(editbtn);
        userList.appendChild(newli);

        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        //Delete btn Functionality---------------------------------------------------------------------------------------------
        document
          .getElementById("delete-btn")
          .addEventListener("click", deleteItem);
        function deleteItem(event) {
          localStorage.removeItem(username);
          event.target.parentNode.remove();
        }

        //Edit btn Functionality-----------------------------------------------------------------------------------------------
        document.getElementById("edit-btn").addEventListener("click", editItem);
        function editItem(event) {
          document.getElementById("username").value = username;
          document.getElementById("email").value = email;
          document.getElementById("phone").value = phone;
          localStorage.removeItem(username);
          event.target.parentNode.remove();
        }
      }
    });
});
