import { emitirExcluirDocumento, emitirTextoTextoEditor, selecionarDcocumento } from "./Socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');
const botaoExcluir = document.getElementById('excluir-documento');

tituloDocumento.textContent = nomeDocumento || "Documento sem título";

selecionarDcocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
 emitirTextoTextoEditor({
  texto: textoEditor.value, 
  nomeDocumento});
});

function atualizarTextoEditor(texto) {
 textoEditor.value = texto;
}

botaoExcluir.addEventListener("click", () => {
  emitirExcluirDocumento(nomeDocumento);
})

function alertarERedicrecionar(nome) {
  if (nome === nomeDocumento) {
    alert(`O documento ${nome} foi excluído.`);
    window.location.href = '/';
  }
}

export { atualizarTextoEditor, alertarERedicrecionar};