const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public'); //uno la ruta absoluta

app.use(express.static(publicPath)) //esta linea le dice a nuestra aplicacion de express que queremos tener la carpeta public como un recurso de archivos estaticos y los podamos consumir de manera sencilla

app.listen(3000, () => 
console.log('Servidor corriendo en el puerto 3000')
);
