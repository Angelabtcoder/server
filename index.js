const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//servidor
const app = express();

//Conectamos a la BD
conectarDB();  
app.use(cors());

app.use(express.json()); 

app.use('/api/news', require('./routes/news'));

app.use('/api/archived', require('./routes/archived'));


//Definimos ruta pricipal
//app.get('/', (req, res) => { res.send('Hola Mundo')})

app.listen(3000, () => { 
    console.log('Server is listening on port 3000');
})