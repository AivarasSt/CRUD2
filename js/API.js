const urlBase = 'http://localhost:3000';

const getToy = (success, failure) => {
  setTimeout(() => {
    fetch(urlBase + '/toy')
      .then(response => response.json())
      .then(success)
      .catch(failure);
  }, 1000)
}

const deleteToy = (success, failure, id) => {
  fetch(urlBase + '/toy/' + id , { method: 'DELETE' })
  .then(response => response.json())
  .then(success)
  .catch(failure);
}


const API = {
  getToy,
  deleteToy
};

API.getToy(
  (duomenys) => console.log(duomenys),
  (klaida) => console.error(klaida))

// API.deleteToy(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida),
//   "103")

// API.getToy(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida))
  