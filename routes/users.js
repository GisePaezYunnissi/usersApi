const { Router } = require ('express');
const { crearUsuario, loginUsuario, validarUsuario } = require('../controllers/authenticator');

const router = Router();

// Crear un nuevo usuario
router.post('/register', crearUsuario);

// Login de usuario
router.post('/', loginUsuario);

// Validar y revalidar token
router.get('/reregister', validarUsuario);

module.exports = router;