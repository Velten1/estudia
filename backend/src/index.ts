import "dotenv/config";

import { initDatabase } from "./config/database.js";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers/index.js";
import { createContext } from "./graphql/context.js";

async function main() {
  try {
    // função de inicialização em database.ts
    await initDatabase();

    // cria o servidor graphql (schema + resolvers)
    const server = new ApolloServer({ typeDefs, resolvers });

    // sobe HTTP, define porta e como criar o context por req
    const { url } = await startStandaloneServer(server, {
      listen: { port: Number(process.env.PORT) || 4000 },
      context: async () => createContext(),
    });

    // onde acessar
    console.log(`🚀 Servidor GraphQL rodando em: ${url}`);
  } catch (err: any) {
    // catch para erros
    console.error("❌ Erro ao iniciar aplicação:", err.message);
    process.exit(1);
  }
}

main();
