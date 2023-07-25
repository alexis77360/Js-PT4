//? https://restcountries.com/v3.1/all

const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");

let countriesData = [];
let sortMethod = "MaxToMin";



async function fetchCountries() {

    await fetch("https://restcountries.com/v3.1/all").then((res) => res.json()).then((data) => {

        countriesData = data;
        countriesDisplay();
    });

}


//? Afficher les pays 

function countriesDisplay() {
    countriesContainer.innerHTML = countriesData

        //! Filtrer les pays en fonction de l'entrée utilisateur
        .filter((country) =>
            //? on convertie l'entrée utilisateur en minuscule et on vérifie si elle est inclu dans le nom du pays
            country.translations.fra.common.toLowerCase().includes(inputSearch.value.toLowerCase()))


        .sort((a, b) => {
            if (sortMethod === "maxToMin") {
                return b.population - a.population;
            } else if (sortMethod === "minToMax") {
                return a.population - b.population;
            } else if (sortMethod === "alpha") {
                return a.translations.fra.common.localeCompare(b.translations.fra.common);
            }
        })


        //! Afficher le nombre de pays en fonction du range
        .slice(0, inputRange.value)

        //! Afficher les pays
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

//? Modifie le span à chaque fois que l'utilisateur bouge le range
inputRange.addEventListener("input", () => {
    countriesDisplay();
    rangeValue.innerHTML = inputRange.value;
});

//? Change la valeur de sortMethod en fonction du bouton cliqué pour le tri
btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sortMethod = e.target.id;
        countriesDisplay();
    });
});