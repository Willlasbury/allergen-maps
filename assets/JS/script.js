// fetch to national park location

function getParkInfo(string) {
  fetch(
    `https://developer.nps.gov/api/v1/passportstamplocations?q=${string}&limit=5&api_key=bh7IwlBKJxYuDvsGfVs2ogc9sumwDTYJJZi11Yea`
  ).then(function (response) {
    response.json().then(function (data) {
    let stateLocaiton = data.data[0].parks[0].states
    return stateLocaiton
    });
  }); 
}



// run fetch with park name
function getTWDG(string) {
    fetch (``)
}

// TODO: return state location
// TODO: in the future include accesibility and other park specific info

// TODO: send state data to trefle api for all plants
// TODO: convert state string to TDWG code
// TODO: fetch plants with TDWG code
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

getParkInfo('zion national park')