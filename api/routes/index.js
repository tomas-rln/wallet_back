const {Router} = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const compression = require('compression');

//Injecting dependencies
module.exports = function({ UserRoutes }){
	const router = Router(); 
	const apiRoute = Router(); 

	apiRoute.use(cors())
		.use(bodyParser.json())
		.use(compression());

	//Specific routes
	apiRoute.use('/user', UserRoutes); 

	//General routes
	router.use('/api', apiRoute); 

    
	return router; 
};