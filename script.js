const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const PasswordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("loginBtn");
const formBtn = document.getElementById("loginForm");
const loginsection = document.querySelector(".login");
const closeBtn = document.getElementById("close");

function closeForm() {
    form.style.display = "none";
}

formBtn.addEventListener("click", () => {
    form.style.display = "grid";

    loginBtn.addEventListener("click", () => {
        signupBtn.innerHTML = "Log In";
        loginsection.style.display = "none"
    })
    signupBtn.addEventListener("click", () => {
        if (
            PasswordInput.value.length >= 6 && emailInput.value.includes("@") && emailInput.value.includes(".")
        )   {
                PasswordInput.value = "";
                emailInput.value = "";
                form.style.display = "none";
            }
            else{
                alert("Please enter a valid email and password (minimum 6 characters).");
                form.style.display = "grid";
            }
        })
})
closeBtn.onclick = closeForm;