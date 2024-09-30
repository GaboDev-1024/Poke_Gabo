express = require('express');
app = express();
indexRoutes = require('./Router/index');
usersRoutes = require('./Router/users');
const morgan = require('morgan');
const PORT = 3000;
//CONFIG'S
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/assets', express.static(__dirname + '/Public'));
app.use(express.static('Public'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
