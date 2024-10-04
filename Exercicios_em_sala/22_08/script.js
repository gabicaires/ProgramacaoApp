// function imprimr(){
//     document.write('<p> Contando</p>')
// }

// setInterval(imprimir,1000)

// setInterval(() => {
//     document.write('<p> Contando</p>')
// }, 1000);

// -----------------------------------------------------------------------------------

// let contador = document.getElementById('contador')

// var timer = setInterval(() => {
//     contador.innerHTML += 'Hello!<br/>'
// }, 1000);

// -----------------------------------------------------------------------------------

// function stopTime(){
//     clearInterval(timer)
// }

// setTimeout(() => {
//     contador.innerHTML += 'Hello!<br/>'
// }, 2000);

// -----------------------------------------------------------------------------------

// var nome = 'victor'

// if(nome === 'victor'){
//     var profissao = 'professor'
//     console.log(profissao)
    
// }

// if(nome === 'victor'){
//     var cargo = 'CEO'
//     cargo = 'Maneger'
//     console.log(cargo)
    
// }

// if(nome === 'victor'){
//     const status = 'success'
//     status = 'error'
//     console.log(status)
    
// }

// -----------------------------------------------------------------------------------

// let pessoa = {
//     nome: 'victoria',
//     idade: 32,
//     cargo: 'Fullstack',
// }

// -----------------------------------------------------------------------------------

// let users = [
//     {nome: 'Arthur', idade: 22, cargo: 'PO'},
//     {nome: 'Emilly', idade: 23, cargo: 'ScrumMaster'},
//     {nome: 'Gabriela', idade: 22, cargo: 'Analista'},
// ]

// for (var i = 0; i < users.length; i++){
//     console.log(users[i]);
    
// }

// -----------------------------------------------------------------------------------

// let pessoa = {
//     nome: 'Leonardo',
//     idade: 24,
//     profissao: 'Testador',
// }

// -----------------------------------------------------------------------------------

// let {nome, idade} = pessoa
// console.log(nome);

// let numerosPares = [2,4,6,8,10]
// let numerosImpares = [...numerosPares,1,3,5,7,9]

// console.log(numerosImpares)

// -----------------------------------------------------------------------------------

// let pessoa = {
//     nome: 'Naianni',
//     idade: 24,
// }

// let profissional = {
//     ...pessoa,
//     cargo: 'Dev',
// }

// console.log(profissional);

// -----------------------------------------------------------------------------------

// function user(info){
//     let data = {
//         ...info,
//         status: ' ok',
//         inicio: '2024'
//     }
//     console.log(data);
    
// }

// -----------------------------------------------------------------------------------

// function gerarNumeros(...numeros){
//     console.log(numeros);

//     const numeroSorteado = Math.floor(Math.random() * numeros.length)

//     console.log(numeros[numeroSorteado])
    
// }

// gerarNumeros (2, 4, 67, 58, 25, 54)

// -----------------------------------------------------------------------------------

// let nomes = ['Gabi', 'Emilly', 'Nai', 'Arthur']

// nomes.map((item, index) => {
//     console.log(iten, index);
    
// })

// -----------------------------------------------------------------------------------

// function somaRegular(a,b) {
//     let total = a + b
//     return console.log(total)
// }

// somaRegular(10,10)

// -----------------------------------------------------------------------------------

// //fução anonima

// let soma = (b, c) =>{
//     let result = b + c
//     console.log(result);
// }

// soma(20,20)

// -----------------------------------------------------------------------------------

let users = []

function getUsers(){ 
    fetch('https://reqres.in/api/users?page=2')
}