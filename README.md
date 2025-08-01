# 📚 Student Management App

Aplicação Fullstack para cadastro e busca de estudantes. Usuários podem registrar um estudante com nome e nota (de 0 a 10), visualizar todos os estudantes cadastrados e buscar por ID. A aplicação exibe também uma letra única do nome de cada estudante, quando aplicável.

---

## 🧰 Tecnologias Utilizadas

### Backend:
- [NestJS](https://nestjs.com/)
- TypeScript
- Class Validator (`class-validator`, `class-transformer`)

### Frontend:
- React
- Axios
- React Router
- CSS Modules

---

## 🚀 Funcionalidades

- ✅ Cadastro de estudante com nome e nota  
- ✅ Validação de dados no backend e frontend  
- ✅ Busca por ID  
- ✅ Exibição da lista de todos os estudantes  
- ✅ Modal de sucesso/erro  
- ✅ Exibição da **primeira letra única** do nome do estudante  
- ✅ Responsivo e com navegação entre telas  

---

## 🧪 Pré-requisitos

- Node.js 18+
- Yarn ou npm
- Git

---

## 🔧 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

### 2. Rodar o Backend

```bash
cd backend
npm install
# ou
yarn
npm run start
```

> O servidor será iniciado em: [http://localhost:3000](http://localhost:3000)

---

### 3. Rodar o Frontend

```bash
cd frontend
npm install
# ou
yarn
npm run dev
```

> A aplicação React estará disponível em: [http://localhost:5173](http://localhost:5173)

⚠️ ATENÇÃO: O arquivo do projeto está configurado pro **Ubuntu no WSL**.

⚠️ Se não estiver utilizando Linux, substitua por `localhost`.

⚠️ Se estiver usando **Ubuntu no WSL**, mas deseja verificar seu IP local para colocar no arquivo `frontend/src/api.js`, siga o comando abaixo:

Para descobrir seu IP local (WSL):

```bash
ip addr show eth0 | grep inet
```

api.js:

```js
// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU-IP-LOCAL:3000',
});

export default api;
```


---

## 🖼️ Estrutura de Pastas (resumo)

```
.
├── backend
│   └── src
│       ├── students
│       └── main.ts
├── frontend
│   └── src
│       ├── components
│       ├── pages
│       ├── api.js
│       └── App.jsx
```

---

## ✅ Validações

### Backend
- Nome obrigatório
- Nota obrigatória entre 0 e 10
- Busca por ID com tratamento de erro

### Frontend
- Impede envio com nota fora do intervalo
- Input `type="number"` com `min` e `max`
- Mensagens claras em modal

---

## 💡 Melhorias Futuras

- Persistência com banco de dados (ex: PostgreSQL)
- Testes automatizados
- Deploy na nuvem
- Edição e exclusão de estudantes
- Autenticação

---

## 🧑‍💻 Autor

**Max Barros**  
[LinkedIn](https://www.linkedin.com/in/max-barros/)  
📧 rmaxbarros@gmail.com
