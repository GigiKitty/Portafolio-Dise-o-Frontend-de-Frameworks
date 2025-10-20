        //definir function
function greet(name:string):string{
    return `Hola${name}`
}
        //mandar a llamar a function e imprime
const message = greet('Messi')

console.log(message);
        //definir nueva function
const greet2 = (name:string):string => {
    return `Hola${name}`
}
        //mandar a llamar a function greet2
const message2 = greet2('Neymar')

console.log(message, message2)
        //Tarea: convierte la siguiente funcion a una funcion de arrow funtion
function getUser2(){
    return {
        uid: 'ABC-123',
        username: 'elprofesor',
    };
}
const user2 = getUser2()
console.log(user2)

        //Fase 3 Return implicito
const getStudent = () => ({
        uid: 'ABC-123',
        username: 'pancho perez',
    });

const student = getStudent()
console.log(student)

      /*  //Fase 4  JavaScript Callbacks
myNumber.forEach((value) => {
    console.log({   value});
});*/

        //Fase 5 Parámetros: opcionales, por defecto, rest y “named params”
export function greet3(name: string, tittle?: string): string {
    return tittle ? `Hello, ${tittle} ${name}` : `Hello, ${name}`;
}
function padLeft(text: string, count: number = 2, char: string = " "): string {
    return char.repeat(count) + text;
}
function average(...values: number[]): number {
    return values.length ? values.reduce((a,b)=>a+b,0)/values.length : 0;
}
type FormatOpts = { upper?: boolean; trim?: boolean; prefix?: string };

function formarText(text: string, { upper=false, trim=true, prefix='' }: FormatOpts = {}): string
{
    const cleaned = trim ? text.trim() : text;
    const core = upper ? cleaned.toUpperCase() : cleaned;
    return `${prefix}${core}`;
}

console.log(greet3('Ana'), greet3('Ana', 'Dr.'));
console.log(padLeft('TS', 3, '-'), average(10,20.30));
console.log(formarText(' hello ', { upper:true, prefix:'>' }));