// Опции для подключения к базе данных
module.exports = {

    connection: "mongodb+srv://taliban:Tolika86@myclaster.c3bo2.mongodb.net/retryWrites=true&w=majority",

    options: {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        autoIndex: true,
        // reconnectTries: Number.MAX_VALUE,
        // reconnectInterval: 500,
        //bufferMaxEntries: 0,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000
    }
}