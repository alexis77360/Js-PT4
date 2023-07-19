// Définition

// XMLHttpRequest

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.json", true);
req.open("get", "data.txt", true);
req.send();

// Fetch

// fetch("url", "options").then(
//   (response) => {
//     // response
//   }).catch((err) => console.log(err))
// );

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//---------------
// Projet Blagues
//---------------

// L'interface Headers vous permet de créer vos propres objets d'en-têtes via le constructeur Headers

const myHeaders = new Headers();

const init = {
  method: "GET", // POST, PUT, DELETE
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

//? installer json-server
//? npm install -g json-server
//? json-server --watch db.json pour lancer le serveur

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json" //? type de contenu envoyé
  },
  body: JSON.stringify({ //? convertit un objet JS en chaîne JSON
    pseudo: "Alex",
    message: "Hello Alex"

}),
  mode: "cors", //? correspond à l'origine de la requête
  credentials: "same-origin", //? permet d'envoyer les cookies


};

//? Envoi de données avec fetch sur le serveur 
document.querySelector("form").addEventListener("submit", (e) => {

fetch("http://localhost:3000/posts", init2).then((res) => console.log("data envoyée"));


});


/* //? Delete
const init3 = {
  method: "DELETE",
  mode: "cors",
  credentials: "same-origin",
};

fetch("http://localhost:3000/posts/1", init3).then((res) => console.log("data supprimée"));


 */


//! Asynchrone

/* //? setTimeout

setTimeout(() => {
  console.log("Hello");
}
, 1000);
 */

/* //!Promise

fetch("data.json").then((res) => res.json()).then((data) => console.log(data));
 */

/* //!asuync / await

async function fetchData () {
  await fetch('monlien')
  //? Atten le fetch pour passer à la suite

  await console.log('coucou');
  await console.log('aza');


} */


//? Pour fonction Fléchée

/* const fetchData = async () => {
  await fetch('monlien')
=
  await console.log('coucou');
  await console.log('aza');

} */


//! Json
//? convertir un objet JS en chaîne JSON

/* const obj = {
  pseudo: "Alex",
  age: 28,
  technos: ["Javascript", "React", "NodeJs"],
};

const json = JSON.stringify(obj);
console.log(json); 

 */

//? convertir une chaîne JSON en objet JS

/* const json = '{"pseudo": "Alex", "age": 28, "technos": ["Javascript", "React", "NodeJs"]}';
const obj = JSON.parse(json);
console.log(obj); */


//! Web Api

//? Local Storage peut stocker environ 10Mo de données 
//! Attention il faut stocker des chaînes de caractères donc il faut convertir les objets en JSON

/* localStorage.setItem("pseudo", "Alex");
localStorage.removeItem("pseudo");
localStorage.clear(); */


//? Session Storage ne stocke que pour la session en cours

/* sessionStorage.setItem("pseudo", "Alex");
sessionStorage.removeItem("pseudo");
sessionStorage.clear(); */


//? Cookies est stocké dans le navigateur et envoyé au serveur à chaque requête
/* 
// Si pas de date d'expiration, le cookie dure la session
document.cookie = "username=Alex; expires=Thu, 21 Oct 2021 07:28:00 GMT; path=/";

// Max-age en millisecondes Secure pour https et SameSite pour la sécurité

document.cookie = "username=Alex; max-age=60; path=/ secure samesite="; */










