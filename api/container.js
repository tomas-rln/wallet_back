const { asClass, createContainer, asFunction, asValue } = require('awilix');
//configuration: 
const config = require('../config/environments');

const StartUp = require('./startup');
const Server = require('./server');

//controllers: 
const { UserController } = require('./controllers');

//routes:
const UserRoutes = require('./routes/user.routes');
const router = require('./routes');


const container = createContainer();

container.register({
	app: asClass(StartUp).singleton(),
	server: asClass(Server).singleton()
})
	.register({
		UserController: asClass(UserController).singleton()
	})
	.register({
		UserRoutes: asFunction(UserRoutes).singleton(),
		router: asFunction(router).singleton()
	})
	.register({
		config: asValue(config)
	});

module.exports = container;