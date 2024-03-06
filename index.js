const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const resetbtn = document.querySelector("button[type = reset]");
const submitbtn = document.querySelector("button[type = submit]");
const deletebtn = document.createElement("button");
deletebtn.textContent = "Delete";
deletebtn.setAttribute("class", "delete");
const editbtn = document.createElement("button");
editbtn.textContent = "Edit";
editbtn.setAttribute("class", "edit");

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

    displayLi(obj);

    axios
      .post(
        "https://crudcrud.com/api/9ccc742a0bef465c98da05cddb6ec2c0/appointment",
        obj
      )
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
}

function displayLi(obj) {
  const li = document.createElement("li");
  li.textContent = `${obj.userName} - ${obj.email} - ${obj.phone}`;
  console.log(li);
  li.appendChild(deletebtn.cloneNode(true));
  li.appendChild(editbtn.cloneNode(true));
  document.getElementById("userList").appendChild(li);
}
