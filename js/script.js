// DOM ELEMETS
const cardElm = document.getElementById("card");
const closeBtnElm = document.getElementById("btn-close")
const overlayElm = document.getElementById("overlay")

// FUNCTIONS
function addCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (resp) {
            const newCard = resp.data; 
            newCard.forEach(card => {
                const title = card.title;
                const immage = card.url;
                cardElm.innerHTML += `
                    <div class="col-lg-4 col-sm-6 col-12 p-2 card_rot mt-5" id="inf_card">  
                        <div class="bg-light mt-3 p-3 ms-shadow">
                            <img class="pin" src="./img/pin.svg" alt="Puntina">
                            <img id="imgCard" src="${immage}" alt="img">
                            <p class="mt-2">${title}</p>
                        </div>
                    </div>`;
            });

            //Seleziono tutte le card (funziona sincrona)
            const postCard = document.querySelectorAll("#inf_card");  
            // Per ogni singola card aggiungo un evento
            postCard.forEach((postCards) => {
                // Applico l'evento click
                postCards.addEventListener("click", () => {
                    // Prendo l'informazione che mi interessa
                    const onlyImg = postCards.querySelector("#imgCard")
                    console.log(onlyImg)
                    // Passo l'immagine dell'overlay
                    const overlayImgElm = document.getElementById("overlay_img")
                    // passo l'immagine della card
                    const overlayImg = postCard.querySelector("imgCard").src 
                    // Scambia l'src dell'immagine della card con quella dell'overlay
                    overlayImgElm.src = overlayImg
                    // Faccio compraire l'overlay dell'immagine selezionata
                    overlayElm.classList.remove("hidden");
                })
            })
        });
}

// PAGE LOAD
addCard();


// EVENTS
