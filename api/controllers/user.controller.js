class UserController{
	constructor(){

	}
	
	sayHello(req, res){
		return res.send({message:'Hello world!'});
	}
}

module.exports = UserController; 