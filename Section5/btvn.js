const nameUser = document.getElementById("name");
const emailUser = document.getElementById("email");
localStorage.setItem("Iname", { Name: "nameUser" });
localStorage.setItem("user", { Email: "emailUser" });
let storedName = JSON.parse(localStorage.getItem(Iname));
let storedEmail = JSON.parse(localStorage.getItem(user));
console.log(storedName);
console.log(storedEmail);
