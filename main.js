let loginbtn = document.getElementById("loginbtn");

const username = "1";
const password = "1";

loginbtn.addEventListener("click", (event) => {
  event.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (username === user && password === pass) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
});
