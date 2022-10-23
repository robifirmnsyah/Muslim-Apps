const main = document.getElementById('main');
const search = document.getElementById('search');
const form = document.getElementById('form');

function getDoa() {
  fetch('https://tanyadoa-api.herokuapp.com/all')
    .then(response => response.json())
    .then(data => {
      if (data.results !== 0) {
        showDoa(data.results);
      } else {
        main.innerHTML = `<h1 class="no-results">No Results Found</h1>`
      }
      console.log(data.results);
    })
}


function showDoa() {
  fetch('https://tanyadoa-api.herokuapp.com/all')
    .then(response => response.json())
    .then(response => {
      let cardDoa = '';
      Object.values(response.data).forEach(doa => {
        cardDoa += `
          <div class="col-lg-10 col-md-10 col-sm-10 ">
          <div class="card mb-4 card-doa-list">
            <div class="card-body">
              <h5 class="card-title text-center mb-4">${doa.nama}</h5>
              <h3 class="card-subtitle mb-3 text-center">${doa.lafal}</h3>
              <p class="card-text text-center">"${doa.arti}"</p>
            </div>
          </div>
        </div>
          `;
      });
      const listDoa = document.querySelector('.card-doa');
      listDoa.innerHTML = cardDoa;

    });

}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getDoa('https://tanyadoa-api.herokuapp.com/search/' + searchTerm)
  } else {
    getDoa(URL);
  }
  console.log(searchTerm);
})
