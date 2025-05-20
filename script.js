document.addEventListener("DOMContentLoaded", function () {
    const jokeKeyword = document.getElementById("joke-keyword");
    const generateJokeBtn = document.getElementById("generate-joke-bt n");
    const jokeContainer = document.getElementById("joke-container");
    const jokeNo1 = document.getElementById("joke-no1");
    const jokeNo2 = document.getElementById("joke-no2");
    const jokeNo3 = document.getElementById("joke-no3");

    //const API_KEY = "YOUR_API_KEY"; dont need API_KEY for this it seems

    generateJokeButton.addEventListener("click", function () {


    });

    async function fetchJokes(joketype) {
        const url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=${joketype}&inc=categories%2Cid%2Ccontent&page=1`;
    }
});
