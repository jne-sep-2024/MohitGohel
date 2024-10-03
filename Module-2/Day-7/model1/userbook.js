const Sequelize = require('sequelize');
const sequelize = require('../util1/database');

// Define the UserBook junction table
const UserBook = sequelize.define('userbook', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bookId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

// Do not reference User or Book here

module.exports = UserBook;

