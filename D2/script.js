document.addEventListener("DOMContentLoaded", () => {
    const eminemSection = document.querySelector("#eminem .row");
    const apiUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem";
  
    // Funzione per creare una card
    function createCard(item) {
      const card = document.createElement("div");
      card.classList.add("col");
  
      card.innerHTML = `
        <div class="card">
          <img src="${item.album.cover_medium}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Artist: ${item.artist.name}</p>
          </div>
        </div>
      `;
  
      return card;
    }
  
    // Fetch dati dall'API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Errore nella chiamata API: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Dati ricevuti:", data);
  
        // Controllo che `data` sia un array
        if (Array.isArray(data.data)) {
          data.data.forEach(item => {
            const card = createCard(item);
            eminemSection.appendChild(card);
          });
        } else {
          throw new Error("La proprietà `data` non è un array");
        }
      })
      .catch(error => {
        console.error("Errore:", error);
        eminemSection.innerHTML = `<p>Si è verificato un errore durante il caricamento dei contenuti.</p>`;
      });
  });
/*-----------------------------------------------------------*/  
document.addEventListener("DOMContentLoaded", () => {
    const metallicaSection = document.querySelector("#metallica .row");
    const apiUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica";
  
    // Funzione per creare una card
    function createCard(item) {
      const card = document.createElement("div");
      card.classList.add("col");
  
      card.innerHTML = `
        <div class="card">
          <img src="${item.album.cover_medium}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Artist: ${item.artist.name}</p>
          </div>
        </div>
      `;
  
      return card;
    }
  
    // Fetch dati dall'API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Errore nella chiamata API: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Dati ricevuti:", data);
  
        // Controllo che `data` sia un array
        if (Array.isArray(data.data)) {
          data.data.forEach(item => {
            const card = createCard(item);
            metallicaSection.appendChild(card);
          });
        } else {
          throw new Error("La proprietà `data` non è un array");
        }
      })
      .catch(error => {
        console.error("Errore:", error);
        metallicaSection.innerHTML = `<p>Si è verificato un errore durante il caricamento dei contenuti.</p>`;
      });
  });
/*-----------------------------------------------------------*/  
document.addEventListener("DOMContentLoaded", () => {
    const queenSection = document.querySelector("#queen .row");
    const apiUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
  
    // Funzione per creare una card
    function createCard(item) {
      const card = document.createElement("div");
      card.classList.add("col");
  
      card.innerHTML = `
        <div class="card">
          <img src="${item.album.cover_medium}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Artist: ${item.artist.name}</p>
          </div>
        </div>
      `;
  
      return card;
    }
  
    // Fetch dati dall'API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Errore nella chiamata API: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Dati ricevuti:", data);
  
        // Controllo che `data` sia un array
        if (Array.isArray(data.data)) {
          data.data.forEach(item => {
            const card = createCard(item);
            queenSection.appendChild(card);
          });
        } else {
          throw new Error("La proprietà `data` non è un array");
        }
      })
      .catch(error => {
        console.error("Errore:", error);
        queenSection.innerHTML = `<p>Si è verificato un errore durante il caricamento dei contenuti.</p>`;
      });
  });
/*-----------------------------------------------------------*/  
