        //Crear un array
const characterNames = ['Leonel Messi', 'Cristiano Ronaldo', 'Neimar Jr'];
        //Obtener datos por medio de desestructuracion
const [data1, data2, data3] = characterNames;

console.log({ data1, data2, data3 });

const [, , neimar] = characterNames;
console.log({ neimar });

        //Crear una función que retorne un arrays
const returnsArrayFn = () => {
    return ['ABC', 123] as const;
};
        //Recuperar datos por invocacion a la funcion
const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);
       
        //Fase 3 Implementar useState
const useState = (initialValue: string): [string, (value: string) => void] => {
    return [
        initialValue,
        (value: string) => {
            console.log(value);
        }
    ];
};
        // Ejemplo de uso:
const [state, setState] = useState('Hola mundo');
console.log(state); // Imprime el valor inicial
setState('Nuevo valor'); // Imprime 'Nuevo valor' en consola