const sequelize = require('./util1/database');
const { User, Book, UserBook } = require('./model1');
sequelize.sync()
    .then(result => {

        // async function addUserBook(username, bookId) {
        //     try {
        //         // Fetch user ID from user1 where username is 'mohitgohel'
        //         const user = await User.findOne({
        //             where: { username: username }
        //         });
        
        //         if (!user) {
        //             throw new Error('User not found');
        //         }
        
        //         const userId = user.id; // Get the user ID
        
        //         // Fetch the book ID from book1 (optional, if you already have it)
        //         const book = await Book.findOne({
        //             where: { bookname: bookId } // Assuming bookId is passed as an argument
        //         });
        
        //         if (!book) {
        //             throw new Error('Book not found');
        //         }
        
        //         // Insert the user ID and book ID into the userbooks table
        //         await UserBook.create({
        //             userId: userId,
        //             bookId: book.id // bookId from the fetched book
        //         });
        
        //         console.log('UserBook entry created successfully');
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // }
        
        // // Example usage
        // // addUserBook('mohitgohel', "Mohit");

        async function fetchBooksIssuedToUser(username) {
            try {
                // Step 1: Fetch the user ID where username is 'mohitgohel'
                const user = await User.findOne({
                    where: { username: username }
                });
        
                if (!user) {
                    throw new Error('User not found');
                }
        
                const userId = user.id;
        
                // Step 2: Fetch all book IDs issued to the user from userbooks table
                const userBooks = await UserBook.findAll({
                    where: { userId: userId },
                    attributes: ['bookId'] // We are only interested in the bookId column
                });
        
                if (userBooks.length === 0) {
                    console.log(`${username} has not issued any books`);
                    return;
                }
        
                // Extract all book IDs into an array
                const bookIds = userBooks.map(userBook => userBook.bookId);
        
                // Step 3: Fetch the details of books from the book1 table using the retrieved book IDs
                const books = await Book.findAll({
                    where: { id: bookIds } // Get books where id is in the list of bookIds
                });
        
                if (books.length > 0) {
                    console.log(`Books issued to ${username}:`);
                    books.forEach(book => {
                        console.log(`- Book ID: ${book.id}, Book Name: ${book.bookname}, Author: ${book.bookauthor}, Category: ${book.bookcategory}`);
                    });
                } else {
                    console.log(`No books found for user ${username}`);
                }
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }
        fetchBooksIssuedToUser('mohitgohel');        
        console.log('Database synced');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
