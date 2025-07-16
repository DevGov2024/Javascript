


const somar= (x,y,z) =>{
return (x + y+z);
}

const media = (x,y,z)=>{
   return (x+y+z)/3;
}

const calcular =(x,y,z,cb)=>{

   return cb  (x,y,z);
}

console.log(`${calcular(10,10,10, somar)}`);
console.log(`${calcular(10,10,10, media)}`);