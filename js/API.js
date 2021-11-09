const urlBase = 'http://localhost:3000';

const getToys = (success, failure) => {
    fetch(urlBase + '/toy')
      .then(response => response.json())
      .then(success)
      .catch(failure);
}

const deleteToys = (success, failure, id) => {
  fetch(urlBase + '/toy/' + id , { method: 'DELETE' })
  .then(response => response.json())
  .then(success)
  .catch(failure);
}

const API = {
  getToys,
  deleteToys
};

API.getToys(
  (duomenys) => console.log(duomenys),
  (klaida) => console.error(klaida))

// API.deleteToys(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida),
//   "103")

// API.getToys(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida))
  