
//De concatenacio a Template String
const nombre = 'Alely'
const curso = 'JS/TS'
const msg1 = `Hola, ${nombre}. Bienvenido al curso de ${curso}.`
const msg2 = `Hoy es ${new Date().toLocaleDateString()}`
console.log(msg1, msg2)

//Interpolacion de expresiones
const a = 7
const b = 5
const etiqueta = (n: number) => (n % 2 === 0) ? 'par' : 'impar'
console.log(`${a} es ${etiqueta(a)}; y ${b} es ${etiqueta(b)}; total -> ${a} + {b} = ${a + b}`)

//Multilinea y legibilidad
const ayuda = `
Comandos utiles:
 - npm run dev
 - npm run build
 - npm run preview
 `
 console.log(ayuda.trim())

 //Template para HTML
 export function renderFase4TemplateHTML(){
    const alumno = { nombre: 'Alely', Avance: 85, Tema: 'Template strings' }

    const tarjeta = `
    <article class="card">
        <h2>${alumno.nombre}</h2>
        <p>Tema: <strong>${alumno.Tema}</strong></p>
        <p>Avance: ${alumno.Avance}</p>
        </article>
        `
    return tarjeta
}

//Formateo Basico de numeros y fechas
const precio = 1234.5
const mxn = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(precio)
const hoy = new Intl.DateTimeFormat('es-MX', { dateStyle: 'medium' }).format(new Date())
console.log(`Total: ${mxn} | Fecha: ${hoy}`)

//Mini-reto
const reporte = { curso: 'JS/TS Bases', unidad: 1, temas: ['Variables', 'Template Strings', 'Funciones'], completado: 0.4 }

export const templateHTMLReporte = `
<section>
    <h3>Curso: ${reporte.curso} (Unidad ${reporte.unidad})</h3>
    <p>Temas: ${reporte.temas.join(', ')}</p>
    <p>Progreso: ${Math.round(reporte.completado * 100)}</p>
</section>
`

    