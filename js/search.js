
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

console.log(games_test) //todo change to games when testing is done
let navbar = document.querySelector(".navbar")
let searchInput = document.querySelector('#searchBar')
let searchResults = document.querySelector(".searchResults")
searchInput.addEventListener('keyup', (e) => {
    let gameFilter = []
    let displayGameResults = ""
    if(searchInput.value){
        gameFilter = games_test.filter(game => { //todo change to games when testing is done
            return game.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
    }

    gameFilter.forEach(game => {
        displayGameResults += `<div id=${game.id} class="displayGameResults">${game.name}</div>`
    })

    searchResults.innerHTML = displayGameResults

    if(e.code == "Enter"){
        console.log(gameFilter);
    }

})

searchResults.addEventListener("click", (e) => {
    localStorage.id = e.target.id
    window.location.href = "itemPage.html"
})