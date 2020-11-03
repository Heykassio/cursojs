const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    }
});

class Home {

}

module.exports = Home;