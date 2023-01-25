const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const URI = process.env.DB_MONGO

const conectarDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('BD Conectada');
    } catch (error) {
        console.log(error)
        process.exit(1) //todo: detenemos la app
    }
}

module.exports = conectarDB