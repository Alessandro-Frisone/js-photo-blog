// DOM ELEMETS
const cardElm = document.getElementById("card");

// FUNCTIONS
function addCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (resp) {
            const newCard = resp.data; 
            newCard.forEach(card => {
                const title = card.title;
                const immage = card.url;
                cardElm.innerHTML += `
                    <div class="col bg-light mt-3" id="card">
                        <img src="${immage}" alt="img">
                        <p class="mt-2">${title}</p>
                    </div>
                `;
            });
        });
}

// PAGE LOAD
addCard();


// EVENTS