let Palabra= prompt ('ingresar una palabra').toLowerCase();

for( let i = 0 ; i < Palabra.length ; i++){
   let letra= Palabra.charAt(i);
   if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    document.write(letra)
   }
}