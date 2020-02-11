const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        //buscar devs num raio de 10 km
        const { latitude, longitude, techs} = request.query;
        const techsAarray =  parseStringAsArray(techs)

        const devs = await Dev.find({
            techs : {
                $in : techsAarray,
            },
            location: {
                $near : {
                    $geometry : {
                        type : 'Point',
                        coordinates : [longitude,latitude]
                    },
                    $maxDistance: 10000
                }
            }
        })

        return response.json({ devs })
    },
}