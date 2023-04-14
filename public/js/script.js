
var dataItems = [];
var searchResults = [];
var lastSearchedItem = [];
var tempResults = [];
var plant_array = [];

function getData() {
  fetch("./public/json/ari.json")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        dataItems.push(data[i]);
      }
    });
}

// Save search history to local storage
var search_history = [];

// Element Variables
var searchButton = document.querySelector("#search-button");
var searchBox = document.querySelector("#place-search-input");
var cardContainer = document.querySelector("#card-container");
var searchContainer = document.querySelector(".find-plants-container");
var resultsPage = document.getElementById("results-page");
var card = document.getElementsByClassName("plant-card");


// Hide/Unhide Plant Cards
function findPlants() {
  searchContainer.classList.add("hide");
  resultsPage.classList.remove("hide");


}
function getQuote() {
  let getQuote = fetch(
    `https://api.api-ninjas.com/v1/quotes?category=environmental`,
    {
      headers: { "X-Api-Key": "zxKEypy5sMHpWaDnRk1H8A==u8OZejnWzsuLY6Om" },
    }
  ).then(function (response) {
    response.json().then(function (data) {
      console.log("data:", data);
      let quote = data[0].quote;
      let author = data[0].author;
      // TODO: append quote to header of main box
      let someBox = document.querySelector("#quoteBox");
      console.log("someBox:", someBox);
      let quoteBox = document.createElement("p");
      quoteBox.textContent = `${quote} -${author}`;
      someBox.appendChild(quoteBox);
    });
  });
}

// create and append plant information

function displayPlantInfo(plantArray) {
  plantArray.forEach(function (plant) {
    var plantCard = document.createElement("div");
    plantCard.classList.add("col", "s6", "m4", "xl2");
    var card = document.createElement("div");
    card.classList.add("card", "hoverable");
    var cardImage = document.createElement("div");
    cardImage.classList.add(
      "card-image",
      "waves-effect",
      "waves-block",
      "waves-light"
    );
    var plantImage = document.createElement("img");
    plantImage.classList.add("activator", "plant-image");
    plantImage.setAttribute("src", plant.imageUrl);
    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    var cardTitle = document.createElement("span");
    cardTitle.classList.add(
      "card-title",
      "activator",
      "grey-text",
      "text-darken-4",
      "truncate"
    );
    var icon = document.createElement("i");
    icon.classList.add("material-icons", "right");
    icon.textContent = "more_vert";
    var scienceName = document.createElement("p");
    scienceName.classList.add("truncate", "science");
    var cardReveal = document.createElement("div");
    cardReveal.classList.add("card-reveal");
    var cardTitleReveal = document.createElement("span");
    cardTitleReveal.classList.add("card-title", "grey-text", "text-darken-4");
    var closeReveal = document.createElement("i");
    closeReveal.classList.add("material-icons", "right");
    closeReveal.textContent = "close";
    var infoReveal = document.createElement("p");
    var revealContent = document.createElement("div");
    revealContent.classList.add("reveal-content");
    var revealRowDark = document.createElement("div");
    revealRowDark.classList.add("list-row-dark");
    var revealRowLight = document.createElement("div");
    revealRowDark.classList.add("list-row-light");
    var rowUpperLeft = document.createElement("div");
    rowUpperLeft.classList.add("column-text-list1");
    var rowUpperRight = document.createElement("div");
    rowUpperRight.classList.add("column-text-list2", "famfam");
    var rowLowerLeft = document.createElement("div");
    rowLowerLeft.classList.add("column-text-list1");
    var rowLowerRight = document.createElement("div");
    rowLowerRight.classList.add("column-text-list2", "yeer");
        var favs = document.createElement("button")
        favs.classList.add("favorites")
        favs.textContent = "add"

        // append data
        resultsPage.appendChild(plantCard)
            plantCard.appendChild(card)
                card.appendChild(cardImage)
                    cardImage.appendChild(plantImage)
                card.appendChild(cardContent)
                    cardContent.appendChild(cardTitle)
                        cardTitle.appendChild(icon)
                    cardContent.appendChild(scienceName)
                        cardImage.appendChild(favs)
                card.appendChild(cardReveal)
                    cardReveal.appendChild(cardTitleReveal)
                        cardTitleReveal.appendChild(closeReveal)
                    cardReveal.appendChild(infoReveal)
                        infoReveal.appendChild(revealContent)
                            revealContent.appendChild(revealRowDark)
                                revealRowDark.appendChild(rowUpperLeft)
                                revealRowDark.appendChild(rowUpperRight)
                            revealContent.appendChild(revealRowLight)
        revealRowLight.appendChild(rowLowerLeft)
        revealRowLight.appendChild(rowLowerRight)

        // fill each section with plant data
        plantImage.setAttribute("src", plant.plantImage)
        cardTitle.textContent = plant.commonName
        scienceName.textContent = plant.scientificName
        cardTitleReveal.textContent = plant.commonName
        rowUpperLeft.textContent = "Family:"
        rowUpperRight.textContent = plant.family
        rowLowerLeft.textContent = "Year Documented:"
        rowLowerRight.textContent = plant.year
        
    })
    faves()
}


