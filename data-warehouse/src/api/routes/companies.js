var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var companiesModel = require('../models/companiesModel');


//Trae todas las compañias de la BD
router.get('/api/v1/companies', /* authentication.verifyUser,*/ async (req, res) => {

    try {
        const companies = await companiesModel.model.aggregate([
            {
                "$lookup": {
                    "from": "ciudades",
                    "localField": "idCiudad",
                    "foreignField": "_id",
                    "as": "ciudad"
                }
            }
        ]).exec()
        res.send(companies);
    } catch (err) {
        res.json({ Message: `Error: ${err.message}` })
    }
});

//Trae una compañia por ID
router.get('/api/v1/company/:id', authentication.verifyUser, async (req, res) => {

    try {
        const company = await actions.get(companiesModel.model, { _id: req.params.id });
        if (company.length <= 0) {
            res.json({ Message: "Company not found" })
        } else {
            res.json({ 'Result': company });
        }

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Crea una nueva compañia
router.post('/api/v1/company', authentication.verifyUser, async (req, res) => {
    try {
        const company = await actions.create(companiesModel.model, req.body);
        res.json({ Message: `Company was successfully created`, Company: company, });

    } catch (err) {
        res.json({ Error: err.message })
    }
});

//Actualiza una compañia por ID
router.put('/api/v1/company/:id', authentication.verifyUser, async (req, res) => {
    try {
        await actions.update(companiesModel.model, req.params.id, req.body);
        const companyUpdated = await actions.get(companiesModel.model, { _id: req.params.id });
        res.send(companyUpdated);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Actualiza un campo de una compañia por ID
router.patch('/api/v1/company/:id', authentication.verifyUser, async (req, res) => {
    try {
        await actions.update(companiesModel.model, req.params.id, req.body);
        const companyUpdated = await actions.get(companiesModel.model, { _id: req.params.id });
        res.send(companyUpdated);

    } catch (err) {
        res.json({ Error: err.message })
    }

});

//Elimina una compañia por ID
router.delete('/api/v1/company/:id', authentication.verifyUser, async (req, res) => {
    try {
        await actions.delete(companiesModel.model, req.params.id, req.body);
        res.json({ Message: 'Company deleted successfully.' });

    } catch (err) {
        req.json({ Error: err.message })
    }

});

module.exports = router;