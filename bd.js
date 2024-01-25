//bd.js
import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}

async function selectEventos() {
  const client = await connect();
  const res = await client.query("SELECT * FROM evento");
  return res.rows;
}

async function selectEvento(id) {
  const client = await connect();
  const query = "SELECT * FROM evento WHERE id = $1";
  const evento = [id];
  const res = await client.query(query, evento);
  return res.rows;
}


async function deleteEvento(id) {
  const client = await connect();
  const query = "DELETE FROM evento WHERE id = $1";
  await client.query(query, [id]);
}

async function deleteUsuario(id) {
  const client = await connect();
  const query = "DELETE FROM usuario WHERE id = $1";
  await client.query(query, [id]);
}

async function insertEvento(data) {
  const client = await connect();
  const query = "INSERT INTO Evento (nome, preco, data, descricao, local) VALUES ($1,$2,$3,$4,$5) ";
  const evento = [data.nome, data.preco, data.data, data.descricao, data.local];
  await client.query(query, evento);
}


//bd.js
async function selectUsuario(id) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  return res.rows;
}

async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}

async function insertUsuario(data) {
  const client = await connect();
  const query = "INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3) ";
  const usuario = [data.nome, data.senha, data.email];
  await client.query(query, usuario);
}


async function updateUsuario(data) {
  const client = await connect();
  const query = "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const usuario = [data.nome, data.email, data.senha, data.id];
  await client.query(query, usuario);
}

//bd.js
export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario, selectEvento, selectEventos, deleteEvento, insertEvento };