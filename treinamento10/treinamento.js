const Vingadores = ['Thor', 'Hulk', 'Capitão América'];

for(let i = 0 ; i<=Vingadores.length; i++){

      console.log(`O valor do índice é:${i}, e ${Vingadores[i]}`)

}

for(const Vingador in Vingadores){
      console.log((`${Vingador}, ${Vingadores[Vingador]}`));

}