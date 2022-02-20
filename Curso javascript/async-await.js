let data = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'name2',
        age: 20
    },
    {
        id: 3,
        name: 'name3',
        age: 20
    }
]

// // const getData = () => {
// //     return data;
// // }
// // Operacion sincronica, se opera de arriba hacia abajo linea x linea
// const getData = () => data;


// Operacion asincrona

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (false) {
                resolve(data)
            } else {
                // Debe obtener un catch, caso contrario da error 
                reject('Error a proposito')
            }
        }, 1000);
    });

}

// Se crea una funcion fuera del flujo del programa
async function fetchData() {
    // Solo espera a que se resuelva 
    // let response = await getData()

    try {
        let response = await getData()
        // Se ejecuta siempre y cuando el await haya terminado
        console.log(response)
    } catch (error) {
        console.log(error)

    }
    // Se ejecuta siempre y cuando el await haya terminado
    // console.log(response)
}

fetchData()
// response.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// });
// undefined
console.log('Continua el programa')