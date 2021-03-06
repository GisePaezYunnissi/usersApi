const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    //hacerlo como el model del proyecto
    nombre: {
        type: String,
        required:true,
        trim:true

    },
    email: {
        type: String,
        required:true,
        trim:true,
        unique: true

    },
    password:{
        type: String,
        required:true,
        trim:true
    },
    registro:{
        type: String,
        default:Date.now()
    }
});

module.exports = mongoose.model('User', UsuariosSchema);