function addToFavorites(plantName){

    if (!localStorage.getItem("favorite-plant")) {
        let plantStorage = [];
        plantStorage.push(plantName);
        localStorage.setItem("favorite-plant", JSON.stringify(plantStorage));
        return displayFavoritePlants(plantStorage)
      } else {
        let plantStorage = JSON.parse(localStorage.getItem("favorite-plant"));
        if (!plantStorage.includes(plantName)) {
          plantStorage.push(plantName);
          localStorage.setItem("favorite-plant", JSON.stringify(plantStorage));
        return displayFavoritePlants(plantStorage)}
      }
      
    }

function displayFavoritePlants(plantStorage){
    let plantArray = plantStorage
    return displayPlantInfo
}




function faves(){
    var favoritesBtn = document.getElementsByClassName("favorites")
    console.log(favoritesBtn);
    for (var i = 0; i < favoritesBtn.length; i++){
    favoritesBtn[i].addEventListener("click", function(event) {
        console.log("test")
        var element = event.target.parentNode;
        var cardImage = element.parentElement
        var image = cardImage.querySelector(".activator").getAttribute('src')
        var card = cardImage.parentElement
        var cardTitle = card.querySelector(".card-title")
        var plantName = cardTitle.textContent
        var scientificName = card.querySelector(".science").textContent
        var familyName = card.querySelector(".famfam").textContent
        var year = card.querySelector(".yeer").textContent
        addToFavorites(cardTitle)
        console.log(plantName)
        console.log(scientificName)
        console.log(familyName)
        console.log(year)
        console.log(image)
        let plant = new Plant(plantName, scientificName, image, year, familyName)
        console.log(plant)
        addToFavorites(plant)
    })
    }
}










// save search to history
function saveSearch(global_history) {
  if (localStorage.setItem("search-history", global_history)) {
    console.log("HISTORY SAVED SUCCESSFULLY");
  }
}



// create Plant class so we can organize our data
class Plant {
  constructor(
    commonName,
    scientificName,
    plantImage,
    year,
    genus,
    family,
    synonyms
  ) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.plantImage = plantImage;
    this.year = year;
    this.genus = genus;
    this.family = family;
    this.synonyms = synonyms;
  }
}

// sort through the array of search results and grab all the info we need
function sortTrefleAreaSearch(array) {
  let plantArray = [];
  for (let i = 0; i < array.length; i++) {
    let commonName = array[i].common_name;
    let scientificName = array[i].scientific_name;
    let plantImage = array[i].image_url;
    let year = array[i].year;
    let genus = array[i].genus;
    let family = array[i].family;
    let synonyms = array[i].synonyms;
    let plant = new Plant(
      commonName,
      scientificName,
      plantImage,
      year,
      genus,
      family,
      synonyms
    );
    plantArray.push(plant);
  }
  return plantArray;
}

// Smart Search Feature
//
// event = event.target (in this case the input box)
// searchable_data = array of data we want to make "smartSearch"
// filtered_data = data we want to show up in our search query
// search_filter = items passed to the filter so they can be added to the fi
function smartSearchAlpha(event, searchable_data = [], search_filter = []) {
    event.preventDefault();
    var search_input = event.target.value;
    var searched_data = searchable_data.filter((data) => {
      var search_filter_items = "";
      search_filter.forEach((arguments) => {
        search_filter_items +=
          data.hasOwnProperty(arguments) &&
          data[arguments].toLowerCase().trim() + " ";
      });
      return Object.keys(data).some((key) => {
        return (
          (data[key] !== undefined &&
            data[key] !== null &&
            JSON.stringify(data[key])
              .toLowerCase()
              .trim()
              .includes(search_input)) ||
          search_filter_items.includes(search_input)
        );
      });
    });
    searchResults.unshift(searched_data);
    return;
  }

// Keyup event listener add event listener to search box
searchBox.addEventListener('keyup', function (event) {
    var inputEl = event.target;
    smartSearchAlpha(event, dataItems, filter = ['family']);
    plantName = inputEl.value;
})

// on keyboard enter, search
addEventListener('keypress', function (event) { // event.preventDefault();
    if (event.key === "Enter") {
        event.preventDefault();
        // addToHistory(event.target.value);
        saveSearch(search_history);
        const plantArray = sortTrefleAreaSearch(searchResults[0])
        displayPlantInfo(plantArray);
        console.log('::KEYBOARD:: City Saved To History: ', plantName);
        searchBox.value = ''
        findPlants()
        getQuote()
    }
})



// // click event listener for search button
searchButton.addEventListener('click', function (event) {
    event.preventDefault();

    // addToHistory(event.target.value);
    saveSearch(search_history);
    const plantArray = sortTrefleAreaSearch(searchResults[0])
    displayPlantInfo(plantArray);
    searchBox.value = ''
    findPlants()
    getQuote()


});

getData()






