
fetch("key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7")
.then(response => response.json())
.then((data) => {
    console.log(data);
}