import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://admin:123@aluracluster.yyoob.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");

let documentosColecao;

try {
  await cliente.connect();

const db = cliente.db("alura-websockets");
documentosColecao = db.collection("documentos");

console.log("Conectado ao banco de dados");

} catch (erro) {
  console.log(erro);
}

export { documentosColecao };