import io from './servidor.js';

const documentos = [
  { nome: 'JavaScript',
    texto: 'texto de javascript'
  },
  {
    nome: 'Node.js',
    texto: 'texto de node.js' 
  },
  {
    nome: 'Socket.IO',
    texto: 'texto de socket.io'
  }
]

io.on('connection', (socket) => {
  console.log('Usuário conectado. ID:', socket.id);

  socket.on('selecionar_documento', (nomeDocumento) => {
    const documento = encontrarDocumento(nomeDocumento);

    console.log(documento);

    socket.join(nomeDocumento);
  });

  socket.on('texto_editor', ({texto, nomeDocumento}) => {
    // socket.broadcast.emit('texto_editor_clentes', texto);
  
    socket.to(nomeDocumento).emit('texto_editor_clentes', texto);
  });
});

function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome
  });

  return documento;
}