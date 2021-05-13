const express = require('express') // trae el modulo de express para poder montar el servidor
const path = require('path')
const app = express()
publicPath = path.join(__dirname, 'public') // indica que la ruta contiene recursos estaticos para consumir de manera sencilla
console.log(publicPath) // nos da por consola la ruta del public

app.use(express.static(publicPath));

app.listen(3030, () => console.log('Servidor corriendo ')) // levantamos una server en localhost

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/home.html'))
});