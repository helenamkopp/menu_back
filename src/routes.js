const express = require('express');
const routes = express.Router();

const PlateController = require('./controlles/PlateController')

routes.get('/plates', PlateController.index);
routes.get('/plates/:id', PlateController.show);
routes.post('/plates', PlateController.store);
routes.put('/plates/:id', PlateController.update);
routes.delete('/plates/:id', PlateController.destroy);


module.exports = routes;