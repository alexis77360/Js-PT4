//? https://randomuser.me/api/?results=24

let userData = [];

//? Attendre de fetcher les données avant le console.log
const fetchUser = async () => {
    await fetch('https://randomuser.me/api/?results=24')
        .then((res) => res.json())
        .then((data) => {
            userData = data.results;
        })
    console.log(userData);
}
//? Afficher les données en attendant le fetchUser
const userDisplay = async () => {
    await fetchUser();

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        return newDate;
    }

    //? Calculer membres depuis x jours
    const dayCalc = (date) => {
        let today = new Date();

        //? Timestamp de la date du jour
        let todayTimestamp = Date.parse(today);

        //? Timestamp de la date de l'inscription
        let timestamp = Date.parse(date);

        //? Calculer le nombre de jours entre les deux dates 86400000 = 1 jour en millisecondes
        return Math.ceil((todayTimestamp - timestamp) / 86400000);

    }

    document.body.innerHTML = userData.map((user) =>
        `
    <div class="card">
        <img src="${user.picture.large}" alt="photo de ${user.name.first} ${user.name.last}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
    <em> Membre depuis : ${dayCalc(user.registered.date)} jours</em>
    </div>
    `
    ).join('');

};

userDisplay();