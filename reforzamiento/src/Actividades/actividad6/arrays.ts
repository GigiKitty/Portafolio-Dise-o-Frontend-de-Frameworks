console.log('------------------------- Arrays -----------------------------')
  
  //definir el array
const myArray:number[] = [1, 2, 3, 4, 5, 6]

    //Imprime el array
for(const myNumber of myArray){
    console.log(myNumber, 'holi')
}

    //Agregar datos al final del array
myArray.push(7)
myArray.push(8)

    //Imprime el array
console.log(myArray)

    //Crea un nuevo array usando spread
const myArray2 = [...myArray]

console.log({ myArray, myArray2 })

    //Agregar nuevos datos a myArray2
myArray2.push(9)
myArray2.push(10)
myArray2.push(11)

console.log({ myArray, myArray2 })

    //Declaración y tipado básico

const numbersA: number[] = [1, 2, 3]
const numbersB: Array<number  |  string> = [1, 'two', 3]

const tags: string[] = ['Fronten', 'Typescript']
const mixed: Array<number  |  string> = [1, 'two', 3]

console.log(numbersA, numbersB, tags, mixed)

    //patron inmutable: crear nuevos arreglos
const base: ReadonlyArray<number> = [10, 20, 25, 40, 50, 5, 30]

const sortedCopy = [...base].sort((a, b) => a - b)
const addedCopy = [...base, 40]
const filtered = base.filter(n => n > 15)

console.table({ 
    base, 
    sortedCopy, 
    addedCopy, 
    filtered})