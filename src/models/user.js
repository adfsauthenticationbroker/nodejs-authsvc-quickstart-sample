/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */
/*
const uuid = require('uuid/v4');
'use strict';
module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        userid: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
        givenname: DataTypes.STRING,
        surname: DataTypes.STRING,
        emailaddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        displayname: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
        {
            indexes: [
                {
                    unique: true,
                    fields: ['email']
                }
            ]
        });

    return User;
};

*/
/*
module.exports = (sequelize, DataTypes) => {
	let User = sequelize.define('User', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: () => uuid()
		},
		name: DataTypes.STRING,
		surname: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		indexes: [
			{
				unique: true,
				fields: ['email']
			}
		]
	});
    
	return User;
};
*/
