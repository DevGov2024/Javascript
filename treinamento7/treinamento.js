const somar = (x,y,z) =>{
   return (x + y +z); 
};

const media = (x,y,z) =>{
   return(x +y + z )/2; 
}

const calcular = (x, y, z, cb) =>{

 return cb (x,y,z, cb);


}
console.log(`Valor: 20,30,40`);
console.log(`calculando a soma: ${calcular(40,50,60, somar)}`);

console.log(`calculando a média: ${calcular(40, 50,60, media)}`);