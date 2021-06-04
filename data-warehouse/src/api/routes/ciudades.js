var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
// var authentication = require('../authentication');
var ciudadesModel = require('../models/ciudadesModel');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


router.get('/ciudades/:idPais', /*authentication.verifyUser,*/ async (req, res) => {
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
    res.send(ciudades);
});

//THIS CODE WORKS!!
// router.get('/ciudades', /*authentication.verifyUser,*/ async (req, res) => {

//     try {
//         const ciudades = await Ciudad.find();
//         console.log(ciudades)
//         res.send(ciudades);
//     } catch (err) {
//         res.json({ message: err })
//     }

// });


//VERIFY THIS CODE!!
router.post('/ciudad', /*authentication.verifyUser,*/ async (req, res) => {
    const ciudad = await actions.create(
        ciudadesModel.model,
        req.body);
    res.send(ciudad);
});

// router.put('/something', authentication.verifyUser, async (req, res) => {
//     // code here
// });

// router.delete('/something', authentication.verifyUser, async (req, res) => {
//     // code here
// });

module.exports = router;