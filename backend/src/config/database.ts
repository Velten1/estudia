import { Database as ArangoDB } from "arangojs";
import { DocumentCollection } from "arangojs/collection.js";

const ARANGO_URL = process.env.ARANGO_URL || "http://127.0.0.1:8529/";
const ARANGO_USERNAME = process.env.ARANGO_USERNAME || process.env.ARANGO_USER || "root";
const ARANGO_PASSWORD = process.env.ARANGO_PASSWORD || process.env.ARANGO_ROOT_PASSWORD || "";
const ARANGO_DB_NAME = process.env.ARANGO_DB_NAME || "estudia";

// variaveis para reuso
let dbGuardada: ArangoDB | null = null;
let collectionsGuardadas: { users: DocumentCollection; tasks: DocumentCollection } | null = null;

// garante que o estudia esta sendo criado
async function ensureDatabaseExists() {
  const sys = new ArangoDB({ url: ARANGO_URL }); // cliente no servidor
  sys.useBasicAuth(ARANGO_USERNAME, ARANGO_PASSWORD); // login
  await sys.version(); // checkpoint de erros
  const dbs = await sys.listDatabases(); // bancos existentes
  if (!dbs.includes(ARANGO_DB_NAME)) {
    await sys.createDatabase(ARANGO_DB_NAME); // cria se faltar
  }
}

// dentro de estudia, checa collections
async function ensureCollections(db: ArangoDB) {
  const users = db.collection("users");
  if (!(await users.exists())) await users.create(); // cria se faltar

  const tasks = db.collection("tasks");
  if (!(await tasks.exists())) await tasks.create();

  collectionsGuardadas = { users, tasks }; // guarda para reuso
}

// inicializa o banco
export async function initDatabase() {
  // se já tem conexão + collections, retorna
  if (dbGuardada && collectionsGuardadas) {
    return { db: dbGuardada, collections: collectionsGuardadas };
  }

  // garante que o estudia existe
  await ensureDatabaseExists();

  // criando conexão definitiva e logando
  const db = new ArangoDB({ url: ARANGO_URL, databaseName: ARANGO_DB_NAME });
  db.useBasicAuth(ARANGO_USERNAME, ARANGO_PASSWORD);

  // garante collections dentro de estudia
  await ensureCollections(db);

  // guarda conexão para ser utilizada em resolvers
  dbGuardada = db;

  // devolte tudo pronto
  return { db: dbGuardada, collections: collectionsGuardadas! };
}

// retorna a conexão
export function getDb(): ArangoDB {
  if (!dbGuardada) throw new Error("ArangoDB não inicializado: chame initDatabase() no boot.");
  return dbGuardada;
}

// retorna collections guardadas
export function getCollections(): { users: DocumentCollection; tasks: DocumentCollection } {
  if (!collectionsGuardadas)
    throw new Error("Collections não inicializadas: chame initDatabase() no boot.");
  return collectionsGuardadas;
}
