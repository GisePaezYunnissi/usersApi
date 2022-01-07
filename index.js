const express = require ('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectar a la base de datos
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 3000;

app.use('/api/users', require('./routes/users'));

//arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
