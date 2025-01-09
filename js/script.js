// DOM ELEMETS
const cardElm = document.getElementById("card");

// FUNCTIONS
function addCard() {
    for (let i = 1; i < 6; i++){
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (resp) {
            console.log(resp);
        })
    }
}
    

// EVENTS