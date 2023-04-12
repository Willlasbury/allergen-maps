// fetch to national park location

function getParkInfo(natPark) {
  fetch(
    `https://developer.nps.gov/api/v1/passportstamplocations?q=${natPark}&limit=5&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`
  ).then(function (response) {
    response.json().then(function (data) {
      let stateLocaiton = data.data[0].parks[0].states;
      return stateLocaiton;
    });
  });
}

// TODO: return state location
// TODO: in the future include accesibility and other park specific info

// convert state string to TDWG code

function getTWDG() {
  fetch(
    `https://api.github.com/repos/tdwg/wgsrpd/contents/109-488-1-ED/2nd%20Edition/tblLevel3.txt`
  ).then(function (response) {
    response.json().then(function (data) {
      let twdg = atob(data.content);
      let codeArray = twdg.split("\n");
      codeArray.splice(0, 1);
      codeArray.splice(codeArray.length - 1, 1);
      // console.log("codeArray[codeArray.length-1]:", codeArray[codeArray.length-1])
      let locationArray = [];
      let twdgArray = [];
      for (let i = 0; i < codeArray.length; i++) {
        let location = codeArray[i].split("*")[1];
        let twdgCode = codeArray[i].split("*")[0];
        // console.log("codeArray[i]:", codeArray[i]);
        // console.log("twdgCode:", twdgCode);
        locationArray.push(location.toLowerCase());
        twdgArray.push(twdgCode);
      }
      let locationKey = {};

      locationArray.forEach((element, index) => {
        locationKey[element] = twdgArray[index];
      });
    //   console.log("locationKey['alaska']:", locationKey["virginia"]);
    // getPlants(locationKey['virginia'])
    });
  });
}
getTWDG();
// TODO: send state data to trefle api for all plants
// TODO: fetch plants with TDWG code
function getPlants(location) {
  fetch(
    `https://trefle.io/api/v1/distributions/${location}/plants?token=CDgScJ83lB1EMvnCVzxGDNghxmPU2IgFoqc_McmRAIc `, 
        {method: "GET", header: {"Content-Type": "application/json"}}
    
  ).then(function (response) {
    response.json().then(function (data) {
      console.log("data:", data);
    });
  });
}
getPlants()


// TODO: return all plants

// TODO: on page load
// TODO: check memory for any saved locations
// TODO: display modal
// TODO: include input field
// TODO: incude search button
// TODO: on button press
// TODO: clear input search box
// TODO: save location to memory
// TODO: hide modal
// TODO: append plant cards to page

// TODO: build plant cards
// TODO: take in an array of data from trefle API
// TODO: create a plant card container
// TODO: display plant name as h2 and image
// TODO: addEventListener for clicks on card
// TODO: onClick display modal with plant information
// TODO: add icons for edible (Edible: skull or thumbs up)
// TODO: add taxonimy
// TODO: habitat
// TODO: other locations
