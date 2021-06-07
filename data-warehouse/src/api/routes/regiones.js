var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var regionesModel = require('../models/regionesModel');

router.get('/api/v1/regiones', authentication.verifyUser, async (req, res) => {

    try {
        const regiones = await actions.get(regionesModel.model);
        res.json({ 'Regiones': regiones });

    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.get('/api/v1/region/:id', authentication.verifyUser, async (req, res) => {

    try {
        const region = await actions.get(regionesModel.model, { _id: req.params.id });
        res.json({ 'Result': region });
    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.post('/api/v1/region', authentication.verifyUser, async (req, res) => {
    try {
        const region = await actions.create(regionesModel.model, req.body);
        res.json({ Message: `Region was successfully created`, Region: region, });

    } catch (err) {
        res.json({ Error: err.message })
    }
});

router.patch('/api/v1/region/id:', authentication.verifyUser, async (req, res) => {
    try {
        await actions.update(regionesModel.model, req.params.id, req.body);
        const regionUpdated = await actions.get(regionesModel.model, { _id: req.params.id });
        res.send(regionUpdated);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

router.delete('/api/v1/region/id:', authentication.verifyUser, async (req, res) => {
    // code here
});

module.exports = router;