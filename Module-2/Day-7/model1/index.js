const User = require('./user');
const Book = require('./book');
const UserBook = require('./userbook');  // Optional if you want to define a junction table

// Define Many-to-Many relationship
User.belongsToMany(Book, { through: UserBook, foreignKey: 'userId' });
Book.belongsToMany(User, { through: UserBook, foreignKey: 'bookId' });

module.exports = {
    User,
    Book,
    UserBook
};