// let users = fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     // Respuesta no serializada
//     // console.log(response)
//     response.json().then((data) => {
//         // Respuesta serializada
//         console.log(data)
//     })
// })


// Forma 2
// let users = fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// })


// Forma 3 mas simplificada
// let users = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))


let users = fetch('https://jsonplaceholder.typicode.com/users')
  