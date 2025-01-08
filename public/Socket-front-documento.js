import { atualizarTextoEditor } from './documento.js';

const socket = io();

function selecionarDcocumento(nome) {
  socket.emit('selecionar_documento', nome, (texto) => {
    atualizarTextoEditor(texto);  });
}

function emitirTextoTextoEditor(dados) {
  socket.emit('texto_editor', dados);
}

socket.on('texto_editor_clentes', (texto) => {
  atualizarTextoEditor(texto);
})

function emitirExcluirDocumento(nome) {
  socket.emit('excluir_documento', nome);
}

export { emitirTextoTextoEditor, selecionarDcocumento, emitirExcluirDocumento };