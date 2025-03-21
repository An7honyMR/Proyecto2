var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Foto = require('../models').foto;
const Etiqueta = require('../models').etiqueta;

router.get('/findAll/json',
    function (req, res, next) {
        Foto.findAll({
            attributes: {
                exclude:
                    ["updatedAt", "createdAt"]
            },
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: { attributes: [] }
            }],
        })
            .then(fotos => {
                res.json(fotos);
            })
            .catch(error =>
                res.status(400).send(error))
    }
);

