/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

'use strict';

//const fs = require('fs');
const path = require('path');
//const Sequelize = require('sequelize');
//const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; 
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

console.log("config: " + JSON.stringify(config));
console.log("env: " + env);

/*
let sequelize;
if (config.use_env_variable) {
    console.log("this is an env 1: " + config.use_env_variable);
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
    console.log("sequelize 1: " + sequelize);

} else {
    console.log("this is an env 2: " + config.use_env_variable);
    sequelize = new Sequelize(config.database, config.username, config.password, config);
    console.log("sequelize 2: " + sequelize);

}

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
*/
module.exports = db;


/*
 * 
 * let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
 * 
 */
