import { atualizaDocumento, encontrarDocumento } from './documentosDB.js';
import io from './servidor.js';


io.on('connection', (socket) => {
  console.log('Usuário conectado. ID:', socket.id);

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
        devolverTexto(documento.texto);
    }
});

  socket.on('texto_editor', async ({texto, nomeDocumento}) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);
    
    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit('texto_editor_clentes', texto);
    }
    
  });
});
