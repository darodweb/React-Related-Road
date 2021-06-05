var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
// var authentication = require('../authentication');
var ciudadesModel = require('../models/ciudadesModel');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.get('/ciudades', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        const ciudades = await ciudadesModel.model.aggregate([
            {
                "$lookup": {
                    "from": "paises",
                    "localField": "idPais",
                    "foreignField": "_id",
                    "as": "pais"
                }
            }
        ]).exec()
        res.send(ciudades);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }
});

//Trae todas las ciudades por pais
router.get('/ciudades/:idPais', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const ciudades = await ciudadesModel.model.aggregate([
            {
                "$match": { idPais: ObjectId(req.params.idPais) },
            },
            {
                "$lookup": {
                    "from": "paises",
                    "localField": "idPais",
                    "foreignField": "_id",
                    "as": "pais"
                }
            }
        ]).exec()
        const resultado = ciudades.length;
        console.log(resultado)
        res.send(ciudades);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});

//Trae una ciudad por ID
router.get('/ciudad/:idCiudad', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const ciudad = await actions.get(ciudadesModel.model, { _id: req.params.idCiudad });
        res.send(ciudad);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});

router.post('/ciudad', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const ciudad = await actions.create(
            ciudadesModel.model,
            req.body);
        res.send(ciudad)
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }

});

// router.put('/something', authentication.verifyUser, async (req, res) => {
//     // code here
// });

// router.delete('/something', authentication.verifyUser, async (req, res) => {
//     // code here
// });

module.exports = router;