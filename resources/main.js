document.addEventListener('DOMContentLoaded', function() {

/* Frase ... */
const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:60
});

typewriter
.typeString('Veni a conocer el Poncho!')
.pauseFor(400)
.start();



// boton   subir al inicio backtop

let mybutton = document.getElementById("backtop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

const topBtn = document.getElementById("backtop");

topBtn.addEventListener('click', function() {
    topFunction();
});



// validacion de form de contacto
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


//api WeatherApi
const fetchWeatherData = () => {
  const url = `https://api.weatherapi.com/v1/current.json?key=ee411c5bd3494519a75200638240406&q=Catamarca&aqi=no&lang=es`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const currentTemp = data.current.temp_c;
      const weatherDescription = data.current.condition.text;

      const temperatureElement = document.getElementById('temperatura');
      temperatureElement.innerHTML = `
        <h2>Temperatura actual: ${currentTemp} °C </h2>
        <p class= "text-primary fs-5" >Descripción: ${weatherDescription}</p>
      `;
    })
    .catch(error => {
      console.error('Error al obtener datos del clima:', error);
    });
};
fetchWeatherData();





// cambio de vista en login
const containerUser = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    containerUser.classList.remove("toggle");
})

btnSignUp.addEventListener("click",()=>{
    containerUser.classList.add("toggle");
})


})



//captura de form
const form = document.querySelector("#contenedor-formulario");
form.addEventListener("submit", async (event)=>{
  event.preventDefault();

  const emailIngresado = event.target.email.value;
  const nombreIngresado = event.target.nombre.value;
  const telefonoIngresado = event.target.telefono.value;

  const url = "http://localhost:8080/contacto"

  const contactoData = {
    email: emailIngresado,
    nombre: nombreIngresado,
    telefono: telefonoIngresado
  }

  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactoData)
  });

  if(response.ok){
    console.log("Mensaje enviado")
  }else{
    console.error("No se puedo enviar el mensaje")
  }

})