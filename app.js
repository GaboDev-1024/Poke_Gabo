express = require('express');
app = express();
indexRoutes = require('./Router/index');
usersRoutes = require('./Router/users');

//CONFIG'S
app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/assets', express.static(__dirname + '/Public'));
app.use(express.static('Public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(
  process.env.PORT || 5000, '0.0.0.0',()=>{console.log('iniciado en el puerto 5000(no dar bola)')}
  
);
