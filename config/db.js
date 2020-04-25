// Crear conexión con base de datos
const Sequelize = require('sequelize');
const sequelize = new Sequelize('tareas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Probar conexión
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// Exportar
module.exports = { sequelize };