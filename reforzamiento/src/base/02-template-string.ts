console.log(' \n -------- Template String -------- \n\n')

const firstname = "Aleli"
const lastName = "Sainz"

console.log(firstname, " ", lastName)

//citas dentro de las cadenas

console.log('Alely \'es nombre de una flor\'')
const texto = 'O\' NEAL es el apellido de alguien'

console.log(texto)

//comillas invertidas o backtick

const fullName = `${firstname}  ${lastName} `
console.log(fullName)

//cadenas multilineas usando backtick

const template = `
     En este podemos agregar bloques de codigo, por 
     Ejemplo:

     El nombre completo es: ${firstname}  ${lastName}
    `
console.log(template)   

//Expresiones matematicos usando bakctick

console.log(`La suma es ${5+6}`)

//Otra prueba de sustitucion de expresiones

let price =10
let iva =0.25
let total = `Total: ${(price * (1 + iva)).toFixed(2)}`

console.log(total)

//Ejemplo: Generar una plantilla HTML

const html = `
<section>
    <h2> Section #1</h2>
    <p> Holiii </p>
</section>
`;
console.log(html)

//Ejemplo plantilla maestro
//Las comillas invertidas o backtick

let header ="Template String"
let html_template = `<h2> ${header} </h2>`
console.log(html_template)

//Ejemplo 2: Generando plantilla HTML

let tags = ["Template String", "JavaScript", "ES6"]

for(const tag of tags){
    html_template = `<i>${tag}</i>`
}

console.log(html_template)

