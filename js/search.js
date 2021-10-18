
// fetch(`https://api.rawg.io/api/games?key=${apiKeyRAWG}&dates=2015-08-01,2021-09-30&platforms=18,1,7&page_size=40`)
// .then(response => response.json())
// .then(data=>{
//     console.log(data)
// })

// fetch(`https://www.giantbomb.com/api/games/?api_key=${apiKeyGiantBomb}&format=json`)
// .then(response => response.json())
// .then(data=>{
//     console.log(data)
// })

//https://api.rawg.io/api/games/1454?key=${apiKeyRAWG}

let navbar = document.querySelector(".navbar")
let searchInput = document.querySelector('#searchBar')
let searchResults = document.querySelector(".searchResults")


// EventListener for searching game names
searchInput.addEventListener('keyup', (e) => {
    let gameFilter = []
    let displayGameResults = ""
    if(searchInput.value){
        let firstLetter = searchInput.value[0].toLowerCase()
        if(firstLetter >= "a" && firstLetter <= "b"){
            gameFilter = gamesAtoB.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter >= "c" && firstLetter <= "d"){
            gameFilter = gamesCtoD.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter >= "e" && firstLetter <= "g"){
            gameFilter = gamesEtoG.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter >= "h" && firstLetter <= "l"){
            gameFilter = gamesHtoL.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter >= "m" && firstLetter <= "q"){
            gameFilter = gamesMtoQ.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter >= "r" && firstLetter <= "s"){
            gameFilter = gamesRtoS.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter == "t"){
            gameFilter = gamesT.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else if(firstLetter >= "u" && firstLetter <= "z"){
            gameFilter = gamesMtoQ.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
        else{
            gameFilter = games_SymbolsAndNumbers.filter(game => {
                return game.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
        }
    }

    gameFilter.forEach(game => {
        displayGameResults += `<div id=${game.id} class="displayGameResults">${game.name}</div>`
    })

    searchResults.innerHTML = displayGameResults

    if(e.code == "Enter"){
        console.log(gameFilter);
    }

})


// EventListener for clicking on searched game name
searchResults.addEventListener("click", (e) => {
    localStorage.id = e.target.id
    window.location.href = "itemPage.html"
})