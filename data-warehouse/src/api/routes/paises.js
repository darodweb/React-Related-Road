var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var paisesModel = require('../models/paisesModel');
var regionesModel = require('../models/regionesModel');


//Este funciona
router.get('/paises/:idRegion', /*authentication.verifyUser,*/ async (req, res) => {
    const pais = await actions.get(paisesModel.model, { idRegion: req.params.idRegion });
    res.send(pais);
});

//VERIFY THIS ENDPOINT. NOT RETURNING REGION
router.get('/paises', /*authentication.verifyUser,*/ async (req, res) => {
    const paises = await paisesModel.model.aggregate([
        {
            "$lookup": {
                "from": "regiones",
                "localField": "idRegion",
                "foreignField": "_id",
                "as": "region"
            }
        }
    ]).exec();
    // const paises = await paises.find();
    res.send(paises);
});

router.post('/pais', /*authentication.verifyUser,*/ async (req, res) => {
    const pais = await actions.create(
        paisesModel.model,
        req.body);
    res.send(pais);
});

router.put('/something', authentication.verifyUser, async (req, res) => {
    // code here
});

router.delete('/something', authentication.verifyUser, async (req, res) => {
    // code here
});

module.exports = router;