var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var paisesModel = require('../models/paisesModel');

// Trae todos los paises por region
router.get('/api/v1/paises/:idRegion', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const pais = await actions.get(paisesModel.model, { idRegion: req.params.idRegion });
        res.send(pais);
    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Trae todas los paises
router.get('/api/v1/paises', /*authentication.verifyUser,*/ async (req, res) => {
    try {
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
        res.send(paises);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Crea un nuevo pais
router.post('/api/v1/pais', /*authentication.verifyUser,*/ async (req, res) => {
    try {
        const pais = await actions.create(paisesModel.model, req.body);
        res.json({ Message: "Pais created successfully", Pais: `${pais}` })
    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Actualiza un campo de pais por ID
router.patch('/api/v1/pais/:id', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        await actions.update(paisesModel.model, req.params.id, req.body);
        const paisUpdated = await actions.get(paisesModel.model, { _id: req.params.id });
        res.json({ Message: 'Pais updated successfully.', pais: `${paisUpdated}` })
    } catch (err) {
        res.json({ Error: err.message })
    }
});

//Actualiza un pais por ID
router.put('/api/v1/pais/:id', /*authentication.verifyUser,*/ async (req, res) => {

    try {
        await actions.update(paisesModel.model, req.params.id, req.body);
        const paisUpdated = await actions.get(paisesModel.model, { _id: req.params.id });
        res.json({ Message: 'Pais updated successfully.', Pais: `${paisUpdated}` })

    } catch (err) {
        res.json({ Error: err.message });
    }
});

//Elimina un pais por ID
router.delete('/api/v1/pais/:id', authentication.verifyUser, async (req, res) => {

    try {
        await actions.delete(paisesModel.model, req.params.id, req.body);
        res.json({ Message: 'Record was successfully deleted.' })
    } catch (err) {
        res.json({ Error: err.message })
    }
});

module.exports = router;