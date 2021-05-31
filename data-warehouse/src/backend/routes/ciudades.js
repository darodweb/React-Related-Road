var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
// var authentication = require('../authentication');
// var ciudadesModel = require('../models/ciudadesModel');


//VERIFY THIS PART
// const mongoose = require('mongoose');
// // mongoose.connect('mongodb+srv://acamica123:acamica123@warehouse.qanab.mongodb.net/Warehouse?retryWrites=true&w=majority');

// const schema = {
//     ciudad: String,
//     pais: String
// }

// const Ciudad = mongoose.model('Ciudades', schema);

//THIS CODE WORKS!!
router.get('/ciudades', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        const ciudades = await Ciudad.find();
        console.log(ciudades)
        res.send(ciudades);
    } catch (err) {
        res.json({ message: err })
    }

});


//VERIFY THIS CODE!!
router.post('/ciudad', /*authentication.verifyUser,*/ async (req, res) => {
    let Newciudad = new Ciudad({
        ciudad: req.body.ciudad,
        pais: req.body.pais
    });

    try {
        Newciudad.save();
        res.redirect('/');
    } catch (err) {
        res.json({ message: err })
    }


    // res.status(201).json({ Message: 'Ciudad creada satisfactoriamente.', ciudad: req.body })
});

// router.put('/something', authentication.verifyUser, async (req, res) => {
//     // code here
// });

// router.delete('/something', authentication.verifyUser, async (req, res) => {
//     // code here
// });

module.exports = router;