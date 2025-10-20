console.log(' \n -------- Objetos Literarios -------- \n\n')

//Crear un objeto

const person = {

    firstName : 'Valentin',
    lastName : 'Sainz',
    age : 1
}

console.log(person)

//Propiedades
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

//Modificar valores de las propiedades de person

person.firstName = 'Leonel'
person.lastName = 'Messi'
person.age = 38

console.log(person)

/*
Esto no se puede hacer, dara error
person = {
firstName = daniel
lastName = ontiveros
age = 25
}
*/

//Crear un objeto denominado student y que apunte al objeto person

const student = person

console.log(student)

student.firstName = 'Mario'
student.lastName = 'Almada'
student.age = 70

console.log(person, student)

//Crear un objeto diferente a partir del objeto person, utilizando el operador spred

const teacher ={ ...person, address:{
    postalCode: '84138',
    city: 'Hermosillo'
}}

teacher.firstName = 'Rojelio'
teacher.lastName = 'Jordan'
teacher.age = 55

console.log(person, teacher)

//Crear un objeto denominado employee a partir de person y agregar una nueva propiedad

const employee ={ ...person, HairColor:{
    color : 'black'
}}

employee.firstName = 'Esmeralda'
employee.lastName = 'Magadan'
employee.age = 21

    console.log(person, employee)

    //Modificar los datos de employee

employee.firstName = 'Jesus'
employee.lastName = 'Romero'
employee.age = 21
employee.HairColor.color = 'brown'

console.log(person, employee)

//Crear un clon de un objeto - Clon profundo (deep clone)

const otherperson = structuredClone(person)

console.log(otherperson)



