const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { CONNECTIONSTRING: connectString, SECRETSESSION: secret } = require('./config');

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        app.emit('Pronto');
    }).catch(e=>console.log(e));


const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: secret,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    saveUninitialized: true
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//nossos próprios middleware
app.use(middlewareGlobal);
app.use(routes);

app.on('Pronto', ()=>{
    app.listen(3000, ()=>{
        console.log('Acessar: http://localhost:3000');
        console.log('Servidor rodando!');
    });
});

