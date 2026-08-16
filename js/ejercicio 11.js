let numero1 = parseInt (prompt ('ingresar un numero'));
let esDivisible = false

if(numero1 % 2 === 0 ){
    document.write('el ' +numero1+ ' es divisible por 2 <br>')
    esDivisible=true;   
}if(numero1 % 3 === 0 ){
    document.write('el ' +numero1+ ' es divisible por 3 <br>')
    esDivisible=true;   
}if(numero1 % 5 === 0){
    document.write('el ' +numero1+ ' es divisible por 5 <br>')
    esDivisible=true;   
}if(numero1 % 7 === 0){
    document.write('el ' +numero1+ ' es divisible por 7 <br>')
    esDivisible=true;   
}if (esDivisible === false){
    document.write('el ' +numero1+ ' no es divisble por ningun numero') 
}