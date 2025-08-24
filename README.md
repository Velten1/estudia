# 🎓 Estudia

Monorepo para um futuro ecossistema de estudos, combinando backend (Node.js + TypeScript + ArangoDB + GraphQL) e frontend (React + TypeScript + Vite).

> **Status:** Projeto em fase inicial — estrutura básica pronta, preparada para crescer e receber novas features.

---

## 🚀 Visão Geral

O Estudia nasce como uma base sólida e escalável. O objetivo é criar um ambiente moderno, flexível e organizado, facilitando a evolução e a adição de novas funcionalidades ao longo do tempo.

- **Backend:** Node.js, TypeScript, ArangoDB (orientado a grafos), GraphQL (Apollo Server)
- **Frontend:** React, TypeScript, Vite
- **Infra:** Docker para banco de dados

---

## 🔧 Tecnologias e Integrações

### Backend

- **Node.js + TypeScript** → estrutura tipada e robusta
- **ArangoDB** → banco orientado a grafos, integração via [arangojs](https://github.com/arangodb/arangojs)
- **GraphQL (Apollo Server)** → API principal
- **dotenv** → gerenciamento de variáveis de ambiente
- **Docker** → banco isolado e fácil de rodar

### Frontend

- **React + TypeScript + Vite** → SPA moderna, pronta para expansão
- **ESLint + Prettier** → padronização e consistência no código
- **Integração futura** → API GraphQL ainda não consumida, mas já preparada

### Infraestrutura

- **Docker Compose** → setup automatizado do ArangoDB
- **Volumes persistentes** → dados do ArangoDB armazenados em `docker-data/`

---

## 📂 Estrutura do Projeto

```
estudia/
  backend/    # API, lógica de negócio, integração com ArangoDB e GraphQL
    src/
      controllers/
      services/
      repositories/
      routes/
      entities/
      middlewares/
      utils/
      config/
      index.ts
    .env
    package.json
    tsconfig.json

  frontend/   # SPA em React + Vite
    src/
      App.tsx
      main.tsx
      assets/
      App.css
      index.css
      vite-env.d.ts
    public/
    package.json
    tsconfig.json

  compose.yaml
  README.md
```

---

## ⚡ Primeiros Passos

### Pré-requisitos

- Node.js 18+
- Docker (para rodar o ArangoDB)

### Subindo o Banco de Dados

```sh
docker run -d -e ARANGO_ROOT_PASSWORD=senha -p 8529:8529 arangodb:3.11
```

### Configuração do Backend

Crie o arquivo `backend/.env` com:

```env
ARANGO_URL=http://127.0.0.1:8529
ARANGO_USER=root
ARANGO_PASSWORD=senha
ARANGO_DB_NAME=estudia
```

### Rodando o Backend

```sh
cd backend
npm install
npm run dev
```

**Saída esperada:**

```
🚀 Servidor GraphQL rodando em: http://localhost:4000
```

### Rodando o Frontend

```sh
cd frontend
npm install
npm run dev
```

**Acesse no navegador (geralmente):**
👉 http://localhost:5173

---

## 📐 Convenções e Organização

- Estrutura MVC preparada no backend (healthcontrollers, services, repositories, etc.)
- TypeScript em todo o projeto
- Frontend criado via Vite, pronto para integração
- Banco orientado a grafos (ArangoDB) para flexibilidade
- Docker Compose para setup rápido do banco
- API GraphQL como padrão de comunicação

---

## 🗺️ Roadmap Inicial

- [x] Estrutura inicial do monorepo
- [x] Integração com ArangoDB via Docker
- [x] API GraphQL funcional no backend
- [ ] Integração real backend ↔ banco
- [ ] Primeira query GraphQL conectando dados reais
- [ ] Métricas por usuário (sessions, tópicos, streaks)
- [ ] Integração do frontend com GraphQL
- [ ] Primeiros componentes de UI
- [ ] Autenticação e autorização
- [ ] Testes automatizados

---

## 📌 Observações

Projeto ainda em fase inicial. O foco atual é padronização, base sólida e arquitetura limpa para facilitar a adição de funcionalidades no futuro.

**Contribuições, sugestões e experimentações são bem-vindas!** 🎉
