const { response } = require ('express');
const user = require('../models/user');

const crearUsuario = async (req, res) => {
    //console.log(req.body);
   try{
       let usuario;

       //crea el nuevo usuario
       usuario = new user (req.body);

        //guardar usuario
        await usuario.save();

        res.send('Usuario creado correctamente');

   } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
   }
}

const loginUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}

const validarUsuario = (req, res) => {
    return res.json({
        ok: true,
        msg: 'validación'
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    validarUsuario
}