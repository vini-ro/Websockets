import { emitirTextoTextoEditor, selecionarDcocumento } from "./Socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');

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

export { atualizarTextoEditor };