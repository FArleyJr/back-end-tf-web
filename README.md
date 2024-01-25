# back-end-tf-web
Back-End do trabalho final da disciplina de WEB

Grupo
Farley
Davi
Eliarito
Vinicius
Hugo
Luiz Eduardo


Usuário
Altera dados de um determinado usuário
Endpoint:https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/usuario
Tipo da requesição:Put
Body:

Usuário
Deleta um determinado usuário do banco de dados
Endpoint:https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/usuario/id
Tipo da requisição: Delete 
Body: 

Usuário
Mostra dados de um determinado usuário
Endpoint: https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/usuario/id
Tipo da requisição: get
Body: 

Usuário
Obtém/consulta o usuário ou os usuários do banco de dados
Endpoint: https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/usuarios
Tipo da requisição: Get
Body: 

Usuário
Insere uma nova linha (um novo usuário) no banco de dados
Endpoint: https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/usuario
Tipo da requisição: post
Body:
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email_usuario@email.com"
}

Evento
Colocar um novo evento no site 
Endpoint:https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/evento
Tipo da requisição: Post
Body: 
{
  "nome":" ",
  "preco":"50",
  "data":"11/1/2024",
  "local":"Rua 0",
  "decricao":"Descrição"
}

Evento
Consultar/pegar um evento cadastrado
Endpoint:https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/evento/id
Tipo da requisição: delete
Body:

Evento
Mostrar eventos que já estão caadstrados
Endpoint: https://sturdy-space-capybara-6jpvpx9rr7434qg-3000.app.github.dev/eventos
Tipo da requisição: Get
Body:

Link do modelo Conceitual
(![Modelo Conceitual](db/modeloConceitual0.jpg))

Link do modelo Lógico
(![Modelo Lógico](<db/modeloLógico (1).jpg>))

Link do modelo Físico
([Modelo Físico](db/DDL.sql))

FERRAMENTAS USADAS: BrMODELO E NEON TECH