"use strict";
/* require('dotenv').config()
const {Sequelize} = require('sequelize')
const fs = require('fs')
const path  = require('path')
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env

const sequelize =  new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/todolist`, {
        logging: false,
        native:false
    }
)

const basename = path.basename(__filename)
const modelDefiners = []

// para leer todos los archivos de la carpeta models

fs.readdirSync(path.join(__dirname, '/models')).filter((file) =>
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
).forEach((file) => { modelDefiners.push(require(path.join(__dirname, '/models', file)))
    
});


//nos conectamos a sequalize
modelDefiners.forEach((model) => model(sequelize))
let entries = Object.entries(sequelize.models)
let capsEntries =  entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1]
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Todolist} = sequelize.models
// Aca vendrian las relaciones
module.exports = {
    ...sequelize.models,//para importar los modelos
    conn: sequelize//para importar la conexion conn
} */
//# sourceMappingURL=db.js.map