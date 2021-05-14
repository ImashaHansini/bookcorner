const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Imasha:bookcorner@123@cluster0.qz07u.mongodb.net/book-corner?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log('Connected with mongoDB')
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB