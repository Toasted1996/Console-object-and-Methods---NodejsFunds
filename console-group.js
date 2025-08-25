//Console.group(): Nos permite agrupar mensajes en la consola


console.group('Grupo Principal');
console.log('Mensaje grupo principal');
console.group('Grupo Secundario');
console.log('Mensaje grupo secundario');
console.group('Grupo Terciario');
console.log('Mensaje grupo terciario');
console.groupEnd();
console.log('Final');
console.groupEnd();

