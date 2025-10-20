console.log('--------- Modelo de las interfaces --------');

export interface Student{
   readonly id: string;
    name: string;
    email?: string;
    progress: number;
}

export interface Course{   
    readonly id: string;
    title: string;
    units: number;
}

const stdn1: Student = {
    id: '1',
    name: 'Ana',
    progress: 82,
   // role: 'admin' 
}

console.log(stdn1);

console.log("\n\n---------- Inmutabilidad y Coleccion Legible --------------\n\n")

//Modelo delas interfaces enrollment
export interface Enrollment{
    readonly studentId: string;
    readonly courseId: string;
    readonly status: 'active' | 'complete' | 'dropped';
}

const enroll: Enrollment = {
    studentId: '12',
    courseId: '2',
    status: 'active'
}

console.log(enroll);

//objeto inmutable

console.log("\n\n---------- Objetos Inmutables --------------\n\n")

export const students: ReadonlyArray<Student> = [
    { id: 'stu-02', name: 'Ana', progress: 82 },
    { id: 'stu-03', name: 'Luis', progress: 71, email: 'luis@gmail.com'}
]

export const courses: ReadonlyArray<Course> = [
    { id: 'cur-01', title: 'JS/TS Basic', units: 20 },
    { id: 'cur-02', title: 'FronEnd Foundation', units: 24 }
]


console.log('\n\n---------- Composicion: extends y segregaciones de interface --------\n\n');

export interface WithTimesTamps{
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export interface EnrollmentStudents extends Student, WithTimesTamps{
    courseId: string;
}

const stdn2: EnrollmentStudents = {
    id: 'stu-003',
    name: 'Mia',  
    progress: 90,
    courseId: 'cur-01',
    createdAt: new Date(),
    updatedAt: new Date()
}

console.log(stdn2);

console.log('\n\n-------- Funciones puras que consumen interfaces ------\n\n');

export function formatStudent(s: Student){
    const p = Math.max(0, Math.min(100, s.progress));
    return `${s.name} - ${p}%`;
}

console.log('\n\n----------Busqueda de un curso --------------\n\n');

export function findCourseById(
    List: ReadonlyArray<Course>, 
    id: string) : 
    Course | undefined {
        return List.find(c => c.id === id);
}

console.log(findCourseById(courses, 'cur-02'));

console.log('\n\n---------- Horas totales de os cursos --------------\n\n');

export function totalUnitsCourses(
    List: ReadonlyArray<Course>): number
    {
return List.reduce((acc, cur) => acc + cur.units, 0);
    }

export function computerWorkLoad(
    List: ReadonlyArray<Course>,
    hoursPerUnit = 2): number
    {
return totalUnitsCourses(List) * hoursPerUnit;
    }

        //Fase 5 Contartos de resultados

export interface Success<T> {ok: true; data: T; }
export interface Failure {ok: false; error: string; }
export type Result<T> = Success<T> | Failure;

export function getStudent(id: string): Result<Student>{
    const found = students.find(s => s.id === id);
    return found ? { ok: true, data: found } : { ok: false, error: 'Student not found' };
}

export const findStudent = getStudent('stu-03');
console.log(findStudent);


export function renderResult<T>(r: Result<T>, onOK: (v: T) => string): string{
   switch(r.ok){
    case true: return onOK(r.data);
    case false: return `Error: ${r.error}`;
   }
}


        //Fase 6 Renderizado de Lista

function renderList(title: string, items: ReadonlyArray<string>): string {
    return `
    <section>
        <h2>${title}</h2>
        <ul>${ items.map(i => `<li>${i}</li>`).join(' ') }</ul>
    </section>
    `
}

export function renderActivity5(): string{
    const listA = students.map(formatStudent)
    const WorkLoad = computerWorkLoad(courses)

    const studentBlock = renderList(`Students`, listA)
    const courseBlock = renderList(`Courses`, courses.map(c => `${c.title} - ${c.units}h`))

    const StudentData = getStudent('stu-03')
    const detail = renderResult(StudentData, v => `Seleccionado: ${ v.name} (${v.progress})%`)

    return `
        ${ studentBlock}
        ${ courseBlock}
        <section class = "card" > 
        <p>${ detail}</p>
        <p> Total carga: ${ WorkLoad}h </p>
        </section>
    `

}