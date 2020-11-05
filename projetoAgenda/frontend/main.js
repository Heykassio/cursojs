import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import Register from './modules/Register';

import './assets/css/style.css';


const login = new Login('#form-login');
const cadastro = new Login('#form-cadastro');

const register = new Register('#form-contat');

login.init();
cadastro.init();
register.init();