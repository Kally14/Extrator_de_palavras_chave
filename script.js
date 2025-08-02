const botaoMostraPalavras = document.querySelector('#botao-palavrachaves');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave)

function mostraPalavrasChave() {
  const texto = document.querySelector('#entrada-de-texto').value;
  const campoResultado = document.querySelector('#resultado-palavrachave');
  const PalavrasChave = processaTexto(texto);

  campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0, 10);
}

function contaFrequencia(palavras) {
    let frequencias = [];
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (palavras[i] == palavras[j]) {
                frequencias[i]++;
            }
        }
    }
    return frequencias;
}