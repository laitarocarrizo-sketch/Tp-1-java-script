let numero1 = parseInt (prompt ('ingresar un numero'));
let numero2 = parseInt (prompt ('ingresar otro numero'));
let numero3 = parseInt (prompt ('ingresar otro numero'));

if(numero1 >numero2 && numero1 > numero3){
    document.write('el ' +numero1+ ' es el mayor')
} else if(numero2 > numero1 && numero2 > numero3){
    document.write('El '+numero2+ ' es el mayor')
}else{
    document.write('el ' + numero3+ ' es el mayor');
}
        