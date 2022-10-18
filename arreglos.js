// alert("hola")

// let nombres=["Guillermo","Josue","Chino","Arely","Samuel"];

// // for (let i = 0; i < nombres.length; i++)
// // {
// //     // const element = nombres.
// // }

// let nombresNuevos = nombres.filter(e=>
//     {
//         if(nombres.length>7)
//         {
//             return nombres;
//         }
//     })


let nombres=[
    {
        nombre:"Guillermo",
        edad:37,
        sexo:"M"
    },
    {
        nombre:"Josue",
        edad:22,
        sexo:"M"
    },
    {
        nombre:"Chino",
        edad:20,
        sexo:"M"
    },
    {
        nombre:"Arely",
        edad:21,
        sexo:"F"
    },
    {
        nombre:"Samuel",
        edad:21,
        sexo:"M"
    }
]

 //ESTE ES PARA VER LOS DATOS DE PERSONAS SEXO M

// let hombres=nombres.filter(persona=>
//     {
//         if(persona.sexo=="M")
//         {
//             return persona;
//         }
//     })

//ESTE ES PARA VER DATOS DE PERSONAS CON EDAD MENOR A 25

    // let hombresjovenes=nombres.filter(persona=>
    //     {
    //         if(persona.sexo=="M" && persona.edad<25)
    //         {
    //             // console.log("evaluando a "+persona.nombre)
    //             return persona;
    //         }
    //     })

//ESTO ES PARA PONER SALUDOS A LAS PERSONAS Y VER SUS DATOS

        // let saludos=nombres.map(persona=>
        //     {
        //         return `Hola ${persona.nombre} tu edad es de ${persona.edad}`;
        //     })

//ESTO ES PARA ASIGNAR SUELDOS SOLO A PERSONAS CON EDAD MAYOR A 30 AÑOS
        // let sueldos=nombres.map(persona=>
        //         {
        //             let sueldo=0;
        //             if(persona.edad>30)
        //             {
        //                 sueldo=10000
        //             }
        //             return {nombre:persona.nombre,sueldo:sueldo};
        //         })

// let mujer=nombres.find(persona=>{
//     if(persona.sexo=="F")
//     {
//         return persona.nombre;
//     }
//     })

    // let mujer=nombres.find(persona=>{
    //     if(persona.nombre.includes==("Are"))
    //     {
    //         return true;
    //     }
    //     })

// nombres.forEach(persona=>{
//     console.log(persona.nombre);
//     })

// let hayMayores=nombres.some(persona=>{
//     if(persona.edad>30)
// {
//     return true;
// }
// })

// botoncito.addEventListener("click",()=>
// {
//     contenedor.innerText=input.value;
//     contenedor.className="sombreado";
// });

let contenedor=document.getElementById("contenedor");

let input=document.querySelector("#input");

let botoncito=document.querySelector("#botoncito");

input.addEventListener("keyup", ()=>
{
    if(input.value.length>3)
    {
        contenedor.innerText=input.value;
        contenedor.className="success";
    }
    else
    {
        contenedor.innerText="Texto invalido"
        contenedor.className="failed"
    }
})









