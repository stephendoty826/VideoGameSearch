let tabTitle = document.querySelector("title")
let bannerTitle = document.querySelector(".bannerTitle")
let bannerBackgroundImage = document.querySelector(".bannerBackgroundImage")
let bannerImage = document.querySelector(".bannerImage")
let infoDescription = document.querySelector(".infoDescription")
let esrbRating = document.querySelector(".esrb")
let rating = document.querySelector("#rating")
let genre = document.querySelector("#genre")

// Fetching data from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
    tabTitle.textContent = `VGS: ${data.name}`
    bannerTitle.textContent = data.name
    bannerBackgroundImage.setAttribute("src", `${data.background_image}`)
    bannerBackgroundImage.setAttribute("alt", `${data.name}`)
    bannerImage.setAttribute("src", `${data.background_image}`)
    bannerImage.setAttribute("alt", `${data.name}`)
    infoDescription.textContent = data.description_raw
    if(data.esrb_rating == null){
        esrbRating.textContent = "ESRB: N/A"
    }
    else{
        esrbRating.textContent = `ESRB: ${data.esrb_rating.name}`
    }
    rating.textContent = data.rating
    if(data.genres.length > 0){
        for(let dataGenre of data.genres){
            genre.textContent += `${dataGenre.name} `
        }
    }
})

function createEl(type, classStyle, src=""){
    let element = document.createElement(type)
    element.setAttribute("class", classStyle)
    element.setAttribute("src", src)
    return element
}

let screenshotContainer = document.querySelector(".screenshotContainer")
// let bannerScreenshots = document.createElement(".bannerScreenshots")
// let bannerScreenshotsBackground = document.createElement(".bannerScreenshotsBackground") 
// let bannerScreenshotsImage = document.createElement(".bannerScreenshotsImage") 

// Fetching screenshots from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}/screenshots?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((screenshots) => {
    console.log(screenshots);
    if(screenshots.results.length > 0){
        for(results of screenshots.results){
            let bannerScreenshotsBackground = createEl("img", "bannerScreenshotsBackground", `${results.image}`)
            let bannerScreenshotsImage = createEl("img", "bannerScreenshotsImage", `${results.image}`)
            let bannerScreenshots = createEl("div", "bannerScreenshots", undefined)
            bannerScreenshots.append(bannerScreenshotsBackground, bannerScreenshotsImage)
            screenshotContainer.append(bannerScreenshots)
        }
    }
})

// 