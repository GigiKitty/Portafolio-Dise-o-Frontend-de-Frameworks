//Declaracion basica de un objeto

console.log('\n\n----- Crear un objeto -----\n\n\n')

const student = {
    name: 'Alely',
    age: 21,
    active: true,
    major: 'Software Engineering',
}
console.log('student:', student)

//Acceder, actualizar y tratar propiedades inexistentes en un objeto
console.log('\n\n----- Acceder y actualizar propiedades inexistentes -----\n\n\n')
    //acceso
console.log(student.name) 
console.log(student['major'])
    //modificacion
student.age = 21
student.semester = 3
    //tatar con propiedades inexistentes
console.log(student.notExists)
    //encadenamiento opcional + nullish coalescing 
console.log(student.tutor?.name ?? 'No tutor')

//Implemetar Metodos y usar this en un objeto
console.log('\n\n----- Metodos y this -----\n\n\n')

const course = {
    title: 'JS/TS Basics',
    enrrolled: 25,
    add(n) { this.enrrolled += n; },
    summary() { return `${this.title} (${this.enrrolled} enrolled)`; }
};
course.add(5)
console.log(course.summary())

//Implementar atajos y propiedades computadas
console.log('\n\n----- Atajos y propiedades computadas -----\n\n\n')

const name = 'Alely'
const group = 'IS-301' 
    //shorthand
const profile = { name, group }
console.log(profile);
    //propiedad computada
const fieldKey = 'average'
const record = { [fieldKey]: 89, status: 'regular'}
console.log(record);

//Realizar copias superficiales y fusión de objetos
console.log('\n\n----- Copias superficiales y fusión -----\n\n\n')

const base = {x: 1, nested: { z: 2}}
    //copias superficiales
const shallowCopy = { ...base, x: 9 }
console.log('shallowCopy:', shallowCopy)
    //fusion
const preference = { theme: 'dark'}
const user = { id:7, name: 'Alely'}
const userPorfile = { ...user, ...preference}
console.log('userPorfile:', userPorfile)
     //warning: copia superficial -> referencias compartidas
shallowCopy.nested.z = 100;
console.log(base.nested.z);

//Utilizar arreglos de objetos + render en DOM
console.log('\n\n----- Arreglos de objetos + render en DOM -----\n\n\n')

const students = [
    {  name: 'Alely', progress: 85 , topic: 'Objects' },
    {  name: 'Juan', progress: 72  , topic: 'Destructuring'},
    {  name: 'Maria', progress: 91  , topic: 'Spread'},
];
    //render en DOM del objeto students
const listHTML = `
<section>
    <h2>Students</h2>
    <ul>
        ${students.map( s => `<li>${s.name} - Topic: ${s.topic} (${s.progress}%)</li>`).join('')}
    </ul>
</section>
`;
export function rendeListHTML(){
    return listHTML;
}

//Implementar desestructuración con valores por defecto
console.log('\n\n----- Desestructuración con valores por defecto -----\n\n\n')

const config = {port: 5173, mode:'dev'};
    //destructuracion de config
const { port, mode, host = 'localhost'} = config;
console.log(`Server: http://${host}:${port} | mode: ${mode}`);

//Aprende sobre JSON: serializar y recuperar
console.log('\n\n----- JSON: serializar y recuperar -----\n\n\n')
    //convertir un string un objeto
const jsonText = JSON.stringify(students)
console.log('JSON:', jsonText)
    //recuperar objeto
const studentsParsed = JSON.parse(jsonText)
console.log('Parsed:', studentsParsed)

   
/*preguntas de reflexión por fase
Fase 1 – Declaración básica
1. ¿Qué ventaja tiene representar a student como objeto en lugar de variables sueltas? 
    Tener una mejor organizacion

Fase 2 – Acceso, actualización y propiedades inexistentes
2. ¿Cuándo prefieres dot access (student.name) frente a bracket access (student['name']) y por qué? 
    Prefiero dot access y student.name lo usaría para propiedades estáticas y conocidas
3. ¿Qué riesgos ves en agregar propiedades en caliente (p. ej., student.semester = 3) durante la
ejecución?
    dificulta la depuración y el mantenimiento del código 

Fase 3 – Métodos y this
4. ¿Por qué no usar => (arrow function) en métodos que dependen de this? Explica el problema típico.
     las funciones de flecha no tienen su propio this

Fase 4 – Shorthand y propiedades computadas
5. ¿En qué escenarios una propiedad computada ([fieldKey]) aporta claridad en vez de “magia oculta”?
    al crear un objeto a partir de un formulario

Fase 5 – Spread (copias superficiales) y fusión
6. ¿En qué orden debe hacerse la fusión ({ ...a, ...b }) para respetar la prioridad de campos y por qué?
    Debe hacerse en el orden { ...a, ...b } para que el objeto b sobreescriba los campos de a

Fase 6 – Arreglos de objetos + render en DOM
7. ¿Qué riesgo de seguridad introduces al interpolar HTML con template strings? Menciona un ejemplo
y una mitigación.
    Riesgo de inyección de código malicioso. 
    Ejemplo: si los datos provienen de una fuente no confiable, como la entrada del usuario, 
    un atacante podría insertar código HTML o JavaScript malicioso en los datos.
     Mitigación: sanitizar y validar los datos antes de renderizarlos en el DOM.
*/