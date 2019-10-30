const express = require('express');

const server = express();
server.use(express.json()); //usar para o express entender o json 

// localhost:3000/teste

// 3 tipos de parametros 
//Query params = ?teste=1  formato com ponto de interrogaçao
// server.get('/teste' , (req , res) => {
// const nome = req.query.nome; 
//  return res.json({message: `hello ${nome}`});
// })

// Route params = /users/1  parametro com id, quando  UTILIZAR O : na requisiçao na url significa que vem um id por parametro
// server.get('/users/:id' , (req , res) => {
//     const {id} = req.params;
//      return res.json({message: `Buscando um usuario ${id}`});
//     })

//Request body = {"marcos","email: "marcos@rocketseat.com.br"} 
const users = ['diego', 'vanille','victor']; // variavel 

server.use((req, res, next) => { 
    console.log(`Metodo:${req.method}; URL: ${req.url}; `);

    return next();
   });

//users esta listando todos
server.get('/users/' , (req , res) => {  
 
     return res.json(users);
})

//:index pegar a requisiçao por id
server.get('/users/:index' , (req , res) => { 
    const {index} = req.params;  

     return res.json(users[index]);

    })


//esse metodo permite inserir um usuario
server.post('/users', (req,res) => {
const {name} = req.body;

users.push(name);

return res.json(users);
});

//esse metodo permite editar o usuario no insomnia
server.put('/users/:index' , (req,res) =>{

    const {index} = req.params;
    const {name} = req.body;

    users[index] = name;

    return res.json(users);
});
//esse metodo deleta um usuario no insomnia
server.delete('/users/:index',(req,res) =>{

const {index} = req.params

users.splice(index,1); //splice serve para verificar qual id precisa ser deletado

return res.send(); 


})


server.listen(3000);


  