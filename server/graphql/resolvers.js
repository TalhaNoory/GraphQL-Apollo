const axios = require('axios');

const resolvers = {
    Query: {
        user: async (parent, args, context, info) => {
            try {
                const request = await axios.get(`http://localhost:9000/user/${args.id}`);
                return request.data;
            } catch (error) {
                throw error;
            }
        },
        users: async (parent, args, context, info) => {
            try {
                const request = await axios.get(`http://localhost:9000/user/`);
                const delayed = await new Promise(resolve => {
                    setTimeout(() => {
                        resolve(request)
                    }, 500)
                })
                return request.data;
            } catch (error) {
                throw error;
            }
        },
    },
    Mutation: {
        addUser: async (parent, args, context, info) => {
            try {
                const request = await axios.post(`http://localhost:9000/user/`,{
                    ...args.data
                });
                return request.data;
            } catch(error) {
                throw error;
            }
        }
    }
};

module.exports = resolvers;