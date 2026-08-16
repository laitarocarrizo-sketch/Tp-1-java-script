let numero1 = parseInt (prompt ('ingresar un numero'));

if(numero1 % 2 === 0 ){
    document.write('el ' +numero1+ ' es divisible por 2')   
}else if(numero1 % 3 === 0 ){
    document.write('el ' +numero1+ ' es divisible por 3') 
}else if(numero1 % 5 === 0){
    document.write('el ' +numero1+ ' es divisible por 5') 
}else if(numero1 % 7 === 0){
    document.write('el ' +numero1+ ' es divisible por 7') 
}else{
    document.write('el ' +numero1+ ' no es divisble por ningun numero') 
}