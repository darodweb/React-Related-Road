const mongoose = require('mongoose');

const schema = {
    region: String,
}

module.exports.model = mongoose.model('Regiones', schema);
