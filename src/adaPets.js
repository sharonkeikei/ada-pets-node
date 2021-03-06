// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`something went wrong with ${error}`);
  })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`something went wrong with ${error}`);
    });
  };

  // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((response) =>{
      setResult(`Happy Adoption! Pet number ${selectedPetId} has been removed from the system.`);
    })
    .catch((error) => {
      setError(`someone already remove the pet or it failed with ${error}`);
    })
  }
  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.

  // to make the options to go into the main object rather than an options sub-object
  if (petInfo.hasOwnProperty("options")) {
    petInfo = {
      name: petInfo.name,
      species: petInfo.options.species,
      age: petInfo.options.age,
      owner: petInfo.options.owner,
      about: petInfo.options.about,
  }}


  axios.post((BASE_URL), petInfo)
  .then((response) => {
    console.log(petInfo);
    setResult(response.data);
  })
  .catch((error) => {
    setError(`Opps cannot add the pet! it failed with ${error}`);
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
