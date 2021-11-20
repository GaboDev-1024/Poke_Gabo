const express = require ('express');
const { route } = require('.');
const router = express.Router();

router.get('/', function(req,res) {
    res.send('Hola mundo de Users')
})


router.get('/dos', function(req,res) {
    res.send('Perfilitos')
})

module.exports = router;