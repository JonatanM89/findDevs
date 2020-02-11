const axios = require('axios');
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    //index, show, store, update, destroy

    async index(request, response){
        const devs = await Dev.find()

        return response.json(devs)
    },

    async show(request, response){
        const { github_username } = request.params;
        const dev = await Dev.findOne( {github_username} )
        return response.json({dev})
    },

    async update(request, response){

    },

    async destroy(request, response){

    },

    async store(request,response){
        const  { github_username,techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const res = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = res.data

            const techsArray = parseStringAsArray(techs)

            const location = {
                type: "Point",
                coordinates : [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name, 
                avatar_url, 
                bio,
                techs : techsArray,
                location
            })
        }

        

        return response.json(dev);
    }
}