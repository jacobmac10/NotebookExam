const Sequelize = require('sequelize');
const Model = Sequelize.Model;


const { sequelize } = require('./../config/db');



class Tarea extends Model {}
Tarea.init({
    //Definir campos del modelo
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'tarea'
});

// Exportar modelo
module.exports = { Tarea };