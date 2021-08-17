var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var regionesModel = require('../models/regionesModel');


//Trae todas las regiones
router.get('/api/v1/regiones', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        const regiones = await actions.get(regionesModel.model);
        res.send(regiones);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Trae una  region por ID
router.get('/api/v1/region/:id', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        const region = await actions.get(regionesModel.model, { _id: req.params.id });
        if (region.length <= 0) {
            res.json({ Message: "Region not found" })
        } else {
            res.json(region);
        }

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Crea una nueva region
router.post('/api/v1/region', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const region = await actions.create(regionesModel.model, req.body);
        res.json({ Message: `Region was successfully created`, Region: region, });

    } catch (err) {
        res.json({ Error: err.message })
    }
});

// Actualiza una region por ID
router.put('/api/v1/region/:id', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        await actions.update(regionesModel.model, req.params.id, req.body);
        const regionUpdated = await actions.get(regionesModel.model, { _id: req.params.id });
        res.send(regionUpdated);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Actualiza un campo de region por ID
router.patch('/api/v1/region/:id', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        await actions.update(regionesModel.model, req.params.id, req.body);
        const regionUpdated = await actions.get(regionesModel.model, { _id: req.params.id });
        res.send(regionUpdated);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Elimina region por ID
router.delete('/api/v1/region/:id', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        await actions.delete(regionesModel.model, req.params.id, req.body);
        res.json({ Message: 'Region deleted successfully.' });

    } catch (err) {
        req.json({ Error: err.message })
    }

});

module.exports = router;