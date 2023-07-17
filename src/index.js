// --- GLOBAL CONSTANTS --- //

const newSightingForm = document.querySelector('#new-sighting-form')
const sightingsList = document.querySelector('#sightings-list')

// --- HELPER FUNCTIONS --- //

function addSightingToList(sightingText) {
  const newListItem = document.createElement('li')
  newListItem.textContent = sightingText
  sightingsList.append(newListItem)
}

// --- EVENT LISTENERS --- //

newSightingForm.addEventListener('submit', event => {
  event.preventDefault()
  const sightingInput = event.target['new-sighting-input']
  const sightingInputValue = sightingInput.value

  const POST_OPTIONS = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: sightingInputValue })
  }

  fetch("http://localhost:3000/sightings", POST_OPTIONS)
    .then( response => response.json() )
    .then( data => {
      console.log( "new sighting:", data )
      addSightingToList( data.content )
    })
    .catch( error => alert( error ) )
    .finally( () => alert("I am the finally!") )

    // try and do something / catch if there's an error and do something else

  event.target.reset()
})


// --- FETCH ON LOAD --- //

fetch('http://localhost:3000/sightings')
  .then( res => res.json() )
  .then( sightingsArray => {
    console.log("sightingsArray:", sightingsArray)
    sightingsArray.forEach( sighting => addSightingToList(sighting.content) )
  })