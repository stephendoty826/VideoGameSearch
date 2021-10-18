let topSellerContainer = document.querySelector(".topSellerContainer")
let freeToPlay = document.querySelector("#free-to-play")
let firstPersonShooters = document.querySelector("#fps")
let openWorld = document.querySelector("#open-world")


topSellerContainer.addEventListener("click", (e) => {
    localStorage.id = e.target.id
    window.location.href = "itemPage.html"
})

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

firstPersonShooters.addEventListener("click", (e) => {
    localStorage.searchContent = e.target.id
    console.log(e.target.id);
    localStorage.image1 = "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
    localStorage.image2 = "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
    localStorage.image3 = "https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg"
    localStorage.image4 = "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
    localStorage.titleTab = "VGS: First-Person Shooters"
    localStorage.headtitle = "First-Person Shooters"
    window.location.href = "gameList.html"
})

openWorld.addEventListener("click", (e) => {
    localStorage.searchContent = e.target.id
    localStorage.image1 = "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
    localStorage.image2 = "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
    localStorage.image3 = "https://media.rawg.io/media/games/c97/c979baea7e59e0bc857c0836052373dd.jpg"
    localStorage.image4 = "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg"
    localStorage.titleTab = "VGS: Open World"
    localStorage.headtitle = "Open World"
    window.location.href = "gameList.html"
})










