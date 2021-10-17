let topSellerContainer = document.querySelector(".topSellerContainer")

topSellerContainer.addEventListener("click", (e) => {
    localStorage.id = e.target.id
    window.location.href = "itemPage.html"
})