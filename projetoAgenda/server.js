const express = require('express');//importando o express
const app = express();//executando o express
const mongoose = require('mongoose');//importando o mongoose
const { CONNECTIONSTRING: connectString, SECRETSESSION: secret } = require('./config');//importando a connection string do mongodb e a secret do express-session


mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })//iniciando a conexão do mongoose
    .then(()=>{//o mongoose.connect retorna uma promisse, por isso o then/catch
        app.emit('Pronto');//quando a conexão estiver estabelecida, o app emite um alerta pra avisar o servidor pra iniciar
    }).catch(e=>console.log(e));


const session = require('express-session');//importando o session
const MongoStore = require('connect-mongo')(session);//para salvar as sessões no banco de dados
const flash = require('connect-flash');//flash é para emitir mensagens que só podem ser usadas uma única vez, precisa da session para funcionar

const routes = require('./routes');//importando as rotas criadas
const path = require('path');//path é para resolver caminhos
const helmet = require('helmet');//segurança na aplicação
const csrf = require('csurf');//gerenciador de tokens de formulario, para impedir formulários de outros sites
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');//importando os middlewares

app.use(helmet());//executando o helmet

app.use(express.urlencoded({ extended: true }));//permitindo que formularios sejam enviados na requisição
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));// arquivos estaticos que devem ser acessados diretamente

const sessionOptions = session({//configurando a session
    secret: secret,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    saveUninitialized: false
});

app.use(sessionOptions);//passando a session como middleware
app.use(flash());//passando o flash como middleware

app.set('views', path.resolve(__dirname, 'src', 'views'));//setando a pasta de views
app.set('view engine', 'ejs');//setando a engine que vai renderizar as páginas


//nossos próprios middleware
app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('Pronto', ()=>{
    app.listen(3000, ()=>{
        console.log('Acessar: http://localhost:3000');
        console.log('Servidor rodando!');
    });
});

