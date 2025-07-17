//retornando elementos pelo id 
//utilizando o getElementById()
const getId = document.getElementById('vingadores');
console.log(getId);
//utilizando o document.querySelector()
const queryId = document.querySelector('#vingadores')
console.log(queryId);


const getClass = document.getElementsByClassName('nome');

console.log(getClass);


const queryClass = document.querySelectorAll('.nome');
console.log(queryClass);

const getTag = document.getElementsByTagName('td');
console.log(getTag);


const queryTag = document.querySelectorAll('td');
console.log(queryTag);