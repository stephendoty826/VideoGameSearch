console.log(apiKey);
fetch(`https://api.rawg.io/api/games?key=${apiKey}&page=1&pageSize=50`)
.then(response => response.json())
.then((data) => {
    console.log(data);
})