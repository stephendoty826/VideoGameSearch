let tabTitle = document.querySelector("title")
let bannerTitle = document.querySelector(".bannerTitle")
let banner = document.querySelector(".banner")
let infoDescription = document.querySelector(".infoDescription")
let esrbRating = document.querySelector(".esrb")
let rating = document.querySelector("#rating")
let genre = document.querySelector("#genre")

// Fetching data from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
    bannerTitle.textContent = data.name
    // banner = // banner image
    infoDescription.textContent = data.description_raw
    esrbRating.textContent = `ESRB: ${data.esrb_rating.name}`
    rating.textContent = data.rating
    genre.textContent = `${data.genres[0].name}, ${data.genres[1].name}`
})

// Fetching screenshots from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}/screenshots?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
})

// 