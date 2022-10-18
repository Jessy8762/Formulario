// alert("no se we")

// var personas = [["Jessy","Gomez"], ["Jacqueline","Avalos"], ["Vicky","Verduzco"], ["Topo","Diaz"], ["Topogigio","sandoval"], 176];

// class miClase
// {
//     constructor(nombre,apellido)
//     {
//         this.nombre=nombre;
//         this.apellido=apellido;
//     }
// }

// function laPersona(nombre,apellido)
// {
//     this.nombre=nombre;
//     this.apellido=apellido;
// }

// let variable={
//     nombre:"Lenovo Ideapad",
//     ram:"12gb",
//     llorar:"diario"
// }

// var personas =
// {
// nombre:"Jessy",
// apellido:"Gomez",
// edad:21,
// correo:"unicojessy@gmail.com"
// }

// let nombre=variable.nombre;
// let ram=variable.ram;

// let frase = `Mi computadora ${variable.nombre} tiene ${variable.ram} de ram y llora ${variable.llorar}`; 

// var elJessy = new miClase("Jessy","Gomez");

// var elTopo = new laPersona("Yahir","Sandoval");

// var alumnos=
// [
//     {
//         nombre:"Samuel",
//         edad:"21",
//         // calificaciones:[1,2,3]
//     },
//     {
//         nombre:"Yahir",
//         edad:"20"
//     },
//     {
//         nombre:"Guillermo",
//         edad:"21"
//     }
// ]

var articulos=
[
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

var articuloscaros = articulos.filter((valor)=>
{
    if (valor.costo>2000)
        return valor;
})

var articulosdescuento=articulos.map((articulo)=>
{
//   articulo.costo=articulo.costo*0.8;
  return {nombre:articulo.nombre,costo:articulo.costo*0.8};
})



// articulos.forEach((valor)=>
// {
//    console.log(valor.nombre);
// })

// var numeros=
// [
//     23,13,56,67
// ]


// function otraFuncion()
// {
//     console.log("Escribo desde otra funcion");
// }

// function nuevaFuncion()
// {
//     console.log("Escribo desde la nueva funcion");
// }

// function escribir(laFuncion)
// {
//     return laFuncion();
// }

// escribir(otraFuncion);


// function suma(val1, val2)
// {
//     return val1+val2;
// }

// function multiplicar(val1, val2)
// {
//     return val1*val2;
// }

// function cal(val1, val2, calculo)
// {
//     return calculo(va1, val2);
// }

// console.log(cal(3,5,suma));



// function laFuncion(variabl1)
// {
//     return variabl1*2;
// }

// (variable1)=>{return variable1*2}

// variabl1=>{return variabl1*2}

// variabl1=>variabl1*2;

// ()=>variabl1*2;









