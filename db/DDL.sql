/* Lógico_1: */

CREAT TABLE Evento (
id serial PRIMARY KEY,
data DATE, 
nome VARCHAR, 
preco FLOAT, 
local VARCHAR,
descricao VARCHAR );

CREAT TABLE Usuario ( 
nome VARCHAR,
senha VARCHAR, 
email VARCHAR, 
id serial PRIMARY KEY,
fk_Evento_id INTEGER,
fk_Evento_id_INTEGER, 
fk_Evento_id INTEGER );

ALTE TABLE Usuario ADD CONSTRAINT FK_Usuario_2
FOREIGN KEY (fk_Evento_id, fk_Evento_id_, fk_Evento_id_)
REFERENCES Evento ( id, id, id)
ON DELETE RESTRICT;