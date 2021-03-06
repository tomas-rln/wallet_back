require('dotenv').config();

module.exports = {
	PORT: process.env.PORT,
	DB: {
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
};
