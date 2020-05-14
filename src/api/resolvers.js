const db = require('../config/database');

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('user').where({ id }).first();
        },

        async getUsers() {
            return await db('user');
        }
    }, 
    Mutation: {
        async createUser(_, { input }) {
            const user = await db('user').insert({
                name: input.name,
                email: input.email,
                password: input.password
            });

            const id = user[0];
            return await db('user').where({ id }).first();
        }
    }
};