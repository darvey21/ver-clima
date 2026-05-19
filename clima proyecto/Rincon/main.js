// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// FORMULARIO

const form = document.getElementById("donorForm");

const message = document.getElementById("message");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const bloodType = document.getElementById("bloodType").value;
    const email = document.getElementById("email").value;

    if(name === "" || bloodType === "" || email === ""){

        message.textContent = "Completa todos los campos";

        message.style.color = "red";

    }else{

        message.textContent = "Registro exitoso";

        message.style.color = "green";

        form.reset();
    }

});