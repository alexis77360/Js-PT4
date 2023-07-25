//? https://restcountries.com/v3.1/all

const countriesContainer = document.querySelector(".countries-container");

let countriesData = [];



async function fetchCountries() {

    await fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => {

        countriesData = data;

        console.log(data);
        countriesDisplay();
    });

}


//? Afficher les pays 

function countriesDisplay() {
    countriesContainer.innerHTML = countriesData

    .filter((country) =>
    //? on convertie l'entrée utilisateur en minuscule et on vérifie si elle est inclu dans le nom du pays
    country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))
    
    .map((country) =>
        `
        <div class="card">
            <img src="${country.flags.svg}" alt="drapeau ${country.translations.fra.common}">
            <h2>${country.translations.fra.common}</h2>
            <h4>Capital : ${country.capital}</h4>
            <p>Population : ${country.population.toLocaleString()}</p>

        </div>
   
   `
    ).join("");
}

//? Charger les pays au chargement de la page
window.addEventListener("load", fetchCountries());

//? Rejoue countriesDisplay à chaque fois que l'utilisateur tape une lettre
inputSearch.addEventListener("input", countriesDisplay);