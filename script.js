import { Palavras_ruins } from "./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector('#entrada-de-texto').value;
  const campoResultado = document.querySelector('#resultado-palavrachave');
  const palavrasChave = processaTexto(texto);

  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
  let palavras = texto.split(/\P{L}+/u);
  for (let i in palavras) {
    palavras[i] = palavras[i].toLowerCase();
  }

  palavras = tiraPalavrasRuins(palavras);

  const ordenadas = ordenaPorFrequencia(palavras);
  console.log(ordenadas);
  return ordenadas.slice(0, 10);
}

function ordenaPorFrequencia(palavras) {
  const frequencia = {};
  for (const palavra of palavras) {
    frequencia[palavra] = (frequencia[palavra] || 0) + 1;
  }
  return Object.keys(frequencia)
    .sort((a, b) => frequencia[b] - frequencia[a]);
}

function tiraPalavrasRuins(palavras) {
  const palavrasBoas = [];
  for (const palavra of palavras) {
    if (!Palavras_ruins.has(palavra) && palavra.length > 2) {
      palavrasBoas.push(palavra);
    }
  }
  return palavrasBoas;
}