console.log("ça marche");
console.log(456);

deux = 2;


for(let i = 1; i <= 10; i++){
    for(let j = 1; j<=  10; j++){
        console.log(`table de ${i}`, i * j);
    }
}

//console.log(5 * deux) 
let espace = "&nbsp"
function factoriser(nb){
let fact = 1;

for(let i = 1; i <= nb; i++){
 fact = fact * i
}
return fact
}

console.log(factoriser(6));

for(let i = 0; i < 10; i++){
    
    for(let k = 9-i; k < 10; k++){
        document.write('&nbsp')
        console.log('un espace');
    }
    
    for( let j = i  ; j < 10; j++){
    document.write('*')
    console.log("*" );
    }
    

    document.write('<br>')

}

