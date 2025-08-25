//Vistas console //Tablas

const usuarios = [
    { id: 1, nombre:'Juan', rol: 'Dev'},
    { id: 2, nombre:'Maria', rol:'QA'},
    { id: 3, nombre:'Pedro', rol:'DevOps'}
]

//Vista console.log(): Es una representacion en texto de los datos, se ve literalmente como se pasa en el IDE
console.log(usuarios);

//Vista console.table(): Muestra los datos en forma de tabla, facilitando su visualizacion
console.table(usuarios);

//Vista console.table(segmentanda): Muestra solo los datos que se eligan

console.table(usuarios, ['nombre','rol']);


