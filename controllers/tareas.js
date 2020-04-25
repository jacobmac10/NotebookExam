var { Tarea } = require('./../models/tareas');
var controller = {};


controller.index = (req, res) => {

    (async() => {
        try {
            //Código
            let tareas = await Tarea.findAll();




            res.render('index', { title: 'inicio', tareas: tareas });

        } catch (err) {
            //Imprimir error
            console.error('Error en X', err);

            //Manejar error
        }
    })();
};

controller.nuevatareaPost = (req, res, next) => {
    (async() => {
        try {
            //Código
            let title = req.body.title;
            let body = req.body.body;
            let tareas = { title: title, body: body };

            await Tarea.create(tareas);
            res.redirect('/');



        } catch (err) {
            //Imprimir error
            console.error('Error en X', err);

            //Manejar error
        }
    })();
};
controller.borrartarea = (req, res, next) => {
    (async () => {
        try {
            let id = req.params.id;
            
            await Tarea.destroy({
                where: {
                    id: id
                }
            });

            res.redirect('/');
        } catch (err) {
            
        }
    })();
};




module.exports = controller;