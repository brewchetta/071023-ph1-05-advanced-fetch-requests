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
  addSightingToList(sightingInputValue)
})

// --- FETCH ON LOAD --- //

fetch('http://localhost:3000/sightings')
  .then( res => res.json() )
  .then( sightingsArray => {
    console.log("sightingsArray:", sightingsArray)
    sightingsArray.forEach( sighting => addSightingToList(sighting.content) )
  })
