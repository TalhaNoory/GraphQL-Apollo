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
        },
        updateUser: async (parent, args, context, info) => {
            let data = {}
            if(args.data.id !== undefined) {data.id = args.data.id}
            if(args.data.name !== undefined) {data.name = args.data.name}
            if(args.data.role !== undefined) {data.role = args.data.role}

            const response = await axios.patch(`http://localhost:9000/user/${args.data.id}`, data);
            return response.data
        },
    }
};

module.exports = resolvers;