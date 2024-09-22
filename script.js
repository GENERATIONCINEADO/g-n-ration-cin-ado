// Fonction pour afficher les films
function afficherFilms() {
    const filmList = document.getElementById('film-list');
    filmList.innerHTML = ''; // Effacer le contenu précédent
    const films = JSON.parse(localStorage.getItem('films')) || [];

    films.forEach((film) => {
        filmList.innerHTML += `
            <div class="film">
                <img src="${film.image}" alt="${film.titre}" />
                <h3>${film.titre}</h3>
                <p>${film.description}</p>
                <p><strong>Date :</strong> ${film.date}</p>
                <p><strong>Heure :</strong> ${film.heure}</p>
                <p><strong>Lieu :</strong> ${film.lieu}</p>
                <iframe width="100%" height="200" src="${film.trailer}" title="Bande-annonce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
    });
}

// Fonction pour ajouter un film
function addFilm() {
    const titre = document.getElementById('new-film-title').value.trim();
    const description = document.getElementById('new-film-description').value.trim();
    const date = document.getElementById('new-film-date').value.trim();
    const heure = document.getElementById('new-film-heure').value.trim();
    const lieu = document.getElementById('new-film-lieu').value.trim();
    const trailer = document.getElementById('new-film-trailer').value.trim();
    const image = document.getElementById('new-film-image').value.trim();

    if (!titre || !description || !date || !heure || !lieu || !trailer || !image) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const film = { titre, description, date, heure, lieu, trailer, image };
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));

    // Réinitialiser le formulaire
    document.getElementById('new-film-title').value = '';
    document.getElementById('new-film-description').value = '';
    document.getElementById('new-film-date').value = '';
    document.getElementById('new-film-heure').value = '';
    document.getElementById('new-film-lieu').value = '';
    document.getElementById('new-film-trailer').value = '';
    document.getElementById('new-film-image').value = '';

    afficherFilms();
}

// Afficher les films au chargement de la page
window.onload = afficherFilms;
