const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const userList = document.getElementById("userList");

const resetbtn = document.querySelector("button[type = reset]");
const submitbtn = document.querySelector("button[type = submit]");
const deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";
deletebtn.setAttribute("class", "delete");
const editbtn = document.createElement("button");
editbtn.textContent = "Edit";
editbtn.setAttribute("class", "edit");

//get previously stored data from database
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/9ccc742a0bef465c98da05cddb6ec2c0/appointment"
    )
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        displayLi(response.data[i]);
      }
    })
    .catch((err) => console.log(err));
});

//reset btn funtionality
resetbtn.addEventListener("click", reset);

function reset() {
  userName.value = "";
  email.value = "";
  phone.value = "";
}

//submit btn funtionality
submitbtn.addEventListener("click", submit);

function submit() {
  let userNameVal = userName.value.trim();
  let emailVal = email.value.trim();
  let phoneVal = phone.value.trim();

  if (userNameVal !== "" && emailVal !== "" && phoneVal !== "") {
    const obj = {
      userName: userNameVal,
      email: emailVal,
      phone: phoneVal,
    };

    axios
      .post(
        "https://crudcrud.com/api/9ccc742a0bef465c98da05cddb6ec2c0/appointment",
        obj
      )
      .then((result) => {
        console.log(result);
        displayLi(result.data);
      })
      .catch((err) => console.log(err));

    reset();
  } else {
    alert("Incomplete Form");
  }
}

function displayLi(obj) {
  const li = document.createElement("li");
  li.textContent = `${obj.userName} - ${obj.email} - ${obj.phone}`;
  // console.log(li);

  const deleteButton = deletebtn.cloneNode(true);
  deleteButton.addEventListener("click", () => deleteLi(li, obj));
  const editButton = editbtn.cloneNode(true);
  editButton.addEventListener("click", () => editLi(li, obj));

  li.appendChild(deleteButton);
  li.appendChild(editButton);
  userList.appendChild(li);
}

//delete btn funtionality
function deleteLi(li, obj) {
  axios
    .delete(
      `https://crudcrud.com/api/9ccc742a0bef465c98da05cddb6ec2c0/appointment/${obj._id}`
    )
    .then((result) => {
      console.log(result);
      userList.removeChild(li);
      console.log("User removed");
    })
    .catch((err) => console.log(err));
}

//edit btn funtionality
function editLi(li, obj) {
  let userNameVal = userName.value.trim();
  let emailVal = email.value.trim();
  let phoneVal = phone.value.trim();

  if (userNameVal !== "" && emailVal !== "" && phoneVal !== "") {
    const obj = {
      userName: userNameVal,
      email: emailVal,
      phone: phoneVal,
    };

    axios
      .put(
        `https://crudcrud.com/api/9ccc742a0bef465c98da05cddb6ec2c0/appointment/${obj._id}`,
        obj
      )
      .then((result) => {
        console.log(result);
        userList.removeChild(li);
        displayLi(result.data);
        console.log("User updated");
      })
      .catch((err) => console.log(err));

    reset();
  } else {
    alert("Fill the details in form");
  }
}
