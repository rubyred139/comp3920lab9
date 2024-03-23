const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = include("/databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);

const petType = sequelize.define(
	"pet_type",
	{
		pet_type_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		type: {
			type: Sequelize.STRING(50),
			allowNull: false,
			unique: true,
		},
	},
	{
		tableName: "pet_type",
		timestamps: false,
		singular: "pet_type",
		plural: "pet_type",
	}
);

module.exports = petType;
