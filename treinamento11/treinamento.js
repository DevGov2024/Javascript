const herois =['Iron-man','Aunt-man', 'Spider-man', 'Vesp', 'Black widow'];


herois.forEach(heroi =>{
    const agilidade = Math.ceil(Math.random()*100);

    console.log(`${heroi} e ${agilidade}`);
})



herois.forEach(heroi=>{
    const agilidade = Math.ceil(Math.random()*100);

    console.log(`O herói tem um nível de poder de: ${heroi} e agilidade ${agilidade}`);
})