// import { nome as nome2, sobrenome, idade, soma } from './modulo1'; Posso atribuir novos 'nomes' usando a palavra 'as';
// import * as Modulo from './modulo1'; importa tudo em um objeto 
// import qualquercoisa from './modulo1';
import qualquercoisa, { nome, idade, sobrenome, soma } from './modulo1';

console.log(sobrenome);
console.log(idade);
console.log(soma(1, 2));
console.log(qualquercoisa(2, 10));
// console.log(qualquercoisa);