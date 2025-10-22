import './style.css'
/*import './base/01-const-let'
import './base/02-template-string'
import './base/03-objetos-literales'
import './base/04-interface'
import './base/05-arrays'
import './base/06-functions'*/
import './Actividades/actividad3/template-html.ts'
import { renderFase4TemplateHTML, templateHTMLReporte } from './Actividades/actividad3/template-html.ts'
import './Actividades/actividad4/objetos-literales.ts'
import { rendeListHTML } from './Actividades/actividad4/objetos-literales.ts' 
import './Actividades/actividad5/Interfaces.ts'

import "./Actividades/actividad5/Interfaces.ts";
import {  type Student, formatStudent, findCourseById, courses, computerWorkLoad, findStudent, renderResult, renderActivity5 } from "./Actividades/actividad5/Interfaces.ts";
import './Actividades/actividad6/arrays.ts'
import { greet3 } from './Actividades/actividad7/functions.ts'
import './Actividades/actividad8/desestructuracion.ts'
import './Actividades/actividad9/arrays-desestructuracion.ts'
import { getHeroById, getHeroByOwner } from './Actividades/actividad10/tarea-heroes-data.ts'
import './Actividades/actividad11/promise.ts'
import './Actividades/actividad12/fetch-api.ts';
import './Actividades/actividad13/async-await.ts';


const student: Student = {
  id: '1',
  name: 'Ana',
  progress: 82,
  email: 'ana@gmail.com'
}
console.log(formatStudent(student));
const coursesHours = computerWorkLoad(courses);

console.log(getHeroById(4));
console.log(getHeroByOwner("Marvel"));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> Hola mundo </h1>
    ${renderFase4TemplateHTML()}
    ${templateHTMLReporte}
    ${rendeListHTML()}
    ${formatStudent(student)}
    ${findCourseById(courses, 'cur-102')?.title}
    <p> Horas totales de todos los cursos:  ${coursesHours} </p>
   <section>${renderResult(findStudent, (s) => `Seleccionado: ${s.name} (${ s.progress }%)`)}</section>
    ${renderActivity5()}
    ${greet3('Ana')}
   
  </div>
`


