const mongoose = require('mongoose');

const schema = {
    ciudad: String,
    pais: String
}

module.exports.model = mongoose.model('Ciudades', schema);
