var express = require('express');
var router = express.Router();
var actions = require('../database/actions/actions');
var authentication = require('../authentication');
var usuariosModel = require('../models/usuariosModel');


router.get('/api/v1/usuarios', authentication.verifyUser, async (req, res) => {
    const usuarios = await actions.get(usuariosModel.model);
    res.send(usuarios);
});

router.get('/api/v1/usuario/:id', authentication.verifyUser, async (req, res) => {
    const usuario = await actions.get(usuariosModel.model, { _id: req.params.id });
    res.send(usuario);
});


router.post('/api/v1/usuario', async (req, res) => {

    try {

        const newUserEmail = req.body.email;
        const existingUserEmail = await usuariosModel.model.find({ email: { $eq: newUserEmail } });
        if (existingUserEmail.length === 0) {
            const admin = await actions.create(
                usuariosModel.model,
                req.body);
            res.json({ Message: `Admin created successfully!`, Admin: `${admin}` });

        } else if (newUserEmail === existingUserEmail[0].email) {
            res.json({ Message: 'Please try with a different email2.' })
        }

    } catch (err) {
        res.json({ "Error creating new admin": err.message })
    }

});

router.patch('/api/v1/usuario/:id', authentication.verifyUser, async (req, res) => {
    await actions.update(usuariosModel.model, req.params.id, req.body);
    const usuarioUpdated = await actions.get(usuariosModel.model, { _id: req.params.id });
    res.send(usuarioUpdated);
});

router.delete('/api/v1/usuario/:id', authentication.verifyUser, async (req, res) => {
    await actions.delete(usuariosModel.model, req.params.id, req.body);
    res.json({ Message: 'Usuario deleted successfully.' });
});

module.exports = router;
