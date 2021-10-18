let titleTab = document.querySelector("title")
let banner = document.querySelector(".newReleases2")
let container = document.querySelector(".container")
let headtitle = document.querySelector(".headtitle")

function createEl(type, classStyle, src=""){
    let element = document.createElement(type)
    element.setAttribute("class", classStyle)
    element.setAttribute("src", src)
    return element
}

console.log(localStorage.searchContent);

fetch(`https://api.rawg.io/api/games?key=${apiKeyRAWG}&tags=${localStorage.searchContent}&page=1&page_size=40`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    titleTab.textContent = localStorage.titleTab
    
    //create banner image elements
    let newReleasesItem1 = createEl("div", "newReleasesItem2", undefined)
    let imageNewReleasesItem1 = createEl("img", "imageNewReleasesItem2", `${localStorage.image1}`)
    let newReleasesItem2 = createEl("div", "newReleasesItem2", undefined)
    let imageNewReleasesItem2 = createEl("img", "imageNewReleasesItem2", `${localStorage.image2}`)
    let newReleasesItem3 = createEl("div", "newReleasesItem2", undefined)
    let imageNewReleasesItem3 = createEl("img", "imageNewReleasesItem2", `${localStorage.image3}`)
    let newReleasesItem4 = createEl("div", "newReleasesItem2", undefined)
    let imageNewReleasesItem4 = createEl("img", "imageNewReleasesItem2", `${localStorage.image4}`)

    //append elements
    newReleasesItem1.append(imageNewReleasesItem1)
    newReleasesItem2.append(imageNewReleasesItem2)
    newReleasesItem3.append(imageNewReleasesItem3)
    newReleasesItem4.append(imageNewReleasesItem4)
    banner.append(newReleasesItem1, newReleasesItem2, newReleasesItem3, newReleasesItem4)

    headtitle.textContent = localStorage.headtitle

    //for loop to create and append elements for images and game titles
    for(let i = 0; i < 15; i++){
        let box = createEl("div", "box", undefined)
        let listImageContainer = createEl("div", "listImageContainer", undefined)
        let gameImg = createEl("img", "gameImage", data.results[i].background_image)
        gameImg.setAttribute("id", `${data.results[i].id}`)
        let gameTitle = document.createElement("div")
        gameTitle.setAttribute("class", "underneath")
        gameTitle.textContent = data.results[i].name
        listImageContainer.append(gameImg)
        box.append(listImageContainer)
        box.append(gameTitle)
        container.append(box)
    }

    container.addEventListener("click", (e) => {
        localStorage.id = e.target.id
    window.location.href = "itemPage.html"
    })
})

let freeToPlay = document.querySelector("#free-to-play")

freeToPlay.addEventListener("click", (e) => {
    localStorage.searchContent = e.target.id
    localStorage.image1 = "https://www.pcgamesn.com/wp-content/uploads/2019/03/dota-2.jpg"
    localStorage.image2 = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/destiny-2-beyond-light-trailer-1591733289.png"
    localStorage.image3 = "https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg"
    localStorage.image4 = "https://allpatchnotes.mncdn.com/wp-content/uploads/2020/10/warframe-29.2.1.jpg"
    localStorage.titleTab = "VGS: Free To Play"
    localStorage.headtitle = "Free To Play"
    window.location.href = "gameList.html"
})