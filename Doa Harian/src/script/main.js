function getDoa() {
  fetch('https://tanyadoa-api.herokuapp.com/all')
    .then(response => response.json())
    .then(response => {
      let cardDoa = '';
      Object.values(response).forEach(doa => {
        cardDoa += `
        <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="card mb-4 card-doa">
          <div class="card-body">
            <h5 class="card-title">${doa.nama}</h5>
            <h3 class="card-subtitle mb-2 text-muted text-end">${doa.lafal}</h3>
            <p class="card-text">${doa.arti}</p>
          </div>
        </div>
      </div>
        `;
      });
      const listDoa = document.querySelector('.card-doa');
      listDoa.innerHTML = cardDoa;

      console.log(response)
    });
}

getDoa();