const { Router } = require('express')
const routes = Router();
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/dev/:github_username', DevController.show);

routes.get('/search', SearchController.index)

module.exports = routes;


//Métodos HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARAMETROS

//Query Params => req.query (Filtros, ordenação, paginação etc)
//Route Params => request.params (identificar um recurso de alteração ou remoção etc)
//Body => request.body
