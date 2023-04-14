fetch("https://meowfacts.herokuapp.com/").then(function (response) {
    response.json().then(function (data) {
      let catFact = data.data[0];
      console.log("test")
      let catSec = document.querySelector("#cat-facts");
      let catH3 = document.createElement("h3");
      catH3.textContent = catFact;
      catSec.appendChild(catH3)
    });
  });
