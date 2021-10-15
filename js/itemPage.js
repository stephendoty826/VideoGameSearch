let tabTitle = document.querySelector("title")
let banner = document.querySelector(".banner")
let bannerTitle = document.querySelector(".bannerTitle")
let infoDescription = document.querySelector(".infoDescription")


// Fetching data from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
    bannerTitle.textContent = data.name
    // banner = 
    infoDescription.textContent = data.description_raw
})

// Fetching screenshots from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}/screenshots?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
})

// 