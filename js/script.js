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
                    <div class="col-lg-4 col-sm-6 col-12 p-2">  
                        <div class="bg-light mt-3 p-3" id="card">
                            <img src="${immage}" alt="img">
                            <p class="mt-2">${title}</p>
                        </div>
                    </div>
                `;
            });
        });
}

// PAGE LOAD
addCard();


// EVENTS