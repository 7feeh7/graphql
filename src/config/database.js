const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile);
module.exports = knex

// knex('user').insert({
//     name: 'Teste',
//     email: 'teste@teste.com',
//     password: 'teste'
// }).then(data => console.log(data))

// knex('user').where({ id: 2 }).then(result => console.log(result))