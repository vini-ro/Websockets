import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const cliente = new MongoClient(process.env.STRING_CONEXAO_DB);

let documentosColecao;

try {
  await cliente.connect();

const db = cliente.db("Alura-websockets");
documentosColecao = db.collection("documentos");

console.log("Conectado ao banco de dados");

} catch (erro) {
  console.log(erro);
}

export { documentosColecao };