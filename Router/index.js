const express = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.render('inicio')
})

router.get('/types', function(req,res){
    res.render('types')
})



module.exports = router;