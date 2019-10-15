const express = require('express');

const server = express();

// localhost:3000/teste

// 3 tipos de parametros 
//Query params = ?teste=1  formato com ponto de interrogaçao
// server.get('/teste' , (req , res) => {
// const nome = req.query.nome;
//  return res.json({message: `hello ${nome}`});
// })

// Route params = /users/1  parametro com id 
// server.get('/users/:id' , (req , res) => {
//     const {id} = req.params;
//      return res.json({message: `Buscando um usuario ${id}`});
//     })

//Request body = {"marcos","email: "marcos@rocketseat.com.br"} 

const users = ['diego', 'vanille','victor']; // variavel
 
server.get('/users/:index' , (req , res) => {
    const {index} = req.params;
     return res.json(users[index]);
    })





server.listen(3000);


 