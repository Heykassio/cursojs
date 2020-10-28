import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css';

(function() {
    const novoCpf = new GeraCpf();
    const cpfDiv = document.querySelector('.cpf-gerado');

    cpfDiv.innerHTML = novoCpf.geraNovoCpf();
})();