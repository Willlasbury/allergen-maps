
var displayFavorites = document.getElementById("display-favorites")
var favoritesPage = document.getElementById("favorites-page")
var plantCards = document.getElementsByClassName("col")


function displayFavoritePlants(){
    let favorites = JSON.parse(localStorage.getItem('favorite-plant'))
    for (var i = 0; i < plantCards.length; i++) {
        plantCards.classList.add("hide")
    }
    return displayPlantInfo(favorites)

}
    

displayFavorites.addEventListener("click", displayFavoritePlants)

function displayPlantInfo(plant) {
    for (var i = 1; i < plant.length; i+=2) {
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
          favoritesPage.appendChild(plantCard)
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
          plantImage.setAttribute("src", plant[i].plantImage)
          cardTitle.textContent = plant[i].commonName
          scienceName.textContent = plant[i].scientificName
          cardTitleReveal.textContent = plant[i].commonName
          rowUpperLeft.textContent = "Family:"
          rowUpperRight.textContent = plant[i].family
          rowLowerLeft.textContent = "Year Documented:"
          rowLowerRight.textContent = plant[i].year
          
      }
    //   faves()
  }