var express = require('express');
var router = express.Router();
var tareasController = require('./../controllers/tareas');



/* GET home page. */
router.get('/', tareasController.index);

router.get('/new-entry', (req, res) => {
    res.render('new-entry', { title: 'nueva entrada' });
});

router.post('/new-entry', tareasController.nuevatareaPost);



router.get('/borrar/:id', tareasController.borrartarea);   






module.exports = router;