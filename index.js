const formulario = document.querySelector('form')
const cards = document.querySelector('.cardsection');
const seriesCriadas = []

formulario.addEventListener('submit', function (event) {

    const dados = {
        nomeserie: document.querySelector('#nomeserie').value,
        descricao: document.querySelector('#descrição').value,
        url: document.querySelector('#urlimagem').value,

    };

    adicionarCard(dados);
    event.preventDefault();
    this.reset();
    
});

function adicionarCard(dados) {

    seriesCriadas.push(dados);

    cards.innerHTML = ""
    seriesCriadas.forEach((chama) => {
        const card = document.createElement('div')
        card.innerHTML = ` 
        <div class="card">
        <img src="${chama.url}" />
    <h3 class="textcards">${chama.nomeserie}</h3>
    
    <p class="temp">${chama.descricao}</p>
    
    </div> `
        card.setAttribute("class", "card");
        cards.appendChild(card);

        // div.addEventListener('click', ()=>{ div.remove()})

    });
}