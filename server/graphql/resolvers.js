const axios = require('axios');
const db = require('../../db.json')

const resolvers = {
    Query: {
        user: async (parent, args) => {
            try {
                const request = await axios.get(`http://localhost:9000/user/${args.id}`);
                return request.data;
            } catch (error) {
                throw error;
            }
        },
        users: async () => {
            try {
                const request = await axios.get(`http://localhost:9000/user/`);
                const delayed = await new Promise(resolve => {
                    setTimeout(() => {
                        resolve(request)
                    }, 500)
                })
                return delayed.data;
            } catch (error) {
                throw error;
            }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            try {
                const request = await axios.post(`http://localhost:9000/user/`, {
                    ...args.data
                });
                return request.data;
            } catch (error) {
                throw error;
            }
        },
        updateUser: async (parent, args) => {
            let data = {}
            if (args.data.id !== undefined) { data.id = args.data.id }
            if (args.data.name !== undefined) { data.name = args.data.name }
            if (args.data.role !== undefined) { data.role = args.data.role }

            const response = await axios.patch(`http://localhost:9000/user/${args.data.id}`, data);
            return response.data
        },
        deleteUser: async (parent, args) => {
            const response = await axios.delete(`http://localhost:9000/user/${args.id}`);
            if (Object.keys(response.data).length === 0) {
                return true;
            }
            return false;
        }
    },
    User: {
        product: async (parent) => {
            const response = await axios.get(`http://localhost:9000/product?producerid=${parent.id}`);
            const promise = response.data.filter((product) => product.producerId === parent.id)
            return promise
        },
    }
};

module.exports = resolvers;