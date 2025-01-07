import { atualizarTextoEditor } from './documento.js';

const socket = io();

function selecionarDcocumento(nome) {
  socket.emit('selecionar_documento', nome);
}

function emitirTextoTextoEditor(dados) {
  socket.emit('texto_editor', dados);
}

socket.on('texto_editor_clentes', (texto) => {
  atualizarTextoEditor(texto);
})

export { emitirTextoTextoEditor, selecionarDcocumento };