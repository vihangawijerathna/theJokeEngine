document.addEventListener("DOMContentLoaded", function () {
  const jokeKeyword = document.getElementById("joke-keyword");
  const generateJokeBtn = document.getElementById("generate-joke-btn");
  const jokeContainer = document.getElementById("joke-container");
  const errorMessage = document.getElementById("error-message");
  const jokeNo1 = document.getElementById("joke-no1");
  const jokeNo2 = document.getElementById("joke-no2");
  const jokeNo3 = document.getElementById("joke-no3");

  //const API_KEY = "YOUR_API_KEY"; dont need API_KEY for this it seems

  generateJokeBtn.addEventListener("click", async function () {
    const keyword = jokeKeyword.value.trim();
    if (!keyword) {
      showError("Please enter a keyword first!");
      return;
    }

    try {
      const jokeData = await fetchJoke(keyword);
      displayJokes(jokeData);
    } catch (error) {
      console.error("Error fetching joke:", error);
      showError("Failed to get jokes. Please try again later.");
    }
  });

  async function fetchJoke(keyword) {
    const url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=3&query=${keyword}&inc=categories%2Cid%2Ccontent&page=1`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }

  function displayJokes(responseData) {
    console.log(responseData);

    // Check if we have jokes - using the nested data structure
    if (
      !responseData.data ||
      !responseData.data.data ||
      responseData.data.data.length === 0
    ) {
      showError("No jokes found for that keyword. Try another one!");
      return;
    }

    const jokes = responseData.data.data; // Get the actual jokes array

    // Set jokes (only if they exist)
    jokeNo1.textContent = jokes[0]?.content || "No joke found";

    if (jokes.length > 1) {
      jokeNo2.textContent = jokes[1].content;
    } else {
      jokeNo2.textContent = "No additional jokes found";
    }

    if (jokes.length > 2) {
      jokeNo3.textContent = jokes[2].content;
    } else {
      jokeNo3.textContent = "No additional jokes found";
    }

    jokeContainer.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError(message) {
    jokeContainer.classList.add("hidden");
    errorMessage.classList.remove("hidden");
    alert(message);
  }
});
