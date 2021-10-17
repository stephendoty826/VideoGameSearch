let tabTitle = document.querySelector("title")
let banner = document.querySelector(".banner")
let bannerTitle = document.createElement("div")
let bannerBackgroundImage = document.querySelector(".bannerBackgroundImage")
let bannerImage = document.querySelector(".bannerImage")
let infoDescription = document.querySelector(".infoDescription")
let esrbRating = document.querySelector(".esrb")
let rating = document.querySelector("#rating")
let genre = document.querySelector("#genre")
let gamePlatformContainer = document.querySelector(".gamePlatformContainer")

// Fetching data from RAWG
fetch(`https://api.rawg.io/api/games/${localStorage.id}?key=${apiKeyRAWG}`)
.then(response => response.json())
.then((data) => {
    console.log(data);
    tabTitle.textContent = `VGS: ${data.name}`
    if(data.name.length < 30){
        bannerTitle.setAttribute("class", "bannerTitleLG")
        bannerTitle.textContent = data.name
        banner.append(bannerTitle)
    }
    else if(data.name.length < 60){
        bannerTitle.setAttribute("class", "bannerTitleMD")
        bannerTitle.textContent = data.name
        banner.append(bannerTitle)
    }
    else{
        bannerTitle.setAttribute("class", "bannerTitleSM")
        bannerTitle.textContent = data.name
        banner.append(bannerTitle)
    }
    bannerBackgroundImage.setAttribute("src", `${data.background_image}`)
    bannerBackgroundImage.setAttribute("alt", `${data.name}`)
    bannerImage.setAttribute("src", `${data.background_image}`)
    bannerImage.setAttribute("alt", `${data.name}`)
    infoDescription.textContent = data.description_raw
    
    //displays ESRB rating if available
    if(data.esrb_rating == null){
        esrbRating.textContent = "ESRB: N/A"
    }
    else{
        esrbRating.textContent = `ESRB: ${data.esrb_rating.name}`
    }

    rating.textContent = data.rating

    // displays game genre if available
    if(data.genres.length > 0){
        for(let dataGenre of data.genres){
            genre.textContent += `${dataGenre.name} `
        }
    }
    console.log(data.platforms[0].platform);
    // displays game platforms if available
    if(data.platforms.length > 0){
        for(let item of data.platforms){
            gamePlatformContainer.innerHTML += `<div class="gamePlatform">${item.platform.name}</div>`
        }
    }
    else{
        gamePlatformContainer.innerHTML += "<div>N/A</div>"
    }
})

function createEl(type, classStyle, src=""){
    let element = document.createElement(type)
    element.setAttribute("class", classStyle)
    element.setAttribute("src", src)
    return element
}

let screenshotContainer = document.querySelector(".screenshotContainer")

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