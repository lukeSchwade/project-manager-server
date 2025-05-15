//db code
const mongoose = require('mongoose');

//Connect to MongoDB
const connectDB = async (serverURI: string) => {
    try {
        //The name of the server is based on the URI below
        await mongoose.connect(`${serverURI}/commentDB?retryWrites=true&w=majority&appName=Cluster1"`, {
        });
        console.log('connected to mongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        //Exit Node.js global process
        process.exit(1);
        
    }
}

module.exports = connectDB;