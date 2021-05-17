require('dotenv').config();

const development = require('./development');
const production = require('./production');
const QA = require('./qa');

const {NODE_ENV} = process.env;

let current_env = development;

if (NODE_ENV == 'production') {
	current_env = production;
} else if (NODE_ENV == 'qa') {
	current_env = QA;
}

module.exports = current_env;
