const mongoose = require('mongoose')

const initMongoDB = async () => {
    const connect = await mongoose.connect(process.env.MongoDB_URI)
    console.log(`MongoDB is running at ${connect.connection.host}`)
}

module.exports = initMongoDB
