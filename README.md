# Estudia

Monorepo para um futuro ecossistema de estudos, combinando backend (Node.js + TypeScript + ArangoDB) e frontend (React + TypeScript + Vite).

> **Status:** Projeto em fase inicial — estrutura básica, pronto para crescer e receber muitas features.

---

## Visão Geral

O Estudia nasce como uma base sólida para evoluir rapidamente. O objetivo é criar um ambiente flexível, escalável e moderno, facilitando a adição de novas funcionalidades ao longo do tempo.

- **Backend:** Node.js, TypeScript, ArangoDB (orientado a grafos)
- **Frontend:** React, TypeScript, Vite
- **Infra:** Docker para banco de dados

---

## Estrutura do Projeto

```
estudia/
  backend/    # API, lógica de negócio, integração com ArangoDB
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

## Primeiros Passos

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

Saída esperada:
```
✅ Conectado ao Arango e usando DB: estudia.
```

### Rodando o Frontend

```sh
cd frontend
npm install
npm run dev
```

Acesse a URL exibida (geralmente http://localhost:5173).

---

## Convenções e Organização

- Estrutura MVC já preparada no backend (controllers, services, repositories, etc.)
- Frontend criado via Vite, pronto para componentes React e integração futura
- Uso de TypeScript em todo o projeto
- Banco orientado a grafos (ArangoDB) para máxima flexibilidade
- Docker Compose para facilitar o setup do banco

---

## Roadmap Inicial (exemplo de próximos passos)

- [ ] Fundamentos de GraphQL
- [ ] Conexão backend ↔ banco (queries reais)
- [ ] Primeira query no backend
- [ ] Métricas por usuário (sessions, tópicos, streaks)
- [ ] Início da API REST/GraphQL
- [ ] Primeiros componentes de UI
- [ ] Autenticação e autorização
- [ ] Testes automatizados

---

## Observações

Este projeto está em sua fase mais embrionária. O foco é padronização, base sólida e arquitetura limpa para permitir a adição de MUITAS features no futuro. Sinta-se à vontade para sugerir, contribuir e experimentar!