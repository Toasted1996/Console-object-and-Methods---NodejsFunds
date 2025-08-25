//Console.time() nos permite medir el tiempo que tarda en ejecutarse una 

console.time('Operación');
for (let i = 0; i < 1000000; i++){
    //Operación que consume tiempo
}
console.timeEnd('Operación');