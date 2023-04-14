fetch("https://meowfacts.herokuapp.com/").then(function (response) {
    response.json().then(function (data) {
      let catFact = data.data[0];
      console.log("test")
      let catSec = document.querySelector("#cat-facts");
      let catP = document.createElement("p");
      catP.textContent = `Daily cat fact: ${catFact}`;
      catSec.appendChild(catP)
    });
  });
